<template>
  <div class="footerbg z-50">
    <div class="bottom-0 right-0 fixed">
      <button
        class="flex border-0 focus:outline-none hover:shadow-outline bottom-0 right-0 rounded-tl-full pt-6 md:pb-4 md:pl-4 pb-2 pl-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        @click="isjoin = !isjoin"
      >
        <div class="origin-center transform -rotate-45 text-white">join us</div>
      </button>
      <div :class="isjoin ? 'block' : 'hidden'">
        <a
          class="text-white bg-pink-500 absolute top-0 right-0 -mt-16 p-2 box-shadow rounded-full"
          href="/"
        >
          <!-- <fa icon=" fad.faFacebook"></fa        > -->
          <fa icon="envelope"></fa>
        </a>
        <a
          class="text-white bg-pink-500 absolute bottom-0 left-0 -ml-16 p-2 box-shadow rounded-full"
          href="/"
          >In</a
        >
        <a
          class="text-white bg-pink-500 absolute top-0 left-0 -mt-4 -ml-12 p-2 box-shadow rounded-full"
          href="/"
          >Pi</a
        >
        <a
          class="text-white bg-pink-500 absolute top-0 left-0 p-2 -ml-3 -mt-12 box-shadow rounded-full"
          href=""
          >Yo</a
        >
      </div>
    </div>

    <!-- <ul class="flex flex-row justify-between items-center flex-wrap">
      <li>
        <h3>Facebook</h3>
        <a href=""><img src="" alt="" /></a>
      </li>
      <li>
        <h3>Instagram</h3>
        <a href=""><img src="" alt="" /></a>
      </li>
      <li>
        <h3>Pinterest</h3>
        <a href=""><img src="" alt="" /></a>
      </li>
      <li>
        <h3>Youtube</h3>
        <a href=""><img src="" alt="" /></a>
      </li>
      <li>
        <h3>Linkdin</h3>
        <a href=""><img src="" alt="" /></a>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isjoin: false,
    }
  },
}
</script>

<style></style>
