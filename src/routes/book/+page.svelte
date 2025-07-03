<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let roomType = $state('Standard Rooms');
  let selectedRoom = $state('Luxury Rooms');
  let rating = $state(4.9);
  let reviewCount = $state(245);
  let address = $state('2464 Royal Ln. Mesa, New Jersey 45463');
  let pricePerNight = $state(150);
  
  // Room specifications
  let bedCount = $state(1);
  let bathCount = $state(1);
  let sqft = $state(300);
  let guestCount = $state(2);
  
  // Form data
  let formData = $state({
    name: '',
    phone: '',
    checkinDate: '',
    checkoutDate: '',
    adults: '',
    children: '',
    roomType: '',
    numberOfRooms: ''
  });

  // Room data with images from carousel
  const roomsData = {
    1: {
      name: "Suite",
      subtitle: "A blend of elegance and comfort",
      image: "/suites.png",
      price: 150
    },
    2: {
      name: "Deluxe Suite", 
      subtitle: "Enhanced luxury with premium amenities",
      image: "/delux.png",
      price: 200
    },
    3: {
      name: "Super Deluxe Suite",
      subtitle: "Ultimate luxury experience", 
      image: "/superdelux.png",
      price: 300
    },
    4: {
      name: "Bungalow",
      subtitle: "Private sanctuary in nature",
      image: "/Bunglow.png", 
      price: 400
    }
  };

  let currentRoomData = $state(null);
  
  // Room amenities
  const amenities = [
    { icon: '❄️', name: 'Air Conditioning' },
    { icon: '📺', name: 'Flat-Screen TV' },
    { icon: '📶', name: 'High-Speed Wi-Fi' },
    { icon: '🔒', name: 'Electronic Safe' },
    { icon: '🔊', name: 'Sound System' },
    { icon: '🪞', name: 'Vanity mirror' },
    { icon: '🛁', name: 'Bathtubs' },
    { icon: '🪑', name: 'Seating area' },
    { icon: '⏰', name: 'Alarm clock' }
  ];
  
  // Booking rules
  const checkInRules = [
    'Lorem ipsum dolor sit amet',
    'Sed ut perspiciatis',
    'Nemo enim ipsam'
  ];
  
  const checkOutRules = [
    'Lorem ipsum dolor sit amet',
    'Sed ut perspiciatis',
    'Nemo enim ipsam'
  ];

  onMount(() => {
    const roomId = $page.url.searchParams.get('room');
    const roomTypeParam = $page.url.searchParams.get('type');
    
    if (roomId && roomsData[roomId]) {
      currentRoomData = roomsData[roomId];
      roomType = currentRoomData.name;
      selectedRoom = currentRoomData.name;
      pricePerNight = currentRoomData.price;
    } else if (roomTypeParam) {
      roomType = roomTypeParam;
      selectedRoom = roomTypeParam;
    }
  });
  
  function handleBooking() {
    console.log('Booking submitted:', formData);
    // Handle booking logic here
  }
</script>

<svelte:head>
  <title>Book Room - Cherilyn Monta Resort</title>
  <meta name="description" content="Book your luxury room at Cherilyn Monta Resort. Choose from our premium accommodations." />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section with Room Image -->
  {#if currentRoomData}
    <section class="relative h-screen bg-midnight overflow-hidden">
      <div class="absolute inset-0">
        <img
          src={currentRoomData.image}
          alt={currentRoomData.name}
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-center text-white max-w-4xl px-6">
          <h1 class="new-icon-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            {currentRoomData.name}
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
            {currentRoomData.subtitle}
          </p>
          <button class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-midnight transition-all duration-300 px-8 py-3 text-lg">
            BOOK ROOM
          </button>
        </div>
      </div>
    </section>
  {:else}
    <!-- Fallback hero for when no room data is available -->
    <section class="relative h-96 bg-seashellWhite flex items-center justify-center pt-20">
      <div class="text-center">
        <h1 class="new-icon-serif text-4xl sm:text-5xl text-midnight mb-4">Book Your Stay</h1>
        <p class="text-lg text-midnight">Choose your perfect room at Cherilyn Monta Resort</p>
      </div>
    </section>
  {/if}

  <!-- Main Content -->
  <div class="bg-freshCream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - Room Details -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Room Header -->
          <div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-4">
                <h2 class="text-2xl sm:text-3xl font-bold text-midnight">{roomType}</h2>
                <span class="bg-forestGreen text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedRoom}
                </span>
              </div>
              <button class="flex items-center space-x-2 text-forestGreen hover:text-sageGreen transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
            
            <!-- Rating and Address -->
            <div class="flex items-center space-x-4 mb-4">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="font-semibold text-midnight">{rating}</span>
                <span class="text-stormCloud">({reviewCount} Review)</span>
              </div>
            </div>
            
            <div class="flex items-center space-x-2 mb-6">
              <svg class="w-5 h-5 text-forestGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-stormCloud">{address}</span>
            </div>
            
            <!-- Price -->
            <div class="flex items-baseline space-x-2">
              <span class="text-3xl font-bold text-midnight">${pricePerNight}</span>
              <span class="text-stormCloud">/ night</span>
            </div>
            
            <!-- Room Specs -->
            <div class="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-skyBlue/30">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-forestGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <span class="text-midnight">{bedCount} Bed</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-forestGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                </svg>
                <span class="text-midnight">{bathCount} Bath</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-forestGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span class="text-midnight">{sqft} sqft</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-forestGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span class="text-midnight">{guestCount} Guests</span>
              </div>
            </div>
          </div>
          
          <!-- Overview -->
          <div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
            <h3 class="text-2xl font-bold text-midnight mb-4">Overview</h3>
            <p class="text-stormCloud leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <!-- Room Amenities -->
          <div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
            <h3 class="text-2xl font-bold text-midnight mb-4">Room Amenities</h3>
            <p class="text-stormCloud mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {#each amenities as amenity}
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-freshCream transition-colors">
                  <span class="text-2xl">{amenity.icon}</span>
                  <span class="text-midnight">{amenity.name}</span>
                </div>
              {/each}
            </div>
          </div>
          
          <!-- Booking Rules -->
          <div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
            <h3 class="text-2xl font-bold text-midnight mb-6">Booking Rules</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Check In -->
              <div>
                <h4 class="text-xl font-semibold text-midnight mb-4">Check In</h4>
                <div class="space-y-3">
                  {#each checkInRules as rule}
                    <div class="flex items-start space-x-3">
                      <svg class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-stormCloud">{rule}</span>
                    </div>
                  {/each}
                </div>
              </div>
              
              <!-- Check Out -->
              <div>
                <h4 class="text-xl font-semibold text-midnight mb-4">Check Out</h4>
                <div class="space-y-3">
                  {#each checkOutRules as rule}
                    <div class="flex items-start space-x-3">
                      <svg class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-stormCloud">{rule}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Booking Form -->
        <div class="lg:col-span-1">
          <div class="bg-cloudWhite rounded-2xl p-6 shadow-lg sticky top-24">
            <h3 class="text-2xl font-bold text-midnight mb-6">Book Room</h3>
            
            <form on:submit|preventDefault={handleBooking} class="space-y-4">
              <!-- Name -->
              <div class="form-control">
                <label class="label" for="name">
                  <span class="label-text font-medium text-midnight">Your Name *</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ex. John Doe"
                  bind:value={formData.name}
                  class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                />
              </div>
              
              <!-- Phone -->
              <div class="form-control">
                <label class="label" for="phone">
                  <span class="label-text font-medium text-midnight">Phone Number *</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  bind:value={formData.phone}
                  class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                />
              </div>
              
              <!-- Check-in Date -->
              <div class="form-control">
                <label class="label" for="checkin">
                  <span class="label-text font-medium text-midnight">Check-in Date *</span>
                </label>
                <input
                  id="checkin"
                  type="date"
                  bind:value={formData.checkinDate}
                  class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                />
              </div>
              
              <!-- Check-out Date -->
              <div class="form-control">
                <label class="label" for="checkout">
                  <span class="label-text font-medium text-midnight">Check-out Date *</span>
                </label>
                <input
                  id="checkout"
                  type="date"
                  bind:value={formData.checkoutDate}
                  class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                />
              </div>
              
              <!-- Adults -->
              <div class="form-control">
                <label class="label" for="adults">
                  <span class="label-text font-medium text-midnight">Adult *</span>
                </label>
                <select
                  id="adults"
                  bind:value={formData.adults}
                  class="select input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
              
              <!-- Children -->
              <div class="form-control">
                <label class="label" for="children">
                  <span class="label-text font-medium text-midnight">Children *</span>
                </label>
                <select
                  id="children"
                  bind:value={formData.children}
                  class="select input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                >
                  <option value="">Select</option>
                  <option value="0">No Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
              </div>
              
              <!-- Room Type -->
              <div class="form-control">
                <label class="label" for="roomtype">
                  <span class="label-text font-medium text-midnight">Room Type *</span>
                </label>
                <select
                  id="roomtype"
                  bind:value={formData.roomType}
                  class="select input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                >
                  <option value="">Select</option>
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>
              
              <!-- Number of Rooms -->
              <div class="form-control">
                <label class="label" for="rooms">
                  <span class="label-text font-medium text-midnight">Number of Rooms *</span>
                </label>
                <select
                  id="rooms"
                  bind:value={formData.numberOfRooms}
                  class="select input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>
              </div>
              
              <!-- Submit Button -->
              <button
                type="submit"
                class="btn w-full bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 mt-6 py-3 text-lg font-semibold"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
  }
</style>