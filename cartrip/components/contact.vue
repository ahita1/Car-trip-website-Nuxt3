<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="px-6 py-2 text-white bg-blue-600 rounded shadow"
        type="button"
      >
        Open Model
      </button>
      <gotrip :show = "showPopup"/>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      showPopup: false,
    };
  },
  methods : {
    isOpen (){
      this .showPopup = true
      
    }
  }
}
</script>