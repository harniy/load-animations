<template>
  <div class="animation__section">
    <div class="filter__block">
      <ul class="animation__filter" @click="activeBtn">
        <li data-filter="all" class="all active__filter">all</li>
        <li data-filter="circle">circle</li>
        <li data-filter="wave">wave</li>
        <li data-filter="abstract">abstract</li>
      </ul>
    </div>
    <Animations />
    <Modal />
  </div>
</template>


<script>
import Animations from '../components/animations-folder/animations.vue'
import Modal from '../components/animations-folder/modal.vue'

export default {
  components: {Animations, Modal},
  data() {
    return {};
  },
  methods: {
    activeBtn(e) {
      let filterFor = e.target.dataset.filter
      if (e.target.nodeName === "LI") {
        let active = Array.from(document.querySelectorAll(".active__filter"));
        active.forEach((el) => el.classList.remove("active__filter"));
        e.target.classList.add('active__filter')
      }

      this.$store.dispatch('setFilterElement', filterFor)
    },
  },
};
</script>


<style>
.animation__filter {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.animation__filter li {
  padding: 3px 15px;
  margin: 0 5px;
  cursor: pointer;
  user-select: none;
}
.all {
  border: 1px solid #ffffffa8;
  border-radius: 2px;
}

.active__filter {
  background: #3c3c3c87;
  
}
</style>