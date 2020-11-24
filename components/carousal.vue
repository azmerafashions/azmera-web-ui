<template>
  <div>
    <div
      class="flex flex-row align-middle relative justify-center items-center carousal-height mb-6 shadow"
    >
      <fa
        class="cursor-pointer absolute left-0 z-20 text-2xl sm:text-5xl text-black"
        icon="chevron-left"
        @click="prevIndex"
      ></fa>
      <div class="w-full h-full">
        <carousal-item v-if="currentItem == 0" class="text-white">
          <div class="" slot="carousal-item">
            <h3>frist carousal</h3>
          </div>
          <img
            slot="carousal-image"
            class="w-full h-full"
            :src="require('@/assets/image/logo.jpg')"
            alt="image"
          /> </carousal-item
        ><carousal-item v-if="currentItem == 1" class="text-white">
          <div class="" slot="carousal-item">
            <h3>second carousal</h3>
          </div>
          <img
            slot="carousal-image"
            class="w-full h-full"
            :src="require('@/assets/image/logo.jpg')"
            alt="image"
          />
        </carousal-item>
        <carousal-item v-if="currentItem == 2" class="text-white">
          <div class="" slot="carousal-item">
            <h3>third carousal</h3>
          </div>
          <img
            slot="carousal-image"
            class="w-full h-full"
            :src="require('@/assets/image/logo.jpg')"
            alt="image"
          />
        </carousal-item>
      </div>

      <fa
        class="cursor-pointer absolute right-0 text-2xl sm:text-5xl"
        icon="chevron-right"
        @click="nextIndex"
      ></fa>
    </div>
  </div>
</template>

<script>
import CarousalItem from './CarousalItem.vue'
export default {
  components: { 'carousal-item': CarousalItem },
  data() {
    return {
      currentItem: 0,
      itemCount: 3,
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
      setInterval(() => {
        this.nextIndex()
      }, 3000)
    },
  },
}
</script>

<style>
.carousal-height {
  height: 20rem;
}
</style>
