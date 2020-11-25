<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
.primaryGradient {
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
</style>
