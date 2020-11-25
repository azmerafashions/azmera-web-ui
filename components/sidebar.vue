<template>
  <div class="relative z-50">
    <div
      id="sidebar"
      :class="isSidebar ? '' : 'hidden'"
      class="md:sticky fixed top-0 left-0 h-screen md:block bg-red-700"
    >
      <div
        class="pt-2 pb-3 flex flex-row items-center shadow-lg px-4 primaryGradient"
      >
        <nuxt-link
          to="/"
          class="flex cursor-pointer flex-row items-center"
          title="Azmera Fashions"
        >
          <img
            class="w-8 h-8 mr-4 rounded-full"
            src="@/assets/image/logo.jpg"
            alt="logo"
          />
          <h2 class="text-white italic text-xl md:text-lg">Azmera Fashions</h2>
        </nuxt-link>
        <div
          class="float-right cursor-pointer md:hidden pl-4 text-white text-lg py-2"
          @click="toggleSidebar"
        >
          <fa icon="window-close"> </fa>
        </div>
      </div>
      <ul
        class="w-full flex flex-col items-center space-y-2 px-4 primaryGradient h-full py-4 text-lg"
      >
        <li class="w-full">
          <search class="w-full block" />
        </li>
        <li class="w-full" @click="closeSidebar">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="w-full" @click="closeSidebar">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li class="w-full" @click="closeSidebar">
          <sidebaritem :mainmenu="mainmenu">
            <div slot="submenu" class="flex flex-col">
              <div @click="closeSidebar">
                <nuxt-link to="">submenu 1</nuxt-link>
              </div>
              <div @click="closeSidebar">
                <nuxt-link to="">submenu 2</nuxt-link>
              </div>
              <div @click="closeSidebar">
                <nuxt-link to="">submenu 3</nuxt-link>
              </div>
              <div @click="closeSidebar">
                <nuxt-link to="">submenu 4</nuxt-link>
              </div>
            </div>
          </sidebaritem>
        </li>
        <li class="w-full" @click="closeSidebar">
          <nuxt-link to="/design">Design</nuxt-link>
        </li>
        <li class="w-full" @click="closeSidebar">
          <nuxt-link to="/about">About us</nuxt-link>
        </li>
        <li class="w-full" @click="closeSidebar">
          <nuxt-link to="/login"> login </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sidebaritem from '@/components/sidebaritem'
import search from '@/components/search'
export default {
  components: {
    sidebaritem,
    search,
  },
  data() {
    return {
      mainmenu: {
        name: 'Product',
        path: '/product',
      },
      isSidebar: false,
    }
  },
  created() {
    this.$nuxt.$on('toggleSidebar', () => {
      this.isSidebar = true
    })
  },
  methods: {
    toggleSidebar() {
      this.isSidebar = !this.isSidebar
    },
    closeSidebar() {
      this.isSidebar = false
    },
  },
}
</script>

<style></style>
