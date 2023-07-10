<template>
  <div
    class="items-center flex justify-between w-full h-20  font-axiforma p-5"
  >
    <div class="flex space-x-24">
    <NuxtLink to = "/">
      <div class="flex space-x-2 text-2xl">
        <img class="w-7 h-7" src="../static/navbarIcons/storm.svg" alt="" />
        <h1 class="">Ethiopian Local Trip</h1>
      </div>
    </NuxtLink>
      <h1 class="font-bold text-2xl">Welcome Back, Fani</h1>
    </div>
    <div class="flex space-x-24">
      <h1>hey Fani haha</h1>
     <div>
      <img class="w-7 h-7 relative" src="../static/notification.svg" alt="" />
    <button>
      <p class="notif absolute top-2 right-4  z-50 w-5 h-5 text-sm flex justify-center items-center border-red-800 font-bold text-white  rounded-full dynamic">2+</p>
    </button>
     </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notif{
  background-color: red;
}
</style>