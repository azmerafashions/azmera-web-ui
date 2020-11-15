<template>
  <div
    @mouseenter="toggleSubMenu"
    @mouseleave="toggleSubMenu"
    class="relative flex justify-start items-center"
  >
    <div :class="linkClasses" class="inline" :to="mainmenu.path">
      {{ mainmenu.name }}
    </div>
    <div :class="iconClasses" class="cursor-pointer inline px-2">
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
    <div class="absolute top-0 left-0" v-if="isSubmenu">
      <slot name="submenu"> </slot>
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
    linkClasses: {
      type: String,
      required: false,
      default: '',
    },
    iconClasses: {
      type: String,
      required: false,
      default: 'text-gray-700',
    },
  },
  data() {
    return {
      isSubmenu: false,
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
