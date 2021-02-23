<script>
import { h, createApp } from "vue";

// -------------------------------- render + click -----------------------------------------
let renderClick = () => {
  console.log("renderClick");
};
const app = createApp({
  render() {
    let hname = "Anderson";
    const templeteRender = h(
      "button",
      { class: "btn", onclick: renderClick },
      "你好" + hname
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
    return {};
  },
};
</script>

<template>
  <div class="render">3秒後轉換</div>
</template>

<style></style>
