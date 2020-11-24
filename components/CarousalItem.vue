<template>
  <div class="w-full h-full flex justify-center items-center align-middle">
    <div class="w-full h-full absolute left-0 top-0">
      <slot name="carousal-image"></slot>
    </div>
    <div class="z-20"><slot name="carousal-item" class=""></slot></div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
