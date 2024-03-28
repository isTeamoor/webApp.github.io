import router from "./routers/index.js";

import { App } from "./components/App.js";
import { profile } from "./components/userProfile.js";

const app = Vue.createApp(App);
app.component("user-profile", profile);

app.use(router).mount("#app");
