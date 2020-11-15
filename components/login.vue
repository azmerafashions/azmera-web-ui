<template>
  <div>
    <div class="flex justify-center md:justify-between border-2">
      <div class="h-screen w-full p-10 flex flex-col md:flex-row">
        <div
          id="appname"
          class="flex flex-col bg-blue-600 flex-grow justify-end p-6 text-white md:justify-start"
        >
          <h1 class="text-4xl md:text-6xl">App name</h1>
          <h1 class="md:text-2xl">application description</h1>
        </div>
        <ul id="login" class="mt-4 md:w-1/2 md:pl-10 md:py-10">
          <li><h1 class="text-2xl font-bold">Log in</h1></li>
          <li class="mt-2">
            <label for="username"
              >Username <span class="text-blue-600">*</span></label
            >
          </li>
          <li class="mt-2">
            <input
              class="w-full bg-gray-300 py-4 rounded-md outline-none p-4"
              type="text"
            />
          </li>
          <li class="mt-4">
            <label for="password">
              Password <span class="text-blue-600">*</span>
            </label>
          </li>
          <li
            class="flex flex-row justify-between mb-8 bg-white items-center bg-gray-300 rounded-md"
          >
            <input
              class="flex-grow p-2 outline-none bg-gray-300 py-4 rounded-md p-4"
              type="password"
            />

            <svg
              class="mr-4 text-blue-600 hover:text-blue-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
              />
            </svg>
          </li>

          <li class="mt-6">
            <button
              class="bg-blue-600 rounded-md text-white py-4 w-full focus:outline-none"
            >
              Log in
            </button>
          </li>
          <li class="flex justify-center mt-2">
            <a class="text-center text-blue-600" href=""> Forgot password</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
