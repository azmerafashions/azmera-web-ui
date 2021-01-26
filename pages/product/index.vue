<template>
  <div class="px-6 pt-12 bg-pink-200">
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6"
    >
      <div v-for="product in productsList" :key="product.id">
        <!-- <nuxt-link
          :to="{ name: 'product-id', params: { id: product.id } }"
          ><designcard :product="product"
        /></nuxt-link> -->

        <designcard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/products.json'
import designcard from '@/components/DesignCard.vue'

export default {
  components: {
    designcard,
  },
  data() {
    return {
      productsList: [],
    }
  },
  mounted() {
    console.log(products.products)
    this.productsList = products.products
  },
}
</script>

<style></style>
