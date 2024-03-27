export const block = {
  name: "my-block",
  template: `
    <div class='my-block'>
        my block!{{WebAppInitData}} {{initData}}
        <button @click="window.Telegram.WebApp.sendData('timure'); console.log(sent)"></button>
    </div>
    <div class='my-block'>
    <button @click="window.Telegram.WebApp.sendData('timure'); console.log('sent')"></button>
</div>
    `,
  data() {
    return {
      WebAppInitData: window.Telegram.WebApp.initDataUnsafe,
      initData: window.Telegram.WebApp.initData,
    };
  },
};
