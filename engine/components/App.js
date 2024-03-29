import { users, req_get } from "../backend/pseudoDB.js";

export const App = {
  name: "App",
  template: `
  <h1>Status: {{currentUser}}</h1>

  <div class = 'navMenu'>
    <button @click="$router.push('/')" class='navButton'>Home</button>
    <button @click="$router.push('/extra')" class='navButton'>Extra</button>
    <button @click="$router.push('/myProfile')" class='navButton'>User Profile</button>
  </div>

  <div class='display'>
    <router-view/>
  </div>
  `,

  data() {
    return {
      currentUser: "",
    };
  },

  created() {
    let checkUser = req_get(users, {
      field: "user_id",
      value: WebAppInitData.user.id,
    });
    if (checkUser.length > 0) {
      this.currentUser = "exists";
    } else {
      this.currentUser = "new";
    }
  },
};
