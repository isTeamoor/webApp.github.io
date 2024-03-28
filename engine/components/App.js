export const App = {
  name: "App",
  template: `
  <div class='mainWindow'>
    <h1>Greetings!</h1>
    <ul>
      <li><router-link to="/">Main menu</router-link></li>
      <li><router-link to="/myProfile">My profile</router-link></li>
    </ul>
    <div class='display'>
    <router-view />
    </div>
    
  </div>
  `,
};
