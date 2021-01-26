<template>
  <div>
    <input type="color" name="" placeholder="choose color" id="" />
    <div class="flex flex-col">
      <h5 class="text-4xl uppercase font-bold text-center">
        {{ productItem.name }}
      </h5>
      <p class="text-xl">{{ productItem.description }}</p>
      <div>
        <label class="font-bold text-2xl" for="material">Material</label>
        <ul>
          <li v-for="(material, index) in productItem.material" :key="index">
            {{ material }}
          </li>
        </ul>
      </div>
      <ul class="flex items-center flex-wrap">
        <li
          v-for="(color, index) in getColor(productItem.colors)"
          :key="index"
          class="mr-2"
        >
          {{ color }}
        </li>
      </ul>

      <ul class="flex items-center flex-wrap">
        <li
          v-for="(tag, index) in productItem.tags"
          :key="index"
          class="mr-2 border px-2 py-2 cursor-pointer hover:bg-gray-600"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import product from '@/products.json'

export default {
  data() {
    return {
      productId: '',
      productItem: {},
    }
  },
  methods: {
    getColor(colors) {
      return ('' + colors).split(',')
    },
    getItem() {
      product.products.forEach((p) => {
        if (p.id === this.productId) {
          this.productItem = p
        }
      })
    },
  },
  mounted() {
    this.productId = this.$route.params.id
    this.getItem()
  },
}
</script>

<style></style>
