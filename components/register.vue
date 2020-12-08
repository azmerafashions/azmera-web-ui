<template>
  <div>
    <div class="bg-white max-w-sm rounded-xl shadow-lg min-h-full p-10">
      <div class="flex flex-col justify-center items-m align-middle">
        <h1 class="text-center mb-5 text-2xl text-pink-600">Register</h1>
        <form action="">
          <ul class="space-y-4 flex flex-col justify-between sp">
            <li class="relative flex flex-row items-center input-animate">
              <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
              <input
                class="w-full input input-pink placeholder-black"
                type="text"
                placeholder="Fristname"
              />
            </li>
            <li class="relative flex flex-row items-center input-animate">
              <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
              <input
                class="w-full input input-pink placeholder-black"
                type="text"
                placeholder="Lastname"
              />
            </li>
            <li class="relative flex flex-row items-center input-animate">
              <fa icon="user" class="z-10 absolute left-0 ml-2"> </fa>
              <input
                class="w-full input input-pink placeholder-black"
                type="text"
                placeholder="Email"
              />
            </li>
            <li>
              <span
                ><label for="">Male</label>
                <input type="radio" name="gender" id="" />
                <label for="">Female</label>
                <input type="radio" name="gender" id=""
              /></span>
            </li>
            <li>
              <label for="">Date of birth</label>
              <input type="date" name="" id="" />
            </li>
            <li
              class="relative flex flex-row items-center input-animate justify-start"
            >
              <fa icon="lock" class="z-10 absolute left-0 ml-2"> </fa>
              <input
                class="w-full input input-pink placeholder-black pl-12"
                type="password"
                placeholder="Password"
              />
            </li>
            <li
              class="relative flex flex-row items-center input-animate justify-start"
            >
              <fa icon="lock" class="z-10 absolute left-0 ml-2"> </fa>
              <input
                class="w-full input input-pink placeholder-black pl-12"
                type="password"
                placeholder="confirm Password"
              />
            </li>
            <li class="flex flex-row justify-between items-center">
              <button
                class="pink-button input-animate bg-pink-400 text-gray-800 w-1/2 text-lg button"
              >
                submit
              </button>
            </li>
            <li class="text-lg text-center text-pink-400 my-2">
              ......... OR .........
            </li>
            <li class="flex flex-row justify-center items-center">
              <button
                class="relative pink-button input-animate bg-pink-400 text-gray-800 w-1/2 text-lg button"
              >
                Google
                <fa icon="lock" class="z-10 absolute left-0 ml-2 my-1"> </fa>
              </button>
            </li>
          </ul>

          <!-- <label for="password">Password</label>
        <input type="Password"/> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
