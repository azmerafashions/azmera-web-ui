<template>
  <div class="px-6 pt-12 bg-pink-200">
    <ProductsList :products="productsList" />
  </div>
</template>

<script>
import products from '@/products.json'
import ProductsList from '@/components/product/ProductList'
export default {
  components: {
    ProductsList,
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
