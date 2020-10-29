<template>
  <div class="flex flex-row justify-between items-center">
    <div class="hidden lg:block">
      <sidebaritem
        iconClasses="text-white text-2xl"
        linkClasses="text-white text-2xl"
        :mainmenu="{ name: 'Join Us', path: '' }"
      >
      </sidebaritem>
    </div>
  </div>
</template>

<script>
import sidebaritem from '@/components/sidebaritem'

export default {
  components: {
    sidebaritem,
  },
}
</script>

<style></style>
