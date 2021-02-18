import { createStore } from "vuex";
import axios from "axios";
import { apiGetweatherRequest, apiGetweatherListRequest } from "../api";
import LocalStorage from "../modules/LocalStorage";

// KEY = todo-vue
// 用new起一個新的東西，之後只要替換掉STORE，就又是一個新的LocalStorage
const STORE = new LocalStorage("todo-vue");

// 從API上抓資料下來會變 響應式資料(proxy{} = 使用reactive({})後出來一致)，是因為Vue3的架構?
// 看來是不設定為ref就是直接設定成reactive，所以不特別使用ref就要依照reactive來使用?
export default createStore({
  state: {
    //------------------------------------- 天氣 -------------------------------------
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
    //------------------------------------- 天氣 -------------------------------------
    //------------------------------------- TodoList -------------------------------------
    todos: [
      { content: 123, done: false },
      { content: 456, done: false },
      { content: 789, done: false },
    ],
    //------------------------------------- TodoList -------------------------------------
  },
  actions: {
    //------------------------------------- 天氣 -------------------------------------
    /** 天氣資訊初始化 */
    async handApiInit({ commit }) {
      console.log("[Vuex -> actions] 在vuex中執行handApiInit");
      try {
        const res = await apiGetweatherRequest();
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
    /** 篩選天氣資料
     * @param {Number} idx 選擇的地區編號，預設為0
     */
    handSelectArea({ commit }, idx = 0) {
      console.log(
        "[Vuex -> actions] 執行selectArea，指定Area資訊，之後透過getters抓取資料"
      );
      console.log("[Vuex -> actions] 指定AreaNum =", idx);
      commit("selectArea", idx);
    },
    //------------------------------------- 天氣 -------------------------------------
    //------------------------------------- TodoList -------------------------------------
    CREATE_TODO({ commit }, { todo }) {
      //1. POST //在用axios時可用axios.post()
      const todos = STORE.load();
      todos.push(todo);
      STORE.save(todos);
      //2. commit mutation
      commit("SET_TODOS", todos);
      //3. return
      return {
        tId: todos.length - 1,
        todo,
      };
    },
    READ_TODO({ commit }) {
      //1. Load
      const todos = STORE.load();
      //2. commit mutation
      commit("SET_TODOS", todos);
      //3. return
      return {
        todos,
      };
    },
    UPDATE_TODO({ commit }, { tId, todo }) {
      //1. PATCH //axios.patch()
      const todos = STORE.load();
      todos.splice(tId, 1, todo);
      STORE.save(todos);
      //2. commit mutation
      commit("SET_TODOS", todos);
      //3. return
      return {
        tId,
        todo,
      };
    },
    // UPDATE_TODO({ commit }, { tId, content }) {
    //   //1. PATCH //axios.patch()
    //   const todos = STORE.load();
    //   todos[tId].content = content;
    //   STORE.save(todos);
    //   //2. commit mutation
    //   commit("SET_TODOS", todos);
    //   //3. return
    //   return {
    //     tId,
    //     todo: todos[tId],
    //   };
    // },
    DELETE_TODO({ commit }, { tId }) {
      //1. DELETE //axios.delete()
      const todos = STORE.load();
      const todo = todos.splice(tId, 1)[0];
      STORE.save(todos);
      //2. commit mutation
      commit("SET_TODOS", todos);
      //3. return
      return {
        tId: null,
        todo,
      };
    },
    CLEAR_TODO({ commit }) {
      //1. CLEAR
      const todos = [];
      STORE.save(todos);
      //2. commit mutation
      commit("SET_TODOS", todos);
      //3. return
      return {
        todos,
      };
    },
    //------------------------------------- TodoList -------------------------------------
  },
  mutations: {
    //------------------------------------- 天氣 -------------------------------------
    /** 初始化天氣資料
     * @param {Array} resData 從氣象局API獲得的資料
     */
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
    /** 第一次篩選資料，依據地區
     * @param {Number} idx 選擇的地區編號，預設為0
     */
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
    //------------------------------------- 天氣 -------------------------------------
    //------------------------------------- TodoList -------------------------------------
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    //------------------------------------- TodoList -------------------------------------
  },
  getters: {
    //------------------------------------- 天氣 -------------------------------------
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
    //------------------------------------- 天氣 -------------------------------------
    //------------------------------------- TodoList -------------------------------------
    /** 原始資料轉為有Id的模式 */
    list(state) {
      return state.todos.map((todo, index) => {
        return {
          tId: index,
          todo,
        };
      });
    },
    /** 把從list做好的資料，做filter過濾 */
    filterList(state, getters) {
      return function(filter) {
        let status = null;
        switch (filter) {
          case "all":
            return getters.list;
          case "active":
            status = false;
            break;
          case "done":
            status = true;
            break;
          default:
            return [];
        }
        return getters.list.filter((todo) => {
          return todo.todo.done === status;
        });
      };
    },
    //------------------------------------- TodoList -------------------------------------
  },
  modules: {},
});

// 氣象API授權碼：CWB-193CFB52-6B00-4059-8966-CCF94B309919
