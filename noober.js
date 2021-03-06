let newArray = [];

function levelOfService(ride) { // FEED - RIDE
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) { // FEED - RIDEARRAY

  for (let i = 0; i < ridesArray.length; i++) {   // LOOPING - RIDEARRAY > RIDE
    let ride = ridesArray[i]

    // PRINTING - LEVEL OF SERVICE

    document.querySelector('.rides').insertAdjacentHTML('beforeend', ` 
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass

    if (levelOfService(ride) == 'Noober Purple') {     // inherit levelOfService from levelOfService function
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {     // LOOPING - RIDE > LEG
      let leg = ride[i]

      // PRINTING - LEG
      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

function pushNewArray(ride) {
  newArray.push(ride);
  renderRides(newArray)
}

window.addEventListener('DOMContentLoaded', function () {

  document.querySelector("#all-filter").addEventListener("click", async function (event) {   // All rides
    console.log("All-Filter button clicked");
    document.querySelector('.rides').innerHTML = ""
    newArray = [];

    // API Call
    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rideArray = json

    for (let i = 0; i < rideArray.length; i++) {
      let ride = rideArray[i]
      levelOfService(ride)
      renderRides(rideArray)
    }


  })

  document.querySelector("#noober-pool-filter").addEventListener("click", async function (event) {   // Noober Pool
    console.log("Noober Pool button clicked");
    document.querySelector('.rides').innerHTML = ""
    newArray = [];

    // API Call
    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rideArray = json

    for (let i = 0; i < rideArray.length; i++) {    // LOOPING - RIDEARRAY > RIDE
      let ride = rideArray[i]
      levelOfService(ride)

      if (levelOfService(ride) == 'Noober Pool') {     // inherit levelOfService from levelOfService function
        pushNewArray(ride)
      }
    }
  })

  document.querySelector("#noober-purple-filter").addEventListener("click", async function (event) {  // Noober Purple
    console.log("Noober Purple button clicked");
    document.querySelector('.rides').innerHTML = ""
    newArray = [];

    // API Call
    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rideArray = json

    for (let i = 0; i < rideArray.length; i++) {    // LOOPING - RIDEARRAY > RIDE
      let ride = rideArray[i]
      levelOfService(ride)

      if (levelOfService(ride) == 'Noober Purple') {     // inherit levelOfService from levelOfService function
        pushNewArray(ride)
      }
    }
  })

  document.querySelector("#noober-xl-filter").addEventListener("click", async function (event) {  // Noober XL
    console.log("Noober XL button clicked");
    document.querySelector('.rides').innerHTML = ""
    newArray = [];

    // API Call
    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rideArray = json

    for (let i = 0; i < rideArray.length; i++) {    // LOOPING - RIDEARRAY > RIDE
      let ride = rideArray[i]
      levelOfService(ride)

      if (levelOfService(ride) == 'Noober XL') {     // inherit levelOfService from levelOfService function
        pushNewArray(ride)
      }
    }
  })

  document.querySelector("#noober-x-filter").addEventListener("click", async function (event) {  // Noober X
    console.log("Noober X button clicked");
    document.querySelector('.rides').innerHTML = ""
    newArray = [];

    // API Call
    let response = await fetch(`https://kiei451.com/api/rides.json`)
    let json = await response.json()
    let rideArray = json

    for (let i = 0; i < rideArray.length; i++) {    // LOOPING - RIDEARRAY > RIDE
      let ride = rideArray[i]
      levelOfService(ride)

      if (levelOfService(ride) == 'Noober X') {     // inherit levelOfService from levelOfService function
        pushNewArray(ride)
      }
    }
  })
})

