<template>
  <div>
    <div class="flex space-x-2">
      <button @click="openPopup" class="trip text-green-400 mb-7">
        Go trip {{ fullName }}
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
              Enter Your  Choice Information
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

          <div v-if="step1" class=" w-full h-full flex justify-center items-center">
            <div class="space-y-4  w-full flex flex-col">
              <div class="flex justify-center items-center h-full">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">fullName:</label>
                <input
                v-model="fullName"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">email:</label>
                <input
                v-model="email"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">phoneNumber:</label>
                <input
                v-model="phoneNumber"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Address</label>
                <input
                v-model="Address"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">cardID:</label>
                <input
                v-model="cardID"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
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












          <div v-if="step2" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">carType:</label>
                <input
                v-model="carType"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Suv"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">carModel</label>
                <input
                v-model="carModel"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="2023"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Transmission:</label>
                <input
                v-model="Transmission"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Automatic"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">CarFuelType</label>
                <input
                v-model="CarFuelType"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Benzene"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">N_Seats:</label>
                <input
                v-model="N_Seats"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="number"
                  placeholder="3"
                />
              </div>
            </form>
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
          










          <div v-if="step3" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Start Location:</label>
                <input
                v-model="StartLocation"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Destination:</label>
                <input
                v-model="Destination"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Start_Date:</label>
                <input
                v-model="Start_Date"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">end_Date</label>
                <input
                v-model="end_Date"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Luggage</label>
                <input
                v-model="Luggage"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
            </form>
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











          <div v-if="step4" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <form action="" class="space-y-2">
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Cardholder Name:</label>
                <input
                v-model="cardholderName"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Abebe"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Card Number:</label>
                <input
                v-model="cardNumber"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="username@gmail.com"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Expiration Date:</label>
                <input
                v-model="expirationDate"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="0913*****"
                />
              </div>
              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">CVV/CVC</label>
                <input
                v-model="cvv"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Adama"
                />
              </div>

              <div class="flex grid-cols-2">
                <label class="w-5/12" for="firstName">Billing Address:</label>
                <input
                v-model="BillingAddress"
                  class="outline-none border border-slate-300 rounded w-7/12 py-1 px-4 bg-green-100"
                  type="text"
                  placeholder="Oro/6786785"
                />
              </div>
             
            </form>
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
                Submit
              </button>
          </div>
            </div>
          </div>


          <!-- <div v-if="step5" class="h-full w-full flex justify-center items-center">
            <div class="space-y-4 w-full flex flex-col">
              <div class="flex justify-center">
                <p class="text-3xl text-green-500">
                  Thank Your For Submitting Your Trip Status Information
                </p>
              </div>
            <div class="flex justify-between mb-auto">
              <button
              @click="back"
                class="bg-green-300 px-10 py-2 rounded-full  hover:bg-green-800 hover:font-bold hover:text-white"
              >
                
              </button>
              <button
              @click="next"
                class="bg-green-300 px-10 py-2 rounded-full  hover:bg-green-800 hover:font-bold  hover:text-white"
              >
                Close
              </button>
          </div>
            </div>
          </div> -->


         
         
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
     personalInfo : {
      fullName : '',
      email : '',
      phoneNumber : '',
      Address : '',
      cardID : '',
     },
     carChoice : {
      carType : '',
      carModel : '',
      Transmission : '',
      CarFuelType : '',
      N_Seats : 0,
     },
     tripStatus : {
      StartLocation : '',
      Destination : '',
      Start_Date : '',
      end_Date : '',
      Luggage : '',
     },
     payment : {
      cardholderName : '',
      cardNumber : '',
      expirationDate : '',
      cvv : '',
      BillingAddress : '',
     },
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
      this.step1 = true,
      this.step2 = false
      this.step3 = false
      this.step4 = false
    },

      next() {
      if (this.step1) {
        try {
          this.personalInfo.fullName = "Ahita"
          this.personalInfo.email = "ahitafani833@gmail.com"
          this.personalInfo.phoneNumber = "0901887525"
          this.personalInfo.Address = "Adama"
          this.personalInfo.cardID = "0169/12"
        } catch (error) {
          console.log(error);
        }
        this.step1 = false;
        this.step2 = true;
      } else if (this.step2) {
        try {
          this.carChoice.carType = "Ahita"
          this.carChoice.carModel = "ahitafani833@gmail.com"
          this.carChoice.Transmission = "0901887525"
          this.carChoice.CarFuelType = "Adama"
          this.carChoice.N_Seats = "0169/12"
        } catch (error) {
          console.log(error);
        }
        this.step2 = false;
        this.step3 = true;
      } else if (this.step3) {

        try {
          this.tripStatus.StartLocation = "Ahita"
          this.tripStatus.Destination = "ahitafani833@gmail.com"
          this.tripStatus.Start_Date = "0901887525"
          this.tripStatus.end_Date = "Adama"
          this.tripStatus.Luggage = "0169/12"
        } catch (error) {
          console.log(error);
        }
        this.step3 = false;
        this.step4 = true;
      } else if (this.step4){
      try {
        this.payment.cardholderName = "Ahita"
          this.payment.cardNumber = "ahitafani833@gmail.com"
          this.payment.expirationDate = "0901887525"
          this.payment.cvv = "Adama"
          this.payment.BillingAddress = "0169/12"
      } catch (error) {
        console.log(error);
      }
      }
    },
    
  back() {
      if (this.step2) {
        try {
          this.carChoice.carType = ""
          this.carChoice.carModel = ""
          this.carChoice.Transmission = ""
          this.carChoice.CarFuelType = ""
          this.carChoice.N_Seats = ""
        } catch (error) {
          console.log(error);
        }
        this.step1 = true;
        this.step2 = false;
      } else if (this.step3) {
        try {
          this.tripStatus.StartLocation = ""
          this.tripStatus.Destination = ""
          this.tripStatus.Start_Date = ""
          this.tripStatus.end_Date = ""
          this.tripStatus.Luggage = ""
        } catch (error) {
          console.log(error);
        }
        this.step2 = true;
        this.step3 = false;
      } else if (this.step4) {
        try {
          this.payment.cardholderName = ""
          this.payment.cardNumber = ""
          this.payment.expirationDate = ""
          this.payment.cvv = ""
          this.payment.BillingAddress = ""
        } catch (error) {
          console.log(error)
        }
        this.step3 = true;
        this.step4 = false;
      }
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