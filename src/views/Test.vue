<script>
import {
  ref,
  reactive,
  onBeforeUpdate,
  onUpdated,
  nextTick,
  computed,
  onMounted,
  watchEffect,
  watch,
  onBeforeUnmount,
  onUnmounted,
  h,
  render,
  createApp,
} from "vue";
import device from "current-device";

export default {
  setup() {
    // console.log(app);
    // const test = {
    //   data1: "test1",
    //   data2: "test2",
    //   data3: "test3",
    //   data4: "test4",
    //   clog: function() {
    //     console.log("--------------------------------");
    //     console.log("test's this = ", this);
    //     console.log("test's this.data = ", this.data);
    //     for (let data in this) {
    //       console.log(data, " : ", this[data]);
    //     }
    //     console.log("--------------------------------");
    //   },
    // };
    // test.clog();

    // let y = null;
    // let aaa = (x) => {
    //   console.log("x = ", x);
    //   return x;
    // };
    // let a1 = aaa(111);
    // let a2 = aaa(222);
    // let bbb = [a1, a2];
    // bbb.push(33);
    // bbb.push(44);
    // let ccc = { name: "" };
    // bbb.push((ccc["name"] = "zzz"));
    // bbb.push((ccc["name"] = "yyy"));
    // console.log("aaa = ", aaa);
    // console.log("bbb = ", bbb);
    // console.log("ccc = ", ccc);

    const nowTimer = new Date();
    console.log("device.desktop() = ", device.desktop());
    // let data = ref("123456789");
    // setInterval(() => {
    //   data.value = "798456123";
    //   console.log("setInterval");
    // }, 5000);

    // -------------------------------- checkBox -----------------------------------------
    let checkBoxData = reactive({ checkBox: [] });
    const claerCBD = () => {
      checkBoxData.checkBox = [];
    };

    // -------------------------------- checkBox - Boolean -----------------------------------------
    let isOpen = ref(false);
    const testlog = (newVal) => {
      console.log("testlog isOpen =", isOpen.value);
    };
    watch(isOpen, (newVal) => {
      console.log("New isOpen =", newVal);
      if (newVal) {
        testlog(newVal);
      }
    });

    // -------------------------------- select -----------------------------------------
    let selectData = reactive({ select: [] });
    // -------------------------------- input -----------------------------------------
    let inputData = reactive({ input: "753159" });
    // -------------------------------- vhtml -----------------------------------------
    let vhtmltext = reactive({
      text: `<h1 v-model="inputData.input">vhtmltext , ${inputData.input}</h1>`,
    });
    // -------------------------------- v-on - click -----------------------------------------
    let amount = 0;
    let count = ref(0);
    const plus = (amount, text, event) => {
      // console.log("plus event", event.target.tagName);
      // console.log("plus text", text);
      count.value += amount;
    };
    // -------------------------------- h -----------------------------------------

    // let htext = () => {
    //   let vnode = h("div", { style: { fontsize: "24px" } }, "你好" + hname);
    //   let getnode = document.getElementsByClassName("test-container");
    //   let parent = document.createElement("div");

    //   let xxx = render(vnode, parent);
    //   console.log(xxx);
    // };

    return {
      nowTimer,
      checkBoxData,
      claerCBD,
      isOpen,
      selectData,
      inputData,
      vhtmltext,
      count,
      plus,
    };
  },
};
</script>

<template>
  <h1>各類測試用頁面</h1>
  <div class="about">
    <div class="timer">time : {{ nowTimer.toString() }}</div>
  </div>
  <div class="test-container">
    <!-- checkbox-array -->
    <input
      type="checkbox"
      id="aaa"
      value="aaa"
      v-model="checkBoxData.checkBox"
    />
    <label for="aaa">aaa</label>
    <input
      type="checkbox"
      id="bbb"
      value="bbb"
      v-model="checkBoxData.checkBox"
    />
    <label for="bbb">bbb</label>
    <input
      type="checkbox"
      id="ccc"
      value="ccc"
      v-model="checkBoxData.checkBox"
    />
    <label for="ccc">ccc</label>
    <input
      type="checkbox"
      v-model="checkBoxData.checkBox"
      id="Item1"
      value="Item1"
    />
    <label for="Item1">Item1</label>
    <input
      type="checkbox"
      v-model="checkBoxData.checkBox"
      id="Item2"
      value="Item2"
    />
    <label for="Item2">Item2</label>
    <input
      type="checkbox"
      v-model="checkBoxData.checkBox"
      id="Item3"
      value="Item3"
    />
    <label for="Item3">Item3</label>
    <!-- checkbox-boolean -->
    <input type="checkbox" v-model="isOpen" id="isOpen" value="isOpen" />
    <label for="isOpen">isOpen</label>
    <!-- select -->
    <select v-model="selectData.select">
      <option disabled value="">請選擇</option>
      <option value="123">123</option>
      <option value="456">456</option>
      <option value="789">789</option>
    </select>
    <!-- input -->
    <input
      v-model.trim="inputData.input"
      :class="{ error: inputData.input.length > 10 }"
    />
    <!-- v-text -->
    <div v-text="vhtmltext.text"></div>
    <!-- v-html -->
    <div v-html="vhtmltext.text"></div>
    <p>CheckBox : {{ checkBoxData.checkBox }} - isOpen : {{ isOpen }}</p>
    <p>Select : {{ selectData.select }}</p>
    <p>Input : {{ inputData.input }}</p>
    <button @click="claerCBD">ClaerCheckBoxArray</button>
    <hr />
    <!-- button - click -->
    <p>plus - count : {{ count }}</p>
    <button @click="plus(1, '123465', $event)">PLUS</button>
  </div>
</template>

<style lang="scss" scoped>
.error {
  border: red solid 1px;
  color: red;
}
h1 {
  color: blue;
}
.testcolor {
  color: purple;
}
.about {
  border-style: solid;
  .timer {
    color: red;
  }
}
img {
  height: 100vh;
  width: 80vh;
}
</style>
