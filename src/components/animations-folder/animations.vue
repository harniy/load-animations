<template>
  <div class="animations__wrap">
    <div class="animations__section">
      <ul ref="liElements">
        <li
          v-for="(animation, idx) in animations"
          :key="animation.name"
          :class="animation.view"
          class="animation"
           @click="setCode(idx)"
        >
          <div v-html="animation.body"></div>
          <div>
            <p class="code__btn">&lt;/ code &gt;</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      animations: [],
      filter: "",
    };
  },
  methods: {
    setCode(i) {
      let animationElement = this.animations[i]

      this.$store.dispatch('setCodeToVuex', animationElement)
      this.openModal()
    },
    openModal(){
      this.$store.dispatch('modalWindow')
    },
    getAllAnimations() {
      fetch("animations/animations.json")
        .then((resp) => resp.json())
        .then((data) => {
          this.animations = data;
        });
    },
    filterAnimations() {
      let animations = this.$refs.liElements.children;

      if (this.filter !== "all" || this.filter !== "") {
        animations.forEach((el) => {
          el.classList.remove("hide");

          if (
            ![...el.classList].includes(this.filter) &&
            this.filter !== "all"
          ) {
            el.classList.add("hide");
          }
        });
      }
    },
  },
  watch: {
    "$store.state.filter": function () {
      this.filter = this.$store.getters.filterElement;
      this.filterAnimations();
    },
  },
  created() {
    this.getAllAnimations();
  },
};
</script>


<style>
@import "../../assets/css/animations.css";
@import "../../assets/css/mobile.css";

.animations__section {
  width: 80%;
  margin: 0 auto;
}
.animations__section ul {
  display: inline-block;
  padding: 20px;
  width: 100%;
}
.animations__section ul li {
  float: left;
  width: 20%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .4s ease-in;
}
.code__btn {
  color: aliceblue;
  cursor: pointer;
  padding: 20px 0;
  opacity: 0;
  transition: 0.2s;
}
.animation:hover .code__btn {
  opacity: 1;
}
.hide {
  width: 0 !important;
  animation-name: a1;
  animation-duration: .1s;
  animation-fill-mode: forwards;
}

@keyframes a1 {
  to {
    opacity: 0;
    min-height: 0;
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
}
</style>
