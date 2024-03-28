export const profile = {
  name: "profile",
  template: `
      <div class='user-profile'>
        <p>User ID</p>
        <p>{{WebAppInitData.user.id}}</p>
        <p>First_name</p>
        <p>{{WebAppInitData.user.first_name}}</p>
        <p>Last_name</p>
        <p>{{WebAppInitData.user.last_name}}</p>
        <p>username</p>
        <p>{{WebAppInitData.user.username}}</p>
      </div>
      `,
  data() {
    return {
      WebAppInitData: window.Telegram.WebApp.initDataUnsafe,
    };
  },
};
