import { App } from "./components/App.js";
const app = Vue.createApp(App);

import router from "./routers/index.js";
app.use(router);

app.mount("#app");
