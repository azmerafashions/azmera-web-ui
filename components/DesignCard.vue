<template>
  <div>
    <ul
      class="flex flex-col shadow-md text-primary hover:text-secondary bg-white p-6 rounded-lg"
    >
      <li>
        <img
          class="rounded-t-lg h-64"
          id="designimage"
          src="@/assets/image/pata.jpg"
          alt=""
        />
      </li>
      <li class="flex flex-row items-center justify-between mt-2">
        <img
          class="rounded-full w-16 h-16"
          id="profilelogo"
          src="@/assets/image/logo.jpg"
          alt=""
        />
        <h1 class="-ml-20 text-xl" id="profilename">Zahanara</h1>
        <h1 id="postdate">25.Aug.2020</h1>
      </li>
      <li class="mt-2 text-2xl"><h1 id="posttitle">Hand Embroidary</h1></li>
      <li>
        <p id="postdescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          est iusto cupiditate dignissimos culpa, quaerat porro....
        </p>
      </li>
      <li class="flex flex-row justify-between text-xl">
        <h1>categories: <a href=""> Sharee </a><a href=""> Dress</a></h1>

        <h1>price:$100</h1>
      </li>
      <li class="mt-4">
        <button
          href="#"
          class="bg-primary hover:bg-secondary text-white font-bold px-4 py-2 rounded"
        >
          Read more
        </button>
      </li>
      <li class="mt-4">
        <a class="hover:bg-gray-400 rounded-full p-2" href=""> scarf</a>
        <a class="hover:bg-gray-400 rounded-full p-2" href="">henna</a>
        <a class="hover:bg-gray-400 rounded-full p-2" href="">frok</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
