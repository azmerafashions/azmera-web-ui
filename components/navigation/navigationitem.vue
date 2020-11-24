<template>
  <div
    class="flex justify-start items-center"
    @mouseenter="toggleSubMenu"
    @mouseleave="toggleSubMenu"
  >
    <div :class="linkClasses" class="inline relative" :to="mainmenu.path">
      {{ mainmenu.name }}
      <div v-if="isSubmenu" class="absolute top-0">
        <div
          class="mt-12 text-center p-2 rounded-b-lg border-black border-2 border-t-0 border-solid shadow-lg text-lg bg-white text-blue-600"
        >
          <slot name="submenu"> </slot>
        </div>
      </div>
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
