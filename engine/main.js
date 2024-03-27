import { Vue } from "lib/vue.js";

const app = Vue.createApp({});
app.mount("#app");

import { display } from "./components/display";
app.component("button-counter", display);
