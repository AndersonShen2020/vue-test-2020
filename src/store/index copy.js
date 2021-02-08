import { createStore } from "vuex";
import axios from "axios";
import { apiGetweatherRequest, apiGetweatherListRequest } from "../api";

export default createStore({
  state: {
    // 資料標題
    datasetDescription: {},
    // 天氣資料
    weatherData: {},
    // 篩選後資料
    filterdata: {},
  },
  actions: {
    async handApiInit({ commit }) {
      console.log("1. 在vuex中執行handApiInit");
      try {
        const res = await apiGetweatherRequest();
        const resList = await apiGetweatherListRequest();
        console.log("2. 取得resList");
        console.log(resList.data);
        console.log("2. 從api拿到資料");
        console.log(res.data.records);

        commit("apiInit", res.data.records);

        console.log("3. 連線氣象API成功，轉存資料在VUEX成功");
        return res.data.records;
      } catch (error) {
        // 要跟後端的ERROR訊息一致
        console.error(error.response);
      }
    },
    // 篩選資料
    handSelectArea({ commit }, idx = 0) {
      console.log(
        "功能 : 執行selectArea，指定Area資訊，之後透過getters抓取資料，指定AreaNum =",
        idx.value
      );
      commit("selectArea", idx.value);
    },
  },
  mutations: {
    // 初始化資料
    apiInit(state, resData) {
      console.log(
        "2. 在mutations執行apiInit，將資料分別存入 datasetDescription 跟 weatherData"
      );
      state.datasetDescription = resData.datasetDescription;
      state.weatherData = resData.location;
    },
    selectArea(state, idx) {
      console.log("在mutations執行selectArea");
      state.filterdata = state.weatherData.slice(idx, idx + 1);
      console.log(state.filterdata);
    },
  },
  getters: {
    datasetDescription(state) {
      return state.datasetDescription;
    },
    weatherData(state) {
      return state.weatherData;
    },
    filterdata(state) {
      return state.filterdata;
    },
  },
  // modules: {},
});

// 氣象API授權碼：CWB-193CFB52-6B00-4059-8966-CCF94B309919
