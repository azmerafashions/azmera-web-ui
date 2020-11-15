<template>
  <div>
    <img
      id="designimage"
      class="rounded-t-lg h-48 w-full"
      src="@/assets/image/pata.jpg"
      alt=""
    />
    <ul
      class="flex flex-col shadow-md text-primary hover:text-secondary bg-white p-6 rounded-lg"
    >
      <li class="flex flex-row items-center justify-between mt-2">
        <img
          id="profilelogo"
          class="rounded-full w-8 h-8"
          src="@/assets/image/logo.jpg"
          alt=""
        />
        <h5 id="profilename" class="-ml-16 text-xl">Zahanara</h5>
        <h5 id="postdate">25.Aug.2020</h5>
      </li>
      <li class="mt-2">
        <h2 id="posttitle" class="text-blue-800">Hand Embroidary</h2>
      </li>
      <li>
        <p id="postdescription" class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit....
        </p>
      </li>
      <li class="flex flex-col justify-between">
        <h3>
          categories:
          <a href="" class="bg-gray-500 rounded-lg p-1 text-xs mr-1"> Sharee </a
          ><a href="" class="bg-gray-500 rounded-lg p-1 text-xs"> Dress</a>
        </h3>

        <h3>price:$100</h3>
      </li>
      <li class="mt-4">
        <button
          href="#"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-1 text-sm rounded"
        >
          Read more
        </button>
      </li>
      <li class="mt-4">
        <a class="bg-gray-500 rounded-lg p-1 text-xs" href=""> scarf</a>
        <a class="bg-gray-500 rounded-lg p-1 text-xs" href="">henna</a>
        <a class="bg-gray-500 rounded-lg p-1 text-xs" href="">frok</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
