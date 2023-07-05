<template>
  <div class="space-y-5 fixed">
    <div class="mt-5 ml-5"><h1>MENU</h1></div>
    <div class="space-y-5 mb-7 ml-7">


      <div class="flex space-x-5">
         <NuxtLink active-class="text-green-500 text-lg" to="/">
 
          <div class="flex space-x-2">
            <img
              class="w-5 h-5 "
              src="../static/sidebarIcons/dashboard.svg"
              alt=""
            />
            <p>Dashboard</p>
          </div>
        </NuxtLink>

      </div>

      <!-- <div class="flex space-x-5">
        <nuxt-link active-class="text-green-500 text-lg" to="/Homepages/booking">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/booking.svg"
              alt=""
            />
            <p>Bookings</p>
          </div>
        </nuxt-link>
      </div> -->

      <!-- <div class="flex space-x-5">
        <nuxt-link active-class="text-green-500 text-lg" to="/Homepages/riders">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/rider.svg"
              alt=""
            />
            <p>Riders</p>
          </div>
        </nuxt-link>
      </div> -->

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" class="" to="/booking">
          <div class="flex space-x-2">
            <img class="w-5 h-5" src="../static/sidebarIcons/cars.svg" alt="" />
            <h1>Booking</h1>
          </div>
        </NuxtLink>
      </div>


      <div class="flex space-x-5">
        <NuxtLink active-class="text-green-500 text-lg" to="/dispatcher">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/dispatcher.svg"
              alt=""
            />
            <p>Dispatchers</p>
          </div>
        </NuxtLink>
      </div>

      <!-- <div class="flex space-x-5">
        <nuxt-link active-class="text-green-500 text-lg" to="/Homepages/Drivers">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/dispatcher.svg"
              alt=""
            />
            <p>Drivers</p>
          </div>
        </nuxt-link>
      </div> -->

  

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" to="/reports">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/report.svg"
              alt=""
            />
            <p>Reports</p>
          </div>
        </NuxtLink>
      </div>

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" to="/traking">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/traking_bookings.svg"
              alt=""
            />
            <p>Traking Bookings</p>
          </div>
        </NuxtLink>
      </div>

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" to="/pricing_model">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/price_model.svg"
              alt=""
            />
            <p>Pricing Model</p>
          </div>
        </NuxtLink>
      </div>

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" to="/feedback">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/feedback.svg"
              alt=""
            />
            <p>Feedback</p>
          </div>
        </NuxtLink>
      </div>

      <div class="flex space-x-2">
        <NuxtLink active-class="text-green-500 text-lg" to="/payments">
          <div class="flex space-x-2">
            <img
              class="w-5 h-5"
              src="../static/sidebarIcons/payment.svg"
              alt=""
            />
            <p>payments</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>   

<script>

export default{}

</script>

<style>
</style>
