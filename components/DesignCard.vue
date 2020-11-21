<template>
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

          <h5 id="profilename" class="ml-6 text-xl text-pink-500">Zahanara</h5>
        </div>
        <h5 id="postdate ">25.Aug.2020</h5>
      </li>
      <li class="mt-1">
        <h3 id="posttitle" class="text-pink-500">Hand Embroidary</h3>
      </li>
      <li>
        <p id="postdescription" class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit....
        </p>
      </li>
      <li class="flex flex-col justify-between">
        <h3>Price: $100</h3>
      </li>

      <li class="mt-1">
        <a class="bg-pink-400 rounded-lg p-1 text-xs" href=""> scarf</a>
        <a class="bg-pink-400 rounded-lg p-1 text-xs" href="">henna</a>
        <a class="bg-pink-400 rounded-lg p-1 text-xs" href="">frok</a>
        <a class="bg-pink-400 rounded-lg p-1 text-xs" href="">dress</a>
        <a class="bg-pink-400 rounded-lg p-1 text-xs" href="">sharee</a>
      </li>
      <li class="mt-1">
        <button
          href="#"
          class="float-right rounded-full shadow-sm hover:shadow-md focus:outline-none bg-pink-200 font-bold px-2 py-1 text-xs"
        >
          <fa icon="arrow-right" class="text-xs text-black" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
