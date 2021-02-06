<template>
  <div>
    <form
      class="flex flex-col items-center justify-center align-middle"
      @submit.prevent="submitProduct"
    >
      <ul
        class="flex flex-col justify-center max-w-md align-middle space-y-4 py-6"
      >
        <li>
          <label class="product-image" for="">Upload your image</label>
          <input
            id="product-image"
            required
            type="file"
            name=""
            @change="previewFile"
          />
        </li>
        <li class="">
          <BaseInput>
            <fa slot="icon-left" icon="user" class="m-2"> </fa>
            <input
              v-model="name"
              required
              class="placeholder-black w-full focus:outline-none"
              type="text"
              placeholder="Product name"
            />
          </BaseInput>
        </li>
        <li>
          <select id="category" v-model="category" class="border" name="">
            <option disabled>Choose Category</option>
            <option value="Hand Embroidery">Hand Embroidery</option>
            <option value="Sharee">Sharee</option>
          </select>
        </li>
        <li class="flex flex-col">
          <label class="m-2" for="des">Description</label
          ><textarea
            id="des"
            v-model="description"
            class="shadow w-full"
            placeholder="Describe your product"
            name=""
            cols="30"
            rows="4"
          ></textarea>
        </li>
        <li class="">
          <BaseInput>
            <fa slot="icon-left" icon="user" class="m-2"> </fa>
            <input
              v-model="price"
              required
              class="placeholder-black w-full focus:outline-none"
              type="number"
              placeholder="Price"
            />
          </BaseInput>
        </li>
        <li class="">
          <BaseInput>
            <fa slot="icon-left" icon="user" class="m-2"> </fa>
            <input
              v-model="quantity"
              required
              class="placeholder-black w-full focus:outline-none"
              type="number"
              placeholder="Quantity"
            />
          </BaseInput>
        </li>
        <li>
          <label for="materials">
            <input
              id="materials"
              v-model="productMaterial"
              class="border p-2"
              placeholder="add materials"
              type="text"
              name="materials"
              @keypress.enter.prevent="addMaterials"
            />
            <div>
              <span v-for="(material, i) in materials" :key="i">
                {{ material }}
              </span>
            </div>
          </label>
        </li>
        <li>
          <label for="tags">
            <input
              id="tags"
              v-model="productTag"
              class="border p-2"
              placeholder="add tag"
              type="text"
              name="tags"
              @keypress.enter.prevent="addTag"
            />
            <div>
              <span v-for="(tag, i) in tags" :key="i"> {{ tag }} </span>
            </div>
          </label>
        </li>

        <li>
          <div class="my-2">Add Colors of your product</div>
          <div class="flex items-center space-x-2 flex-wrap">
            <span v-for="(color, i) in colors" :key="i">
              <input id="" v-model="colors[i]" class="" type="color" name="" />
            </span>
            <fa :icon="['fas', 'plus']" @click="addColor" />
          </div>
        </li>
        <li>
          <button class="p-2 bg-blue-700 text-white rounded" type="submit">
            Submit Product
          </button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import BaseInput from './base/BaseInput.vue'
export default {
  components: { BaseInput },
  data() {
    return {
      productTag: '',
      productMaterial: '',

      // we have to upload image
      photoUrl: '',
      category: 'Sharee',
      description: '',
      name: '',
      price: '',
      updatedOn: '',
      createdOn: '',
      materials: [],
      quantity: '',
      tags: [],
      colors: [],
    }
  },
  methods: {
    addTag() {
      this.tags.push(this.productTag)
      this.productTag = ''
    },
    addMaterials() {
      this.materials.push(this.productMaterial)
      this.productMaterial = ''
    },
    addColor() {
      // make new color default value
      this.colors.push('#FFFFFF')
    },
    previewFile(e) {
      console.log(e.target.files)
    },
    submitProduct() {
      const product = {
        // photoUrl: ,
        category: this.category,
        description: this.description ? this.description : this.name,
        name: this.name,
        price: this.price,
        updatedOn: new Date(),
        createdOn: new Date(),
        materials: this.materials,
        quantity: this.quantity,
        tags: this.tags,
        colors: this.colors,
      }
      // this.$fire.firestore
      //   .collection('products')
      //   .add(product)
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
      console.log(product)
    },
  },
}
</script>

<style scoped>
/* li {
  @apply flex;
  @apply flex-col;
  @apply justify-between;
} */

.input-animate:hover {
  @apply transform;
  @apply -translate-y-1;
  @apply shadow-lg;
}
.input {
  @apply p-1;
  @apply text-base;
  @apply rounded-md;
  @apply text-white;

  @apply shadow-md;
}
.input:focus {
  @apply text-black;
  @apply outline-none;
}
.input-pink {
  @apply bg-pink-400;
}
.input-pink:focus {
  @apply border-2;
  @apply border-pink-300;
  @apply border-solid;
  @apply bg-transparent;
}
</style>
