<template>
  <div class="px-6 pt-12 bg-gray-300">
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6"
    >
      <designcard />
      <designcard />
      <designcard />
      <designcard />
      <designcard />
    </div>
  </div>
</template>

<script>
import designcard from '@/components/DesignCard.vue'

export default {
  components: {
    designcard,
  },
}
</script>

<style></style>
