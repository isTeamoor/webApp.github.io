export const App = {
  name: "App",

  template: `
  <h1>Works!</h1>
  <button @click="count++">
      Счётчик кликов — {{ count }}
    </button>
  `,

  data() {
    return {
      count: 0,
    };
  },
};
