<template>
    <div class="w-content min-h-max bg-gray-100 ">
      <div class="sticky top-0 left-0 z-50 overflow-x-hidden overflow-y-hidden mb-1 bg-white">
        <navbar />
      </div>
      <div class="grid-col-2 flex w-full">
        <div class="w-2/12 max-h-max bg-white bg-fixed bg-contain overflow-auto"><sidebar /></div>
        <div class="w-9/12 place-items-center ml-16 mt-5 max-h-max bg-gray-100"> <slot /></div>
      </div>
     
    </div>
  </template>
  
  <script>
  export default {
 
  };
  </script>
  
  <style>
  </style>





