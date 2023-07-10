<template>
  <div>
    <div class="flex space-x-2">
              <button @click="openPopup" class="trip text-green-400 mb-7">
                Go trip
              </button>
            </div>
            <div id="popup" class="popup">
              <div class="popup-content ">
              <div class="w-full h-full flex justify-center items-center">
                <div>
                <!-- <span class="close" @click="closePopup()">&times;</span> -->
                <button @click="closePopup">close</button>
               </div>
               
             <div class="">
                  <form action="" class="">
                 <table>
                   <tBody>
                    <tr>
                      <td><label for="">FirstName</label></td>
                      <td><input type="text" placeholder="Abebe"></td>
                    </tr>
                     <tr>
                      <td><label for="">FirstName</label></td>
                      <td><input type="text" placeholder="Abebe"></td>
                    </tr>
                     <tr>
                       <td><label for="">FirstName</label></td>
                      <td><input type="text" placeholder="Abebe"></td>
                    </tr>
                     <tr>
                      <td><label for="">FirstName</label></td>
                      <td><input type="text" placeholder="Abebe"></td>
                    </tr>
                  </tBody>
                 </table>
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
}
</script>

<style>
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