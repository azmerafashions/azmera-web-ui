<template>
  <div class="relative z-50">
    <div
      id="sidebar"
      :class="isSidebar ? '' : 'hidden'"
      class="md:sticky fixed top-0 left-0 h-screen md:block primaryGradient bg-red-700w-2/3 md:w-1/5"
    >
      <div
        class="float-right cursor-pointer md:hidden text-white text-lg px-4 py-2"
        @click="toggleSidebar"
      >
        <fa icon="window-close"> </fa>
      </div>
      <div>
        <ul class="w-full flex flex-col justify-between items-start px-4 py-2">
          <li>
            <search />
          </li>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <sidebaritem :mainmenu="mainmenu">
              <div slot="submenu" class="flex flex-col">
                <nuxt-link to="">submenu1</nuxt-link>
                <nuxt-link to="">submenu2</nuxt-link>
                <nuxt-link to="">submenu3</nuxt-link>
                <nuxt-link to="">submenu4</nuxt-link>
              </div>
            </sidebaritem>
          </li>
          <li>
            <nuxt-link to="/design">Design</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login"> login </nuxt-link>
          </li>
        </ul>
      </div>
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
  },
}
</script>

<style></style>
