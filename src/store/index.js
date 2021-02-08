import { createStore } from "vuex";
import axios from "axios";
import { apiGetweatherRequest, apiGetweatherListRequest } from "../api";
import { toRefs } from "vue";

// 從API上抓資料下來會變 響應式資料(proxy{} = 使用reactive({})後出來一致)，是因為Vue3的架構?
// 看來是不設定為ref就是直接設定成reactive，所以不特別使用ref就要依照reactive來使用?
export default createStore({
  state: {
    // 從API下載的資料，響應式資料(proxy{})
    weaData: {},
    // 資料標題，響應式資料(proxy{})
    datasetDescription: "",
    // 天氣資料，響應式資料(proxy{data: {...}})
    weatherData: [],
    // 第一次篩選資料，依據地區，響應式資料(proxy{})
    filterdata: {},
    // 塞選資料後，地區名稱 & 該地區氣象資料
    locationName: "",
    weatherElement: {},
  },
  actions: {
    async handApiInit({ commit }) {
      console.log("[Vuex -> actions] 在vuex中執行handApiInit");
      try {
        const res = await apiGetweatherRequest();
        // const resList = await apiGetweatherListRequest();
        // console.log("2. 取得resList");
        // console.log(resList.data);
        console.log("[Vuex -> actions] 從api拿到資料");
        console.log("[Vuex -> actions] res.data內容為 =", res.data.records);
        console.log("[Vuex -> actions] 將資料傳入 apiInit ，初始化資料");
        commit("apiInit", res.data);

        console.log("[Vuex -> actions] 連線氣象API成功，轉存資料在VUEX成功");
        return res.data.records;
      } catch (error) {
        // 要跟後端的ERROR訊息一致
        console.error(error.response);
      }
    },
    // 篩選資料
    handSelectArea({ commit }, idx = 0) {
      console.log(
        "[Vuex -> actions] 執行selectArea，指定Area資訊，之後透過getters抓取資料"
      );
      console.log("[Vuex -> actions] 指定AreaNum =", idx);
      commit("selectArea", idx);
    },
  },
  mutations: {
    // 初始化資料
    apiInit(state, resData) {
      console.log(
        "[Vuex -> mutations] 在mutations執行apiInit，將資料分別存入 datasetDescription 跟 weatherData"
      );
      console.log(
        "[Vuex -> mutations] 收到的資料總長：",
        resData.records.location.length
      );
      // 從 resData.records.datasetDescription 轉存到 state.datasetDescription
      // resData.records.datasetDescription 單純為文字
      // state.datasetDescription 會是一個響應式資料(proxy{} = 使用reactive({})後出來一致)
      // 所以要從API轉存成本地資料，應該抓上一階的資料(resData.records)，而不是直接用要使用的資料(resData.records.datasetDescription)
      state.weaData = resData.records;
      state.datasetDescription = resData.records.datasetDescription;
      state.weatherData = resData.records.location;
    },
    // 第一次篩選資料，依據地區
    selectArea(state, idx) {
      console.log("----- VUEX mutations 操作階段 -----");
      console.log(
        "[Vuex -> mutations] 在mutations執行selectArea，收到的idx為 =",
        idx
      );
      // 篩選資料，依據地區
      state.filterdata = state.weatherData.slice(idx, idx + 1);
      console.log("[Vuex -> mutations] state.filterdata = ", state.filterdata);
      state.locationName = state.filterdata[0].locationName;
      state.weatherElement = state.filterdata[0].weatherElement;
      console.log(
        "[Vuex -> mutations] state.locationName =",
        state.locationName
      );
      console.log(
        "[Vuex -> mutations] state.weatherElement =",
        state.weatherElement
      );
      console.log("----- VUEX mutations 操作結束 -----");
    },
  },
  getters: {
    weaData(state) {
      return state.weaData;
    },
    datasetDescription(state) {
      return state.datasetDescription;
    },
    weatherData(state) {
      return state.weatherData;
    },
    filterdata(state) {
      return state.filterdata;
    },
    locationName(state) {
      return state.locationName;
    },
    weatherElement(state) {
      return state.weatherElement;
    },
  },
  modules: {},
});

// 氣象API授權碼：CWB-193CFB52-6B00-4059-8966-CCF94B309919
