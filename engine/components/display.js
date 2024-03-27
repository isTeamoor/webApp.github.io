export const display = {
  data() {
    return {
      count: 0,
    };
  },
  template: `
      <button @click="count++">
        Счётчик кликов — {{ count }}
      </button>`,
};
