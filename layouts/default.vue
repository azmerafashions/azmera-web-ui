<template>
  <div>
    <baseheader />
    <div>
      <sidebar class="md:hidden" />
      <Nuxt />
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
.bgwebsiteimg {
  background-image: url('.././assets/image/bg.jpg');
}
</style>
