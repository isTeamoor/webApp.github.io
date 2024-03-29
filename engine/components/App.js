import { users, req_get, nextID } from "../backend/pseudoDB.js";

export const App = {
  name: "App",
  template: `
  <h1>Status: {{currentUser}} {{check}}</h1>

  <div class = 'navMenu'>
    <button @click="$router.push('/')" class='navButton'>Home</button>
    <button @click="$router.push('/newLot')" class='navButton'>Выставить лот</button>
    <button @click="$router.push('/myProfile')" class='navButton'>User Profile</button>
  </div>

  <div class='display'>
    <router-view/>
  </div>
  `,

  data() {
    return {
      currentUser: "",
      check: users,
    };
  },

  created() {
    let newuserID = 10002;
    let checkUser = req_get(users, {
      field: "user_id",
      value: newuserID, //WebAppInitData.user.id,
    });
    if (checkUser.length > 0) {
      this.currentUser = "exists";
    } else {
      this.currentUser = "new";
      users.push([
        {
          id: nextID(users),
          user_id: newuserID,
          first_name: "first" + newuserID,
          last_name: "last" + newuserID,
          username: "username" + newuserID,
        },
      ]);
    }
  },
};
