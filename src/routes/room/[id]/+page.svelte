<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let roomId = $state(null);
  let currentImageIndex = $state(0);
  let arrivalDate = $state("");
  let departureDate = $state("");
  let guests = $state(2);
  
  const rooms = {
    1: {
      name: "Suite",
      subtitle: "A blend of elegance and comfort",
      images: ["/suites.png", "/hero.png", "/gate.png"],
      description: "Experience luxury and comfort in our elegantly designed Suite. Perfect for couples seeking a romantic getaway with modern amenities and stunning views.",
      size: "450 sq ft",
      features: ["King Size Bed", "Private Balcony", "Mini Bar", "Free WiFi"],
      price: "₹8,500",
      phone: "+91-807-5000"
    },
    2: {
      name: "Deluxe Suite",
      subtitle: "Enhanced luxury with premium amenities",
      images: ["/delux.png", "/hero.png", "/gate.png"],
      description: "Spacious deluxe suites offering enhanced comfort with premium amenities and stunning views of the surrounding landscape.",
      size: "650 sq ft",
      features: ["King Size Bed", "Separate Living Area", "Premium Mini Bar", "Free WiFi"],
      price: "₹12,500",
      phone: "+91-807-5000"
    },
    3: {
      name: "Super Deluxe Suite",
      subtitle: "Ultimate luxury experience",
      images: ["/superdelux.png", "/hero.png", "/gate.png"],
      description: "Our most luxurious suites featuring exceptional space, premium furnishings, and exclusive amenities for the ultimate experience.",
      size: "850 sq ft",
      features: ["King Size Bed", "Spacious Living Room", "Premium Bar", "Butler Service"],
      price: "₹18,500",
      phone: "+91-807-5000"
    },
    4: {
      name: "Bungalow",
      subtitle: "Private sanctuary in nature",
      images: ["/Bunglow.png", "/hero.png", "/gate.png"],
      description: "Private bungalows offering complete privacy and independence with all modern amenities in a serene natural setting.",
      size: "1200 sq ft",
      features: ["Multiple Bedrooms", "Private Garden", "Full Kitchen", "Dedicated Staff"],
      price: "₹25,000",
      phone: "+91-807-5000"
    }
  };

  const facilities = [
    { icon: "👥", name: "Daily VIP treatment" },
    { icon: "🛁", name: "Bathrooms with shower" },
    { icon: "📺", name: "49\" Smart TV" },
    { icon: "🏛️", name: "Daily access to the Spa's" },
    { icon: "🛏️", name: "Evening turndown service" },
    { icon: "☕", name: "Coffee and tea service" },
    { icon: "❄️", name: "Air conditioning" },
    { icon: "🔒", name: "Safety deposit box" },
    { icon: "🍷", name: "Minibar drinks" },
    { icon: "🛎️", name: "24h room service" },
    { icon: "👔", name: "Laundry service" },
    { icon: "📶", name: "Free wifi" }
  ];

  const suiteHighlights = [
    "Elegant Interior Design",
    "Panoramic Views",
    "Spacious Living Area"
  ];

  const hotelServices = [
    "Car & bicycle rental",
    "Currency exchange",
    "Excursions available",
    "Seasonal & gift",
    "Transfer",
    "VIP Parking"
  ];

  $: currentRoom = rooms[roomId];

  onMount(() => {
    roomId = parseInt($page.params.id);
  });

  function nextImage() {
    if (currentRoom) {
      currentImageIndex = (currentImageIndex + 1) % currentRoom.images.length;
    }
  }

  function prevImage() {
    if (currentRoom) {
      currentImageIndex = currentImageIndex === 0 ? currentRoom.images.length - 1 : currentImageIndex - 1;
    }
  }
</script>

<svelte:head>
  <title>{currentRoom?.name || 'Room'} - Cherilyn Monta Resort</title>
  <meta name="description" content="Book your stay at {currentRoom?.name || 'our luxury room'} at Cherilyn Monta Resort." />
</svelte:head>

{#if currentRoom}
<main class="min-h-screen pt-20">
  <!-- Hero Section with Image Carousel -->
  <section class="relative h-screen bg-midnight overflow-hidden">
    <div class="relative w-full h-full">
      <img
        src={currentRoom.images[currentImageIndex]}
        alt={currentRoom.name}
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      
      <!-- Navigation Arrows -->
      <button
        onclick={prevImage}
        class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onclick={nextImage}
        class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white max-w-4xl px-6">
          <h1 class="new-icon-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            {currentRoom.name}
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
            {currentRoom.subtitle}
          </p>
          <button class="btn bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 hover:scale-105 px-8 py-3 text-lg">
            BOOK ROOM
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Room Details Section -->
  <section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Room Image -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={currentRoom.images[1] || currentRoom.images[0]}
              alt="{currentRoom.name} Interior"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Navigation dots for carousel -->
          <div class="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div class="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Right: Room Info -->
        <div class="space-y-6">
          <div>
            <h2 class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-4">
              {currentRoom.name}
            </h2>
            <p class="text-lg sm:text-xl text-midnight leading-relaxed mb-6">
              {currentRoom.description}
            </p>
          </div>

          <!-- Room Features -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-forestGreen rounded-full"></span>
              <span class="text-midnight">{currentRoom.size} in size</span>
            </div>
            {#each currentRoom.features as feature}
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-forestGreen rounded-full"></span>
                <span class="text-midnight">{feature}</span>
              </div>
            {/each}
          </div>

          <!-- Contact and Booking -->
          <div class="pt-6 space-y-4">
            <div class="flex items-center space-x-4">
              <span class="text-2xl font-bold text-forestGreen">{currentRoom.phone}</span>
              <button class="btn bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 px-6 py-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Room Facilities Section -->
  <section class="py-16 sm:py-20 lg:py-24 bg-cloudWhite">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="new-icon-serif text-3xl sm:text-4xl md:text-5xl text-midnight mb-4">
          Room Facilities
        </h2>
        <p class="text-lg text-midnight opacity-80">
          Services of the Double Deluxe Suit View Room
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each facilities as facility}
          <div class="text-center space-y-3">
            <div class="text-4xl mb-2">{facility.icon}</div>
            <p class="text-midnight text-sm leading-relaxed">{facility.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Suite Highlights and Hotel Services -->
  <section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16">
        <!-- Suite Highlights -->
        <div class="bg-cloudWhite p-8 rounded-2xl shadow-lg">
          <h3 class="new-icon-serif text-2xl sm:text-3xl text-midnight mb-6 text-center">
            Suite highlights
          </h3>
          <div class="space-y-4">
            {#each suiteHighlights as highlight}
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-forestGreen flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-midnight">{highlight}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Hotel Services -->
        <div class="bg-cloudWhite p-8 rounded-2xl shadow-lg">
          <h3 class="new-icon-serif text-2xl sm:text-3xl text-midnight mb-6 text-center">
            Hotel Services
          </h3>
          <div class="space-y-4">
            {#each hotelServices as service}
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-forestGreen flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-midnight">{service}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Booking Form Section -->
  <section class="py-16 sm:py-20 lg:py-24 bg-skyBlue">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-4">
            Book Your Stay
          </h2>
          <p class="text-lg text-midnight">
            Reserve your {currentRoom.name} today and experience luxury at its finest
          </p>
        </div>

        <div class="bg-white/95 p-8 rounded-2xl shadow-xl">
          <div class="grid md:grid-cols-4 gap-6">
            <div class="form-control">
              <label class="label" for="arrival">
                <span class="label-text font-medium text-forestGreen text-lg">Arrival date</span>
              </label>
              <input
                id="arrival"
                type="date"
                bind:value={arrivalDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight text-base"
              />
            </div>
            <div class="form-control">
              <label class="label" for="departure">
                <span class="label-text font-medium text-forestGreen text-lg">Departure date</span>
              </label>
              <input
                id="departure"
                type="date"
                bind:value={departureDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight text-base"
              />
            </div>
            <div class="form-control">
              <label class="label" for="guests">
                <span class="label-text font-medium text-forestGreen text-lg">Number of people</span>
              </label>
              <select
                id="guests"
                bind:value={guests}
                class="select input-bordered w-full rounded-lg bg-cloudWhite text-midnight text-base"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
            <button class="btn btn-primary text-white font-semibold h-auto py-4 mt-4">
              <span class="text-lg">BOOK NOW</span>
            </button>
          </div>
          
          <div class="mt-6 text-center">
            <p class="text-2xl font-bold text-forestGreen">
              Starting from {currentRoom.price} per night
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
{:else}
<main class="min-h-screen pt-20 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-midnight mb-4">Room Not Found</h1>
    <p class="text-lg text-midnight mb-8">The room you're looking for doesn't exist.</p>
    <a href="/rooms" class="btn btn-primary">View All Rooms</a>
  </div>
</main>
{/if}

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>