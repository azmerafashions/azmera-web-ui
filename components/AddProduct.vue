<template>
  <div>
    <form class="flex flex-col items-center justify-center align-middle">
      <ul class="flex flex-col justify-center max-w-md align-middle space-y-4">
        <li>
          <label class="" for="">Upload your product image</label
          ><input type="file" name="" id="" />
        </li>
        <li class="relative flex flex-row items-center input-animate">
          <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
          <input
            class="w-full input input-pink placeholder-black"
            type="text"
            placeholder="Product name"
          />
        </li>
        <li>
          <select name="" id="">
            <option value="">Hand Embroidery</option>
            <option value="">Sharee</option>
          </select>
        </li>
        <li>
          <label for="">Description</label
          ><textarea
            placeholder="Describe your product"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </li>
        <li class="relative flex flex-row items-center input-animate">
          <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
          <input
            class="w-full input input-pink placeholder-black"
            type="number"
            placeholder="Price"
          />
        </li>
        <li class="relative flex flex-row items-center input-animate">
          <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
          <input
            class="w-full input input-pink placeholder-black"
            type="number"
            placeholder="Quantity"
          />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
li {
  @apply flex;
  @apply flex-col;
  @apply justify-between;
}

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

  @apply pl-8;
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
