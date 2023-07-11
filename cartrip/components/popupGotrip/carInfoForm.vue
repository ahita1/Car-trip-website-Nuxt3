<template>
  <div>
    <div class="flex space-x-2">
      <button @click="openPopup" class="trip text-green-400 mb-7">
        Go trip
      </button>
    </div>


    <div id="popup" class="popup">
      <div class="popup-content">
        <div class="w-full h-full">
          <div class="flex justify-between ">
            <!-- <span class="close" @click="closePopup()">&times;</span> -->
            <h1 class="text-3xl text-green-700">Enter Your Identity Information</h1>
            <button @click="closePopup"><img src="../static/cancel.svg" alt=""></button>
          </div>

          <div class="h-full w-full flex justify-center items-center">
            <form action="" class="space-y-2 ">
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
              <div class=" flex justify-end ">
                  <button class="bg-green-500 px-10 py-2 rounded-md text-white hover:bg-green-800 hover:font-bold">Next</button>
                 </div>
               
            </form>
         
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    },
    closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    },
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