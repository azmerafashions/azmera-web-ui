<template>
  <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
    <div>
      <img
        id="designimage"
        class="rounded-t-lg h-48 w-full"
        src="@/assets/image/pata.jpg"
        alt=""
      />
      <ul
        class="flex flex-col shadow-lg text-pink-500 bg-pink-100 p-4 px-4 rounded-lg"
      >
        <li class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-center">
            <img
              id="profilelogo"
              class="rounded-full w-8 h-8"
              src="@/assets/image/logo.jpg"
              alt=""
            />

            <h5 id="profilename" class="ml-6 text-xl text-pink-500">
              Zahanara
            </h5>
          </div>
          <h5 id="postdate ">{{ product.createdOn }}</h5>
          {{ product.id }}
        </li>
        <li class="mt-1">
          <h3 id="posttitle" class="text-pink-500">{{ product.name }}</h3>
        </li>
        <li>
          <p id="postdescription" class="text-sm">
            {{ product.description }}
          </p>
        </li>
        <li class="flex flex-col justify-between">
          <h3>Price: ${{ product.price }}</h3>
        </li>

        <li class="mt-1">
          <div class="flex flex-row items-center flex-wrap">
            <nuxt-link
              v-for="(tag, index) in product.tags"
              :key="index"
              class="pink-button mr-2 primaryGradient"
              to=""
            >
              {{ tag }}</nuxt-link
            >
          </div>
        </li>
        <li class="mt-1">
          <button
            href="#"
            class="float-right pink-button primaryGradient rounded-full"
          >
            <fa icon="arrow-right" class="" />
          </button>
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.pink-button {
  @apply shadow-sm;
  @apply bg-pink-200;

  @apply font-bold;
  @apply px-2;
  @apply py-1;
  @apply text-white;
  @apply shadow-md;
  @apply rounded-md;

  @apply text-xs;
}
.pink-button:hover {
  @apply shadow-md;
  @apply bg-pink-300;
  @apply text-white;
}
.pink-button:focus {
  @apply outline-none;
}
.primaryGradient:active {
  @apply bg-gradient-to-r;
  @apply from-purple-300;
  @apply via-pink-400;
  @apply to-red-500;
}
</style>
