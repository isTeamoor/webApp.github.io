export const block = {
  name: "my-block",
  template: `
    <div class='my-block'>
        my block!{{platform}}
    </div>
    `,
  data() {
    return {
      platform: window.Telegram.WebApp.platform,
    };
  },
};
