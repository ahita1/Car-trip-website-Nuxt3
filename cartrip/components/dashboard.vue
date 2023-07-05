<template>
  <div class="bg-grey-500 font-axiforma font-Axiforma">
    <div class="flex justify-end w-full mb-5">
   <select name="" id="" class="outline-none w-[200px] py-2 px-2 bg-green-50 border border-green-400 rounded-lg hover:bg-green-300">
    <option disabled selected value="">Date Options</option>
    <option value="">daily</option>
    <option value="">weekly</option>
    <option value="">monthly</option>
    <option value="">yearly</option>
   </select>
    </div>
<div class="bg-grey-500 flex grid-cols-4 w-full space-x-5 max-h-max">
  <div class="flex justify-between items-center w-3/12 bg-green-100 p-5 border shadow-md rounded-md">
      <div>
        <p>Total Cars</p>
        <p class="text-xl">500+</p>
      </div>
      <img class="w-10 h-10" src="../static/sidebarIcons/cars.svg" alt="" />
    </div>

    <div class="flex justify-between items-center w-3/12 bg-green-100 p-5 border shadow-md rounded-md">
      <div>
        <p>Daily Trips</p>
        <p class="text-xl">765+</p>
      </div>
      <img
              class="w-10 h-10"
              src="../static/DashboardIcons/trip.svg"
              alt=""
            />
    </div>

    <div class="flex justify-between items-center w-3/12 bg-green-100 p-5 border shadow-md rounded-md">
      <div>
        <p>Total Drivers</p>
        <p class="text-xl">2,766+</p>
      </div>
      <img
              class="w-10 h-10"
              src="../static/DashboardIcons/driver.svg"
              alt=""
            />    </div>

    <div class="flex justify-between items-center w-3/12 bg-green-100 p-5 border shadow-md rounded-md">
      <div>
        <p>Kilometers Daily</p>
        <p class="text-xl">1,267+</p>
      </div>
      <img class="w-10 h-10" src="../static/DashboardIcons/distance.svg" alt="" />
    </div>
</div>






  </div>
</template>

<script>

// export default {
  // data(){
  //   return {
//       statusFilter : null,
//       startDate : null,
//       endDate : null,
//       // selectedChannel : All,
//       // selectedDateRange : All,
//       showDateRange : null,
//       channelOptions : [],
//       dateRangeOptions : [],
//       chartOptions : {
//         responsive : true,
//         maintaiAspectRatio : false
//       },
//       chartData: {
//         labels: ['Jan', 'Feb', 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul'],
//         datasets: [{ 
//           label: 'Deposits',
//             backgroundColor: 'rgb(134 239 172)',
//             borderColor: 'rgb(134 239 172)',
//             borderWidth: 0.5,
//             hoverBackgroundColor: 'rgb(34 197 94)', // Example hover background color
//   hoverBorderColor: 'rgb(34 197 94)', // Example hover border color
//   hoverBorderWidth: 1,
//           data: [400, 200, 600 , 400 , 50 , 800 , 300]
//          }]
//       },
//       chartDatas: {
//         labels: ['Jan', 'Feb', 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul'],
//         datasets: [{ 
//           label: 'Deposits',
//             backgroundColor: 'rgb(187 247 208)',
//             borderColor: 'rgb(34 197 94)',
//             borderWidth: 0.5,
//             hoverBackgroundColor: 'rgb(34 197 94)', // Example hover background color
//   hoverBorderColor: 'rgb(34 197 94)', // Example hover border color
//   hoverBorderWidth: 1,
//           data: [400, 200, 600 , 400 , 50 , 800 , 300]
//          }]
//       },


      
//       chartOptions: {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//       scaleLabel: {
//         display: true,
//         labelString: 'Date per Month',
//         grid: {
//         display: true,
//         drawBorder: true,
//         lineWidth: 1,
//         color: 'rgba(0, 0, 0, 0.1)',
//         drawOnChartArea: true,
//         drawTicks: true,
//         tickMarkLength: 10,
//         zeroLineColor: 'rgba(0, 0, 0, 0.25)',
//         zeroLineWidth: 1,
//       },
//       },
//     }],
//     yAxes: [{
//       scaleLabel: {
//         display: true,
//         labelString: 'No of Cars',
//         grid: {
//         display: true,
//         drawBorder: true,
//         lineWidth: 1,
//         color: 'rgba(0, 0, 0, 0.1)',
//         drawOnChartArea: true,
//         drawTicks: true,
//         tickMarkLength: 10,
//         zeroLineColor: 'rgba(0, 0, 0, 0.25)',
//         zeroLineWidth: 1,
//       },
//       },
//     }],
//   },
// },



//     }
//   },
  
// }

</script>

<style>

</style>