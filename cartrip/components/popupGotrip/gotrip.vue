<template>
  <div>
    <div class="flex space-x-2">
      <button @click="openPopup" class="trip text-green-400 mb-7">
        Go trip
      </button>
    </div>

    <div id="popup" class="popup">
      <div class="popup-content ">
        <div class="w-full h-full">
          <div class="flex justify-between mb-2">
            <!-- <span class="close" @click="closePopup()">&times;</span> -->
            <h1 v-if="step1" class="text-2xl text-green-950 ">
              Enter Your Identity Information
            </h1>
            <h1 v-if="step2" class="text-2xl text-green-950 ">
              Enter Your Choice Car Information
            </h1>
            <h1 v-if="step3" class="text-2xl text-green-950 ">
              Enter Trip Status Information
            </h1>
            <h1 v-if="step4" class="text-2xl text-green-950 ">
             Verify Your Payment
            </h1>
            <button @click="closePopup">
              <Icon class="text-4xl text-green-400 hover:text-green-700" icon="mdi:cancel-bold" />
            </button>
          </div>

          <div class="flex justify-center items-center space-x-10 text-3xl text-green-300 ">
            <Icon class="hover:text-green-700" icon="carbon:location-filled" />
            <Icon class="hover:text-green-700" icon="carbon:location-filled" />
            <Icon class="hover:text-green-700" icon="carbon:location-filled" />
            <Icon class="hover:text-green-700" icon="carbon:location-filled" />
          </div>

          <div v-if="step1" class=" w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">fullName:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">email:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">phoneNumber:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Address</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">cardID:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
              </div>
          
            </div>
          </div>












          <div v-if="step2" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">fullName:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">email:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">phoneNumber:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Address</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">cardID:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
              </div>
           
            </div>
          </div>
          










          <div v-if="step3" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">fullName:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">email:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">phoneNumber:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Address</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">cardID:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
              </div>
           
            </div>
          </div>











          <div v-if="step4" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">fullName:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">email:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">phoneNumber:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Address</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">cardID:</label>
                <input
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
              </div>
            </div>
          </div>

          <div class="flex justify-between mb-auto">
              <button
              @click="back"
                class="bg-green-300 px-10 py-2 rounded-full  hover:bg-green-800 hover:font-bold hover:text-white"
              >
                Back
              </button>
              <button
              @click="next"
                class="bg-green-300 px-10 py-2 rounded-full  hover:bg-green-800 hover:font-bold  hover:text-white"
              >
                Next
              </button>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
		Icon,
	},
  data(){
    return{
     step1 : true,
     step2 : false,
     step3 : false,
     step4 : false,
    }
  },
  methods: {
    openPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    },
    closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    },

    next(){
     this.step1 = true


    },
    back(){

    }
  },
};
</script>

<style>
tr + tr {
  margin-top: 10px;
}
.popup {
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: none;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-content {
  background-color: #fefefe;
  margin: 13% auto;
  padding: 10px;
  border: 1px solid #888;
  width: 50%;
  height: 60%;
  /* border-radius: 10px; */
}
.close {
  color: #aaa;
  float: right;
  font-size: 10px;
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