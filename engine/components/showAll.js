import { lotpopUp } from "./elements/lotpopUp.js";

export const showAll = {
  name: "showAll",
  components: {
    "lot-popUp": lotpopUp, // Регистрация компонента
  },
  data() {
    return {
      currentPopUpComponent: null,
    };
  },
  template: `
    <div class='showAll'>
      <lot-preview @click="showLot"></lot-preview>
      <lot-preview @click="showLot"></lot-preview>
      <lot-preview></lot-preview>
      <lot-preview></lot-preview>
      <component :is="currentPopUpComponent" v-if="currentPopUpComponent" @closepopUp='closeLot'/>
    </div>
  `,
  methods: {
    showLot() {
      this.currentPopUpComponent = "lot-popUp"; // Установка имени компонента
    },
    closeLot() {
      this.currentPopUpComponent = null; // Установка имени компонента
    },
  },
};
