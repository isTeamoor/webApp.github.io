export const block = {
  name: "my-block",
  template: `
    <div class='my-block'>
        my block!{{WebAppInitData}}
    </div>
    `,
  data() {
    return {
      WebAppInitData: window.Telegram.WebApp.initDataUnsafe,
    };
  },
};
