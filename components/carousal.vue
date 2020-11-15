<template>
  <div
    class="bg-white h-64 flex flex-row items-center justify-between relative text-black"
  >
    <fa
      class="absolute left-0 text-2xl sm:text-5xl"
      icon="chevron-left"
      @click="prevIndex"
    ></fa>

    <corousal-item>
      <div v-if="currentItem == 0" slot="corousal-item">
        <img src="/assets/image/corousal1.webp" alt="" />
        <h3>fisrt corousal</h3>
      </div>
      <div v-else-if="currentItem == 1" slot="corousal-item">
        <img src="@/assets/image/corousal2.jpg" alt="" />

        <h3>second corousal</h3>
      </div>
      <div v-else-if="currentItem == 2" slot="corousal-item">
        <h3>third corousal</h3>
        <img src="@/assets/image/corousal1.webp" alt="" />
      </div>
      <div v-else slot="corousal-item">
        <h3>forth corousal</h3>
        <img src="@/assets/image/corousal2.jpg" alt="" />
      </div>
    </corousal-item>

    <fa
      class="absolute right-0 text-2xl sm:text-5xl"
      icon="chevron-right"
      @click="nextIndex"
    ></fa>
  </div>
</template>

<script>
import CorousalItem from './CorousalItem.vue'
export default {
  components: { 'corousal-item': CorousalItem },
  data() {
    return {
      currentItem: 0,
      itemCount: 4,
    }
  },
  created() {
    this.timer()
  },
  methods: {
    nextIndex() {
      if (this.currentItem !== this.itemCount - 1) {
        this.currentItem++
      } else this.currentItem = 0
    },
    prevIndex() {
      if (this.currentItem !== 0) {
        this.currentItem--
      } else this.currentItem = this.itemCount - 1
    },
    timer() {
      setTimeout(() => {
        this.nextIndex()
        this.timer()
      }, 1000)
    },
  },
}
</script>

<style></style>
