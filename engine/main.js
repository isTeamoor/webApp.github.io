import { App } from "./components/App.js";
import { showAll } from "./components/showAll.js";
import { lotPreview } from "./components/elements/lotPreview.js";
import router from "./routers/index.js";

const app = Vue.createApp(App);

app.use(router);
app.component("lot-preview", lotPreview);
app.component("showAll", showAll);

// Сначала определите компоненты, а затем вызовите app.mount()
app.mount("#app", { app: app }); // передаем app через пропсы
