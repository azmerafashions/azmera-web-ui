<template>
  <header class="px-4 py-2 sticky top-0 z-50 primaryGradient">
    <div class="">
      <div class="flex flex-row justify-between items-center w-full">
        <nuxt-link
          to="/"
          class="flex cursor-pointer flex-row items-center"
          title="Azmera Fashions"
        >
          <img
            class="w-12 h-12 mr-4 rounded-full"
            src="@/assets/image/logo.jpg"
            alt="logo"
          />
          <h2 class="text-white italic text-xl md:text-lg">Azmera Fashions</h2>
        </nuxt-link>
        <search class="hidden lg:flex" />
        <button class="lg:hidden focus:outline-none" @click="toggleSidebar">
          <svg
            class="w-8 h-8 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        <bnav class="hidden lg:w-1/2" />
      </div>
    </div>
  </header>
</template>

<script>
import basenavigation from '@/components/navigation/basenavigation'
import search from '@/components/search.vue'
export default {
  components: {
    bnav: basenavigation,
    search,
  },
  methods: {
    toggleSidebar() {
      this.$nuxt.$emit('toggleSidebar')
    },
  },
}
</script>

<style></style>
