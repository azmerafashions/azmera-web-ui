<template>
  <div>
    <div class="grid md:grid-cols-3 grid-cals-1 gap-6">
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
