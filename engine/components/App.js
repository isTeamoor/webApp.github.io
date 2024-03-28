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

  beforeCreate() {
    fetch(`http://127.0.0.1:8000/db/checkUser/${WebAppInitData.user.id}`)
      .then((d) => d.json())
      .then((d) => (this.currentUser = d["status"]));
  },
};
