export const block = {
  name: "my-block",
  template: `
    <div class='my-block'>
        my block!{{WebAppInitData}} {{initData}}
    </div>
    `,
  data() {
    return {
      WebAppInitData: window.Telegram.WebApp.initDataUnsafe,
      initData: window.Telegram.WebApp.initData,
    };
  },
};
