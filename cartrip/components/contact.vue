<template>
  <div>
    <input v-model=" text " type="text" class="border outline-none">
    <p> {{  text }}</p>
  </div>
</template>

<script>
export default {
data (){
  return{
    text : ''
  }
},
}
</script>

<style>

</style>