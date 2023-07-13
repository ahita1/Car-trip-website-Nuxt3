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
          class="flex border border-green-400 border-rounded border-solid px-2 py-1 bg-green-200 hover:bg-green-400 hover:text-white rounded-md"
        >
          <img
            class="w-6 h-6 mr-2 text-green-700"
            src="../static/Car_images/add.svg"
            alt=""
          />
          Add New Car
        </button>

        <!-- modal here haha -->
        <TransitionRoot
          appear
          :show="isOpen"
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed inset-0 bg-gray-900/60 bg-opacity-60"
                aria-hidden="true"
              />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div class="flex min-h-full items-center justify-center p-4">
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
                    class="w-[700px] h-[500px] transform overflow-hidden rounded-2xl bg-white align-middle shadow-3xl transition-all"
                  >
                    <div class="w-full ">
                      <div
                        class="w-full flex justify-end items-start py-2 px-2"
                      >
                        <button
                          type="button"
                          class="inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="closeModal"
                        >
                          Got it, thanks!
                        </button>
                      </div>

                      <DialogTitle
                        as="h3"
                        class="text-lg font-medium leading-6 text-gray-900 mb-8"
                      >
                        <h1 v-if="step1" class="text-2xl text-green-700 pl-5">
                          Car Details Informations
                        </h1>
                        <h1 v-if="step2" class="text-2xl text-green-700 pl-5">
                          Car Driver Informations
                        </h1>
                        <h1 v-if="step3" class="text-2xl text-green-700 pl-5">
                          Car Specification Informations
                        </h1>
                        <h1 v-if="step4" class="text-2xl text-green-700 pl-5">
                          Car Picture Form
                        </h1>
                        
                      </DialogTitle>

                      <div class="h-full w-full ">
                        
                         <div class="h-full" v-if="step1">
                          <div  class="w-full flex justify-center items-center">
                            <form
                              @submit="(e) => login(e)"
                              action=""
                              class="h-full space-y-2"
                            >
                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Name:</label>

                                <input
                                  placeholder="Car Name"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">ID:</label>

                                <input
                                  placeholder="Car ID"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Type:</label>

                                <select
                                  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md"
                                  name="Cars"
                                  id="2023Car"
                                  aria-placeholder="Car Type"
                                >
                                  <option disabled selected value="">
                                    Type
                                  </option>
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
                                  <option value="">
                                    Certified <Pre-Owned></Pre-Owned>
                                  </option>
                                  <option value="">Hybrid/Electric</option>
                                </select>
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Model:</label>

                                <select
                                  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md"
                                  name="Cars"
                                  id="2023Car"
                                  aria-placeholder="Car Type"
                                >
                                  <option disabled selected value="">
                                    Model
                                  </option>
                                  <option value="">SUV</option>
                                  <option value="">Crossover</option>
                                  <option value="">Sedan</option>
                                  <option value="">Truck</option>
                                  <option value="">Wagon/Hatchback</option>
                                </select>
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Year:</label>

                                <input
                                  placeholder="Year"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="date "
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">LPN:</label>

                                <input
                                  placeholder="License PN"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>
                            </form>
                          </div>
                       
                        <div class="flex justify-between  px-5 mt-20">
                          <button
                            @click="back"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Back
                          </button>
                          <button
                            @click="next"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Next
                          </button>
                        </div>
                         </div>






                         <div class="h-full " v-if="step2">
                          <div  class="w-full flex justify-center items-center">
                            <form
                              @submit="(e) => login(e)"
                              action=""
                              class="h-full space-y-2"
                            >
                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Driver Name:</label>

                                <input
                                  placeholder="Car Name"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Driver ID:</label>

                                <input
                                  placeholder="Car ID"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Driver PN:</label>

                               <input  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md" type="text">
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">DriverEmail:</label>

                               <input  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md" type="email">
                              </div>

                            </form>
                          </div>
                       
                        <div class="flex justify-between  px-5 mt-20">
                          <button
                            @click="back"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Back
                          </button>
                          <button
                            @click="next"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Next
                          </button>
                        </div>
                         </div>












                         <div class="h-full " v-if="step3">
                          <div  class="w-full flex justify-center items-center">
                            <form
                              @submit="(e) => login(e)"
                              action=""
                              class="h-full space-y-2"
                            >
                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Car Seat:</label>

                                <input
                                  placeholder="Car Name"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="number"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Car Colour:</label>

                                <input
                                  placeholder="Car ID"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Transmission:</label>

                                <select
                                  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md"
                                  name="Cars"
                                  id="2023Car"
                                  aria-placeholder="Car Type"
                                >
                                  <option disabled selected value="">
                                    Transmission
                                  </option>
                                  <option value="">Manual </option>
                                  <option value="">Automatic</option>
                                  <option value="">Both</option>
                                  
                                </select>
                              </div>

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Fuel Type:</label>

                                <select
                                  class="inputs bg-green-100 outline-none border border-slate-300 py-2 px-2 w-8/12 rounded-md"
                                  name="Cars"
                                  id="2023Car"
                                  aria-placeholder="Car Type"
                                >
                                  <option disabled selected value="">
                                    Model
                                  </option>
                                  <option value="">Diesel</option>
                                  <option value="">Benzene</option>
                                  <option value="">Fuel</option>
                                  <option value="">Electric</option>
                                </select>
                              </div>


                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">LPN:</label>

                                <input
                                  placeholder="License PN"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="text"
                                />
                              </div>
                            </form>
                          </div>
                       
                        <div class="flex justify-between  px-5 mt-20">
                          <button
                            @click="back"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Back
                          </button>
                          <button
                            @click="next"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Next
                          </button>
                        </div>
                         </div>










                         <div class="h-full flex flex-col" v-if="step4">
                          <div  class="w-full flex justify-center items-center">
                            <form
                              @submit="(e) => login(e)"
                              action=""
                              class="h-full space-y-2"
                            >
                          

                              

                              <div class="flex grid-cols-2">
                                <label class="w-4/12" for="">Car Picture:</label>

                                <input
                                  placeholder="License PN"
                                  class="w-8/12 bg-green-100 inputs outline-none border border-slate-300 px-2 py-1 rounded-md"
                                  type="file"
                                />
                              </div>
                            </form>
                          </div>
                       
                        <div class="flex justify-between  px-5 mt-auto">
                          <button
                            @click="back"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Back
                          </button>
                          <button
                            @click="next"
                            class="bg-green-300 px-10 py-2 rounded-full hover:bg-green-800 hover:font-bold hover:text-white"
                          >
                            Submit
                          </button>
                        </div>
                         </div>

                     
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
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
            <div class="">
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
            <div>
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
            <div>
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
            <div>
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
            <div>
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
          <div class="w-6/12 flex flex-col">
            <div>
              <gotrip />
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
              <nuxt-link to="/viewMore">
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
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import Gotrip from "./popupGotrip/gotrip.vue";

export default {
  name: "ExampleComponent",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Gotrip,
  },
  data(){
return {
  step1 : true,
  step2 : false,
  step3 : false,
  step4 : false,
}
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
      openModal,
    };
  },
  methods: {
    openPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    },
    closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
      this.step1 = true,
      this.step2 = false
      this.step3 = false
      this.step4 = false
    },
    next() {
      if (this.step1) {
        this.step1 = false;
        this.step2 = true;
      } else if (this.step2) {
        this.step2 = false;
        this.step3 = true;
      } else if (this.step3) {
        this.step3 = false;
        this.step4 = true;
      }
    },

  back() {
      if (this.step2) {
        this.step1 = true;
        this.step2 = false;
      } else if (this.step3) {
        this.step2 = true;
        this.step3 = false;
      } else if (this.step4) {
        this.step3 = true;
        this.step4 = false;
      }
    },
  },
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
/* ########################################################################################## */
/* pop style haha */
/* ########################################################################################## */
.popup {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-content {
  /* background-color: #fefefe; */
  margin: 13% auto;
  padding: 10px;
  border: 1px solid #888;
  width: 50%;
  height: 60%;
  border-radius: 10px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>