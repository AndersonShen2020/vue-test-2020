<script>
import { ref, h, createApp } from "vue";

// -------------------------------- render + click -----------------------------------------

let count = ref(0);
let renderClick = () => {
  console.log("renderClick");
  count.value += 1;
};
const app = createApp({
  render() {
    let hname = "Anderson";
    const templeteRender = h(
      "button",
      { class: "btn", onclick: renderClick },
      "按一下增加count"
    );
    return templeteRender;
  },
});
setTimeout(() => {
  const instance = app.mount(".render");
  console.log("instance", instance);
  console.log("instance", instance.$el);
}, 3000);
// -------------------------------- render + click -----------------------------------------
export default {
  setup() {
    return { count };
  },
};
</script>

<template>
  <div class="render">3秒後轉換</div>
  <div class="count">count : {{ count }}</div>
</template>

<style></style>
