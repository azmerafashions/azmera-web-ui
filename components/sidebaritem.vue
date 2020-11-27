<template>
  <div :class="isSubmenu ? '' : 'hover:shadow-md'" class="px-2 py-1">
    <div
      class="flex justify-start items-center text-white link cursor-pointer"
      @click="toggleSubMenu"
    >
      <span :class="linkClasses" class="inline cursor-pointer"
        >{{ mainmenu.name }}
      </span>
      <div
        v-if="!isSubmenu"
        :class="iconClasses"
        class="inline ml-2 cursor-pointer"
      >
        <fa class="text-white" icon="chevron-down"></fa>
      </div>
      <div v-else :class="iconClasses" class="inline ml-2 cursor-pointer">
        <fa class="text-white" icon="chevron-up"></fa>
      </div>
    </div>
    <slot v-if="isSubmenu" name="submenu"> </slot>
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
      default: 'text-white',
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
