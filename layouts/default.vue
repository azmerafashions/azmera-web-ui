<template>
  <div>
    <baseheader />
    <div class="flex flex-row justify-between">
      <sidebar />
      <Nuxt class="px-6 py-6 bg-whiteGray" />
    </div>
  </div>
</template>
<script>
import sidebar from '@/components/sidebar'

import baseheader from '@/components/baseheader'
export default {
  components: {
    baseheader,
    sidebar,
  },
}
</script>

<style>
header {
  background: linear-gradient(
    to left,
    rgba(26, 118, 224, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
}
</style>
