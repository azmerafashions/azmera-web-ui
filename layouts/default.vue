<template>
  <div>
    <baseheader />
    <div>
      <sidebar class="md:hidden footerbg" />
      <Nuxt />
    </div>
    <basefooter />
  </div>
</template>
<script>
import sidebar from '@/components/sidebar'

import baseheader from '@/components/baseheader'
import basefooter from '@/components/basefooter'
export default {
  components: {
    baseheader,
    sidebar,
    basefooter,
  },
}
</script>

<style>
header,
.footerbg {
  /* background: linear-gradient(
    to left,
    rgba(26, 118, 224, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  ); */
  @apply bg-gradient-to-r;
  @apply from-purple-400;
  @apply via-pink-500;
  @apply to-red-500;
}
.bgwebsiteimg {
  background-image: url('.././assets/image/bg.jpg');
}
</style>
