<template>
  <div class="outer__block" v-if="openModal" @click="closeModal">
    <div class="outer">
      <h3>Minify code</h3>
      <div class="html__code" @click="copyCode">
        <h4>html</h4>
        <p>{{ code.body }}</p>
      </div>
      <div class="css__code" @click="copyCode">
        <h4>css</h4>
        <p>{{ code.style }}</p>
      </div>
    </div>

    <div class="copy__complete" v-if="copyComplete" ref="complete">
      <p>copy</p>
      <img src="@/assets/success.png" alt="" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      code: {},
      copyComplete: false,
    };
  },
  methods: {
    closeModal(e) {
      if (e.target.className === "outer__block") {
        this.$store.dispatch("modalWindow");
      }
    },
    copyCode(e) {
      const element = e.target.innerText;
      const text = element.replace(/html|css/, "");
      const cb = navigator.clipboard;
      cb.writeText(text);

      this.complete();
    },
    complete() {
      this.copyComplete = true;

      setTimeout(() => {
        this.$refs.complete.classList.add("copy__show");
      }, 200);

      new Promise((res) => {
        setTimeout(() => {
          this.$refs.complete.style.opacity = 0;
          res();
        }, 800);
      }).then(() => {
        setTimeout(() => {
          this.copyComplete = false;
        }, 300);
      });
    },
  },
  computed: {
    openModal() {
      return this.$store.getters.modalData;
    },
  },
  watch: {
    "$store.state.showModal": function () {
      let state = this.$store.getters.modalData;
      let body = document.querySelector("body");
      if (state) {
        body.style.overflow = "hidden";
      }
      if (!state) {
        body.style.overflow = "auto";
      }
    },
    "$store.state.code": function () {
      this.code = this.$store.getters.getCode;
    },
  },
};
</script>


<style>
.outer__block {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25262e73;
}
.outer {
  background: #fff;
  width: 50%;
  height: 70%;
  padding: 0px 20px 20px 20px;
  border-radius: 2px;
  box-shadow: 4px 6px 10px 0px #68686885;
}
.outer p {
  padding: 0 10px;
}
.outer h3 {
  margin: 5px 0;
}
.outer h4 {
  position: absolute;
  top: -20px;
  right: 5px;
  background: #5c5c5ce3;
  color: white;
  padding: 5px 10px;
  border-radius: 2px;
}
.html__code {
  position: relative;
  width: 100%;
  border: 1px solid #979797a3;
  height: 30%;
  text-align: left;
  word-wrap: break-word;
  overflow: auto;
}
.css__code {
  position: relative;
  width: 100%;
  height: 60%;
  border: 1px solid #979797a3;
  margin: 15px 0;
  text-align: left;
  word-wrap: break-word;
  overflow: auto;
}
.copy__complete {
  position: absolute;
  top: 0;
  background: aliceblue;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-out;
  margin-top: -35px;
}
.copy__complete img {
  width: 20px;
  padding-left: 10px;
}
.copy__complete p {
  margin: 5px 0;
}
.copy__show {
  margin-top: 20px;
}
</style>