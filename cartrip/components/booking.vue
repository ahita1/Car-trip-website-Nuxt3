<template>
    <div class="modal-container overflow-y-scroll h-full">
      <div
        class="flex justify-between items center mb-5 border shadow-sm px-2 items-center py-2"
      >
      
        <p class="text-xl font-semibold">Booking</p>
        <!-- <button @click="refresh">Refresh</button> -->
  
        <div class="flex space-x-2">
          <button
            @click="openModal"
            class="flex  border border-green-400 border-rounded border-solid px-2 py-1 bg-green-200 hover:bg-green-400 hover:text-white rounded-md "
          >
          <img class="w-6 h-6 mr-2 text-green-700" src="../static/Car_images/add.svg" alt="">
            Add New Car
          </button>

          <!-- modal here haha -->
          <TransitionRoot 
          appear :show="isOpen" 
           as="template"
            enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0">
    <Dialog as="div" @close="closeModal" class="relative z-10 ">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/60 bg-opacity-60 " aria-hidden="true" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 "
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >

            <DialogPanel
              class=" w-[700px] h-[500px] transform overflow-hidden rounded-2xl bg-white  align-middle shadow-3xl transition-all "
            >


            <div class="w-full flex justify-end items-start py-2 px-2">
                <button
                  type="button"
                  class="inline-flex  rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
            </div>

              <DialogTitle
                as="h3"
                class="flex justify-center items-center text-lg font-medium leading-6 text-gray-900 mb-8"
              >
              <h1 class="text-2xl text-green-700">Car Details Informations</h1>
              </DialogTitle>



              
                <form @submit="(e) => login(e)"  action="" class="flex flex-col">
                   <tbody class=" flex justify-center items-center">
                    <table class="">
                <tr class="">
                   <td class=""> <label for="">Name:</label></td> 
                   <td class=""> <input placeholder="Car Name" class="w-[200px] bg-green-100  inputs outline-none border border-green-100 px-2 py-1 rounded-md" type="text"></td> 
                </tr>
                <tr class=" ">
                   <td class="">   <label for="">ID:</label></td> 
                   <td class=""> <input placeholder="Car ID" class="w-[200px] bg-green-100 inputs outline-none border border-green-100 px-2 py-1 rounded-md" type="text"></td> 
                </tr>
                <tr class=" ">
                   <td class=""><label for="">Type:</label></td> 
                   <td class="">
                     <select class="inputs bg-green-100 outline-none border border-green-100 py-1 px-2 w-[200px] rounded-md " name="Cars" id="2023Car" aria-placeholder="Car Type">
<option disabled selected value="">Type</option>
<option  value="">SUV</option>
<option value="">Crossover</option>
<option value="">Sedan</option>
<option value="">Truck</option>
<option value="">Wagon/Hatchback</option>
<option value="">convertible</option>
<option value="">Luxury</option>
<option value="">Coupe</option>
<option value="">Van/Minivan</option>
<option value="">Sports Car</option>
<option value="">Certified <Pre-Owned></Pre-Owned></option>
<option value="">Hybrid/Electric</option>
</select>
</td> 
                </tr>

                <tr class=" ">
                   <td class="">
                    <label for="">Model:</label></td> 
                   <td class=""> <select class="inputs bg-green-100 outline-none border border-green-100 py-1 px-2 w-[200px] rounded-md" name="Cars" id="2023Car" aria-placeholder="Car Type">
<option disabled selected value="">Model</option>
<option  value="">SUV</option>
<option value="">Crossover</option>
<option value="">Sedan</option>
<option value="">Truck</option>
<option value="">Wagon/Hatchback</option>
</select>
      </td> 
                </tr>

                <tr class="">
                    <td class=""><label for="">Year:</label></td>
                    <td class=""><input placeholder="Year"  class="w-[200px] bg-green-100 inputs outline-none border border-green-100 px-2 py-1 rounded-md" type="date "></td>
                </tr>
                <tr class="">
                    <td class=""><label for="">LPN:</label></td>
                    <td class=""> <input placeholder="License PN" class="w-[200px] bg-green-100 inputs outline-none border border-green-100 px-2 py-1 rounded-md" type="text">
                    </td>
                </tr>
            </table>
        </tbody>

    <div class="flex justify-center items-center">
      <div class="">
        <button   class="border px-10 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 font-bold">Next</button>
      </div>
    </div>
                   
    </form>
            




















             
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
        </div>

        

<!-- 
        <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>
  </div> -->









     
  








        
      </div>
      <div class="flex space-x-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            class="outline-none py-1 px-2 w-[300px] border border-gray-200"
          />
        </div>
        <div>
          <select
            class="outline-none border bg-white py-2 px-2 w-[200px]"
            name="Cars"
            id="2023Car"
            aria-placeholder="Car Type"
          >
            <option disabled selected value="">Car Type</option>
            <option value="">SUV</option>
            <option value="">Crossover</option>
            <option value="">Sedan</option>
            <option value="">Truck</option>
            <option value="">Wagon/Hatchback</option>
            <option value="">convertible</option>
            <option value="">Luxury</option>
            <option value="">Coupe</option>
            <option value="">Van/Minivan</option>
            <option value="">Sports Car</option>
            <option value="">Certified <Pre-Owned></Pre-Owned></option>
            <option value="">Hybrid/Electric</option>
          </select>
        </div>
        <div>
          <select
            class="outline-none border py-2 px-2 bg-white"
            name="Cars"
            id="2023Car"
            aria-placeholder="Car Type"
          >
            <option disabled selected value="">Transmissions</option>
            <option value="">Manual</option>
            <option value="">Automatic</option>
            <option value="">CVT</option>
          </select>
        </div>
        <div>
          <input class="outline-none border px-2 py-1 bg-white" type="date" />
        </div>
        <div
          class="border px-2 py-1 rounded-md bg-green-600 text-white text-center items-center"
        >
          <h1>Reset Filter</h1>
        </div>
      </div>
      <!-- car lists -->
      <div class="flex grid-cols-2 w-full mt-5 space-x-5">
        <div class="left w-6/12 space-y-5">
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6/12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/2009-hummer-h2-base-suv-angular-front.avif"
                alt=""
              /><img />
            </div>
            <!-- car details -->
            <div class="w-6/12 flex flex-col">
              <div class="flex space-x-2">
                <button  class="trip text-green-400 mb-7">
                  Go trip
                </button>
                <modalForm1 :show="showPopup2" />
              </div>

              
              <div class="space-y-1">
                <p>Hummer 2021 new</p>
                <p>WXVSZ</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <div>
                    <p>Force</p>
                  </div>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="/Homepages/viewDetails">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6-12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/car51.png"
                alt=""
              />
            </div>
            <!-- car details -->
            <div class="w-6/12 flex flex-col">
              <!-- <nuxt-link to="/Homepages/booking">
              <p class="trip text-green-400 mb-7">Go trip</p>
            </nuxt-link> -->
              <div class="flex space-x-2">
                <button  class="trip text-green-400 mb-7">
                  Go trip
                </button>
                <!-- <modalForm1 :show="showPopup2" /> -->
              </div>
              <div class="space-y-2">
                <p>Toyota 2021 new</p>
                <p>GFHTY9</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <p>Force</p>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6-12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/car50.png"
                alt=""
              />
            </div>
            <!-- car details -->
            <div class="w-6-12 flex flex-col">
              <!-- <nuxt-link to="/Homepages/booking">
            <p class="trip text-green-400 mb-7">Go trip</p>
           </nuxt-link> -->
              <div class="flex space-x-2">
                <button  class="trip text-green-400 mb-7">
                  Go trip
                </button>
                <!-- <modalForm1 :show="showPopup2" /> -->
              </div>
              <div class="space-y-2">
                <p>Corolla 2021 new</p>
                <p>GHFSD7</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <p>Force</p>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
  
        <div class="right w-6/12 space-y-5">
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6-12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/car49.png"
                alt=""
              />
            </div>
            <!-- car details -->
            <div class="w-6-12 flex flex-col">
              <!-- <nuxt-link to="/Homepages/booking">
    <p class="trip text-green-400 mb-7">Go trip</p>
  </nuxt-link> -->
              <div class="flex space-x-2">
                <button  class="trip text-green-400 mb-7">
                  Go trip
                </button>
                <!-- <modalForm1 :show="showPopup2" /> -->
              </div>
              <div class="space-y-2">
                <p>Mustang 2021 new</p>
                <p>EFXXDSD9</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <p>Force</p>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6-12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/car48.png"
                alt=""
              />
            </div>
            <!--car details -->
            <div class="w-6-12 flex flex-col">
              <div class="flex space-x-2">
                <button  class="trip text-green-400 mb-7">
                  Go trip
                </button>
                <!-- <modalForm1 :show="showPopup2" /> -->
              </div>
              <div class="space-y-2">
                <p>Ford 2021 new</p>
                <p>XVDFHG6</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <p>Force</p>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
  
          <div class="flex space-x-10 bg-white p-5 grid-cols-2 w-full">
            <!-- car images -->
            <div class="w-6-12 shadow-md">
              <img
                class="w-64 h-64 bg-gray-100"
                src="../static/Car_images/car47.png"
                alt=""
              />
            </div>
            <!--car details -->
            <div class="w-6-12 flex flex-col">
              <div class="flex space-x-2">
                <button class="trip text-green-400 mb-7">
                  Go trip
                </button>
  
                <!-- <modalForm1 :show="showPopup2" /> -->
              </div>
              <div class="space-y-2">
                <p>Hayundai 2021 new</p>
                <p>XGHFT7</p>
                <div class="flex space-x-3">
                  <div class="flex space-x-2">
                    <img src="../static/seats.svg" alt="" />
                    <p>2</p>
                  </div>
                  <div class="flex space-x-1">
                    <img class="w-5 h-5" src="../static/manual.svg" alt="" />
                    <p>Manual</p>
                  </div>
                  <p>Force</p>
                </div>
              </div>
  
              <div class="details mt-auto">
                <nuxt-link to="">
                  <p class="underline mb-auto">View More</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script >
 import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

export default {
  name: 'ExampleComponent',
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
  },
  setup() {
    const isOpen = ref(false);

    function closeModal() {
      isOpen.value = false;
    }

    function openModal() {
      isOpen.value = true;
    }

    return {
      isOpen,
      closeModal,
      openModal
    };
  }
};
  </script>
  
  <style>
  .modal-container {
    background-color: #f2f2f2; /* Set the desired background color */
  }
  
  .trip {
    position: relative;
  
    text-decoration: none;
  }
  
  .trip:hover {
  }
  
  .trip::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(12, 248, 23, 0.911);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .trip:hover::before {
    transform: scaleX(1);
  }
  </style>