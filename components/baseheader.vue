<template>
  <header
    class="flex flex-col sticky top-0 shadow-lg mt-4 px-6 md:items-center md:flex-row md:h-auto md:w-full md:justify-between md:mt-6"
  >
    <div class="flex flex-row justify-between items-center mb-6 md:mb-0">
      <div class="flex flex-row items-center">
        <img
          class="w-20 h-20 mr-4 rounded-full"
          src="@/assets/image/logo.jpg"
          alt="logo"
        />
        <h1 class="text-3xl text-white italic">Azmera Fashions</h1>
      </div>
      <button @click="toggleNavigation" class="md:hidden focus:outline-none">
        <svg
          class="w-8 h-8 text-black fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavigation() {},
  },
}
</script>

<style></style>
