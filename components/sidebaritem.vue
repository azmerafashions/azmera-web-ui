<template>
  <div>
    <div>
      <div class="flex justify-start items-center">
        <nuxt-link class="inline" :to="mainmenu.path"
          >{{ mainmenu.name }}
        </nuxt-link>
        <div
          @click="toggleSubMenu"
          class="cursor-pointer inline px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
      <slot v-if="isSubmenu" name="submenu"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainmenu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSubmenu: true,
    }
  },
  methods: {
    toggleSubMenu() {
      this.isSubmenu = !this.isSubmenu
    },
  },
}
</script>

<style></style>
