<template>
  <div class="flex-container">
  <div class="icon"></div>
  <div class="line flex-1 h-1 bg-black"></div>
  <div class="icon"></div>
  <div class="line flex-1 h-1 bg-black"></div>
  <div class="icon"></div>
</div>

</template>

<script>
export default {

}
</script>

<style>
.flex-container {
  display: flex;
  align-items: center;
}

.icon {
  width: 30px;
  height: 30px;
  background-color: #000; /* Replace with your icon styling */
}

.line {
  /* flex-grow: 1; */
  /* height: 1px; */
  /* background-color: #000; Replace with your line color */
}

</style>