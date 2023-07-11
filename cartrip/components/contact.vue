<template>
  <div>

<button onclick="openForm()">Open Form</button>

<div id="popup-form" class="form-container">
  <div class="form-step active" id="step-1">
    <!-- Step 1 form fields -->
    <input type="text" placeholder="Name">
    <button onclick="nextStep(2)">Next</button>
  </div>

  <div class="form-step" id="step-2">
    <!-- Step 2 form fields -->
    <input type="email" placeholder="Email">
    <button onclick="nextStep(3)">Next</button>
  </div>

  <div class="form-step" id="step-3">
    <!-- Step 3 form fields -->
    <input type="password" placeholder="Password">
    <button onclick="submitForm()">Submit</button>
  </div>
</div>
  </div>
</template>

<script>
export default{
  methods : {
     openForm() {
    document.getElementById("popup-form").style.display = "block";
  },

   nextStep(step) {
    var currentStep = document.getElementById("step-" + step);
    var nextStep = document.getElementById("step-" + (step + 1));
    
    currentStep.style.display = "none";
    nextStep.classList.add("active");
  },

   submitForm() {
    // Perform form submission or validation
    // ...

    // Reset form steps after submission (optional)
    document.getElementById("popup-form").style.display = "none";
    document.getElementById("step-1").style.display = "block";
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "none";
  }
  }
}
</script>

<style>
.form-container {
  display: none;
  /* Add desired styles for the container */
}
.form-step {
  display: none;
  /* Add desired styles for the form steps */
}
.form-step.active {
  display: block;
  /* Add desired styles for the active form step */
}
</style>