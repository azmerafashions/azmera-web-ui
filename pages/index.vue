<template>
  <div class="bgwebsiteimg h-screen w-full">
    <!-- <carousal /> -->
    <div class="">
      <ul>
        <li>
          <h1>Dress</h1>
          <ProductsList :products="productsList" />
        </li>
        <li>
          <h1>Sharee</h1>
          <ProductsList :products="productsList" />
        </li>

        <li>
          <h1>Punjabi</h1>
          <ProductsList :products="productsList" />
        </li>
      </ul>
    </div>
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
