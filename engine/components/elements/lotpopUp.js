export const lotpopUp = {
  name: "lot-popUp",
  template: `
    <div class='lotpopUp-wrapper' @click='closePopUp'>
      <div class='lotpopUp-info' >
        <div class='close-button' @click='closePopUp_B'>X</div>
        <div class='lotpopUp-lotDeatails'></div>
      </div>
    </div>
      `,
  methods: {
    closePopUp(event) {
      if (event.target == document.querySelector(".lotpopUp-wrapper")) {
        this.$emit("closepopUp");
        console.log(event.target);
      }
    },
    closePopUp_B(event) {
      if (event.target == document.querySelector(".close-button")) {
        this.$emit("closepopUp");
        console.log(event.target);
      }
    },
  },
};
