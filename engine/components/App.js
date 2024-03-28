export const App = {
  name: "App",
  template: `
  <h1>Greetings!</h1>

  <div class = 'navMenu'>
    <button @click="$router.push('/')" class='navButton'>Home</button>
    <button @click="$router.push('/extra')" class='navButton'>Extra</button>
    <button @click="$router.push('/myProfile')" class='navButton'>User Profile</button>
  </div>

  <div class='display'>
    <router-view/>
  </div>
  `,
};
