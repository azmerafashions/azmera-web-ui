<template>
  <div class="relative">
    <div
      :class="isSidebar ? '' : 'hidden'"
      id="sidebar"
      class="md:sticky fixed top-0 left-0 h-screen md:block bg-whiteGray w-2/3 md:w-1/5"
    >
      <div
        @click="toggleSidebar"
        class="float-right cursor-pointer md:hidden text-white text-lg bg-gray-600 px-4 py-2"
      >
        *
      </div>
      <div>
        <ul class="w-full px-4 py-2">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <sidebaritem :mainmenu="mainmenu">
              <div class="flex flex-col" slot="submenu">
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
export default {
  data() {
    return {
      mainmenu: {
        name: 'Product',
        path: '/product',
      },
      isSidebar: true,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebar = !this.isSidebar
    },
  },
  components: {
    sidebaritem,
  },
}
</script>

<style></style>
