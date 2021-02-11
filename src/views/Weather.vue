// SvgMap.vue上傳地點，Weather.vue收到後處理
<script>
import { onUnmounted, onMounted, computed, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import AOS from "aos"; //動畫組件
import SvgMap from "../components/SvgMap";
export default {
  components: {
    SvgMap,
  },
  setup() {
    const store = useStore();
    let locationIdx = null;
    /** weatherArr存放3個時段的天氣資料 */
    const weatherArr = reactive([]);

    // 三十六小時天氣預報物件原型
    const weather_36HR_ForecastData = {
      startTime: "2021-01-01 00:00:00", //開始時間
      endTime: "2021-01-01 00:00:00", //結束時間
      Wx: "晴時多雲", //天氣現象
      MaxT: "18", //最高溫度
      MinT: "12", //最低溫度
      CI: "寒冷至稍有寒意", //舒適度
      PoP: "0", //降雨機率
    };

    const locationSelect = reactive([
      "Chiayi", //嘉義縣 0
      "New Taipei City", //新北市 1
      "Chiayi City", //嘉義市 2
      "Hsinchu", //新竹縣 3
      "Hsinchu City", //新竹市 4
      "Taipei City", //臺北市 5
      "Tainan City", //臺南市 6
      "Yilan", //宜蘭縣 7
      "Miaoli", //苗栗縣 8
      "Yunlin", //雲林縣 9
      "Hualien", //花蓮縣 10
      "Taichung City", //臺中市 11
      "Taitung", //臺東縣 12
      "Taoyuan", //桃園市 13
      "Nantou", //南投縣 14
      "Kaohsiung City", //高雄市 15
      "Kinmen", //金門縣 16
      "Pingtung", //屏東縣 17
      "Keelung City", //基隆市 18
      "Penghu", //澎湖縣 19
      "Changhua", //彰化縣 20
      "Lienchiang", //連江縣 21
    ]);

    // 連線氣象API，掛在onMounted是為了在畫面一進去就直接進行
    const connectAPI = () => {
      store.dispatch("handApiInit");
    };
    onMounted(() => {
      connectAPI();
      AOS.init();
    });

    /** 指定locationSelect來決定地區，從vuex篩選資料 */
    const selectArea = () => {
      console.log(
        "[Weather -> selectArea] 使用selectArea，指定locationIdx來從vuex篩選資料"
      );
      store.dispatch("handSelectArea", locationIdx);
    };

    // 從VUEX抓從API獲取的氣象資料
    const weaData = computed(() => store.getters.weaData);
    const datasetDescription = computed(() => store.getters.datasetDescription);
    const weatherData = computed(() => store.getters.weatherData);
    const filterdata = computed(() => store.getters.filterdata);
    const locationName = computed(() => store.getters.locationName);
    const weatherElement = computed(() => store.getters.weatherElement);

    /** 設定天氣資訊
     * @param {Number} selected 選擇的地區編號，預設為0
     */
    const setWeatherForecastData = (selected = 0) => {
      console.log(
        "[Weather -> setWeatherForecastData] 選擇的地區selected編號 =",
        selected
      );
      if (weatherElement.value.length > 0) {
        // console.log("[Weather -> setWeatherForecastData] selected =", selected);
        let weaData = Object.create(weather_36HR_ForecastData);

        weaData.startTime = weatherElement.value[0].time[selected].startTime;
        weaData.endTime = weatherElement.value[0].time[selected].endTime;
        weaData.Wx =
          weatherElement.value[0].time[selected].parameter.parameterName;
        weaData.PoP =
          weatherElement.value[1].time[selected].parameter.parameterName;
        weaData.MinT =
          weatherElement.value[2].time[selected].parameter.parameterName;
        weaData.CI =
          weatherElement.value[3].time[selected].parameter.parameterName;
        weaData.MaxT =
          weatherElement.value[4].time[selected].parameter.parameterName;

        // console.log(
        //   "[Weather -> setWeatherForecastData] 設定weaData的結果 =",
        //   weaData
        // );
        // console.log(
        //   "[Weather -> setWeatherForecastData] 將weaData加入weatherArr"
        // );
        weatherArr.push(weaData);
      }
    };

    /** 往weatherArr設定氣象資料，重複三次 */
    const showData = () => {
      // console.log("locationName = ", locationName);
      while (weatherArr.length) {
        weatherArr.pop();
      }

      console.log(
        "[Weather -> showData] ====== 開始加入資料到weatherArr ====== "
      );

      for (let i = 0; i <= 2; i++) {
        setWeatherForecastData(i);

        console.log(
          `[Weather -> showData] 顯示第${i + 1}次加入weatherArr資料 =`,
          weatherArr
        );
      }
      console.log(
        "[Weather -> showData] ====== 結束加入資料到weatherArr ====== "
      );
    };

    /** 接收從SvgMao.vue用emit傳過來的資料 + 如何處理資料 */
    const location = (local) => {
      console.log("[Weather -> location] 接收到emit傳遞的資料");
      console.log("---- 執行 location -----");
      console.log("[Weather -> location] emit傳遞的資料 =", local);
      locationIdx = locationSelect.indexOf(local);
      console.log(
        "[Weather -> location] 設定locationIdx完成，locationIdx =",
        locationIdx
      );
      selectArea();
      showData();
      console.log("---- location 結束 -----");
    };

    // watch(selected, () => setWeatherForecastData(selected));
    // watch(locationIdx, () => selectArea());

    return {
      datasetDescription,
      locationName,
      location,
      weatherArr,
    };
  },
};
</script>

<template>
  <div class="container">
    <SvgMap @weather="location" class="map-css" />
    <div v-if="locationName" class="area" data-aos="fade-up">
      {{ locationName }} - {{ datasetDescription }}
      <div v-if="locationName" data-aos="fade-up">
        <br />
        <template v-if="locationName">
          <div class="data-area" v-for="(item, idx) in weatherArr" :key="idx">
            {{ item.startTime }} 至 {{ item.endTime }} <br />
            此段時間天氣{{ item.Wx }}，{{ item.CI }}<br />
            溫度攝氏{{ item.MinT }}至{{ item.MaxT }} <br />
            降雨機率 : {{ item.PoP }}% <br />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  // padding-top: 40px;
  padding-bottom: 40px;
}
.map-css {
  float: left;
  width: 75%;
}
.area {
  float: left;
  width: 25%;
  font-size: 30px;
}
.data-area {
  font-size: 18px;
  // border-style: solid;
  background-color: rgba(0, 0, 0, 0.65);
  // border-color: gold;
  // border-block-color: orange;
  border-radius: 5vh;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
