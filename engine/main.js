import { App } from "./components/App.js";

import { block } from "./components/block.js";

const app = Vue.createApp(App);
app.component("my-block", block);

app.mount("#app");
