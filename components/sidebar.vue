<template>
  <div class="relative z-50 w-full bg-blue-800">
    <div
      v-if="isSidebar"
      class="fixed top-0 left-0 min-w-full min-h-full bg-pink-700 opacity-25"
      @click="isSidebar = false"
    ></div>
    <transition name="slide">
      <div
        v-if="isSidebar"
        id="sidebar"
        class="md:sticky fixed top-0 left-0 h-screen rounded-r-2xl overflow-hidden border-box"
      >
        <div
          class="pt-4 hover:shadow-md pb-3 flex flex-row items-center px-4 primaryGradient shadow-2xl rounded-tr-2xl"
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
            <h2 class="text-white italic text-xl md:text-lg">
              Azmera Fashions
            </h2>
          </nuxt-link>
          <div
            class="float-right cursor-pointer md:hidden pl-4 text-white py-1 text-lg"
            @click="toggleSidebar"
          >
            <fa icon="window-close"> </fa>
          </div>
        </div>
        <ul
          class="w-full flex flex-col items-center space-y-2 px-4 primaryGradient h-full py-4 text-lg rounded-br-2xl"
        >
          <li class="w-full">
            <search class="w-full block" />
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/">Home</nuxt-link>
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/blog">Blog</nuxt-link>
          </li>
          <li class="w-full">
            <sidebaritem
              :mainmenu="mainmenu"
              link-classes="text-base link"
              icon-classes="text-base"
            >
              <div slot="submenu" class="flex flex-col">
                <div class="link" @click="closeSidebar">
                  <nuxt-link class="w-full" to="/product">submenu 1</nuxt-link>
                </div>
                <div class="link" @click="closeSidebar">
                  <nuxt-link class="w-full" to="">submenu 2</nuxt-link>
                </div>
                <div class="link" @click="closeSidebar">
                  <nuxt-link class="w-full" to="">submenu 3</nuxt-link>
                </div>
                <div class="link" @click="closeSidebar">
                  <nuxt-link class="w-full" to="">submenu 4</nuxt-link>
                </div>
              </div>
            </sidebaritem>
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/design">Design</nuxt-link>
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/about">About us</nuxt-link>
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/login"> login </nuxt-link>
          </li>
          <li class="w-full link" @click="closeSidebar">
            <nuxt-link class="w-full" to="/addproduct"> addproduct </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
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
      isSidebar: true,
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

<style scoped>
.link {
  @apply text-base;
  @apply text-white;
  @apply px-2;
  @apply py-1;
  @apply cursor-pointer;
}
.link:hover {
  @apply shadow-md;
}
.slide-enter-active,
.slide-leave-active {
  @apply transition-all;
  @apply duration-300;
  @apply ease-out;
  /* transition: all 0.3s ease-out; */
}
.slide-enter,
.slide-leave-to {
  @apply transform;
  @apply -translate-x-full;
  /* transform: translateX(-100%); */
}
</style>
