<template>
  <header
    class="px-6 py-2 sticky top-0 flex flex-row justify-between w-full items-center"
  >
    <div class="flex flex-row justify-between items-center w-full md:mb-0">
      <div class="flex flex-row items-center">
        <img
          class="w-16 h-16 mr-4 rounded-full"
          src="@/assets/image/logo.jpg"
          alt="logo"
        />
        <h1 class="text-3xl text-white italic">Azmera Fashions</h1>
      </div>

      <button @click="toggleSidebar" class="md:hidden focus:outline-none">
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
  </header>
</template>

<script>
import basenavigation from '@/components/navigation/basenavigation'
export default {
  methods: {
    toggleSidebar() {
      this.$nuxt.$emit('toggleSidebar')
    },
  },
  components: {
    bnav: basenavigation,
  },
}
</script>

<style></style>
