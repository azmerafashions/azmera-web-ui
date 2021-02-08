<template>
  <div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6"
  >
    <div v-for="product in products" :key="product.id">
      <designcard :product="product" />
    </div>
  </div>
</template>

<script>
import designcard from '@/components/DesignCard.vue'

export default {
  props: {
    products: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  components: {
    designcard,
  },
}
</script>

<style></style>
