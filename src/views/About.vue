<script>
import { ref, reactive, onBeforeUpdate, onUpdated, nextTick } from "vue";
import { createApp } from "vue";
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

    let y = null;
    let aaa = (x) => {
      console.log("x = ", x);
      return x;
    };
    let a1 = aaa(111);
    let a2 = aaa(222);
    let bbb = [a1, a2];
    bbb.push(33);
    bbb.push(44);
    let ccc = { name: "" };
    bbb.push((ccc["name"] = "zzz"));
    bbb.push((ccc["name"] = "yyy"));
    console.log("aaa = ", aaa);
    console.log("bbb = ", bbb);
    console.log("ccc = ", ccc);

    const nowTimer = new Date();
    console.log("device.desktop() = ", device.desktop());

    let height = 600;
    let width = 600;

    return {
      nowTimer,
      height,
      width,
    };
  },
};
</script>

<template>
  <h1>This is SVG component testpage</h1>
  <div class="about">
    <div class="timer">time : {{ nowTimer.toString() }}</div>
  </div>
</template>

<style lang="scss" scoped>
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
