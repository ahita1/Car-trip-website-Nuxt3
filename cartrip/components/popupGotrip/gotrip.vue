<template>
  <div>
    <div class="flex space-x-2">
              <button @click="openPopup" class="trip text-green-400 mb-7">
                Go trip
              </button>
            </div>
            <div id="popup" class="popup">
              <div class="popup-content">
                <span class="close" @click="closePopup()">&times;</span>
                <h1>This is a popup</h1>
                <p>Hello, World!</p>
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
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-content {
  background-color: #fefefe;
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