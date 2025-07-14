<script>
  import { onMount } from "svelte";
  import RoomHero from "$lib/BookingHero.svelte";
  import RoomDetails from "$lib/BookingDetails.svelte";
  import RoomOverview from "$lib/BookingOverview.svelte";
  import RoomAmenities from "$lib/BookingAmenities.svelte";
  import BookingRules from "$lib/BookingRules.svelte";
  import BookingForm from "$lib/BookingForm.svelte";
  import BookingPictureCarousel from "$lib/BookingPictureCarousel.svelte";

  let { data } = $props();

  let rating = $state(4.9);
  let reviewCount = $state(245);
  let address = $state("Cherilyn Monta Resort, Konkan Coast, Maharashtra");
  let showGallery = $state(false);

  function handleViewPictures() {
    showGallery = true;
    console.log(showGallery);
  }

  console.log(showGallery);
  function closeGallery() {
    showGallery = false;
    console.log(showGallery);
  }
  // Form data
  let formData = $state({
    name: "",
    phone: "",
    checkinDate: "",
    checkoutDate: "",
    adults: "",
    children: "",
    roomType: "",
    numberOfRooms: "",
  });

  // Comprehensive room data with unique amenities and booking rules for each room
  const rooms = {
    1: {
      name: "Studio",
      subtitle: "A blend of elegance and comfort",
      images: ["/studio/studio2.png", "/hero.png", "/gate.png"],
      description:
        "Experience luxury and comfort in our elegantly designed Suite. Perfect for couples seeking a romantic getaway with modern amenities and stunning views.",
      size: "450 sq ft",
      features: ["King Size Bed", "Private Balcony", "Mini Bar", "Free WiFi"],
      price: "₹8,500",
      phone: "+91 7719036036",
      beds: 1,
      baths: 1,
      guests: 2,
      amenities: [
        "Air Conditioning",
        "Flat-Screen TV",
        "High-Speed Wi-Fi",
        "Electronic Safe",
        "Mini Bar",
        "Private Balcony",
        "Room Service",
        "Daily Housekeeping",
      ],
      additionalAmenities: [
        { icon: "❄️", name: "Climate Control" },
        { icon: "📺", name: "32-inch Smart TV" },
        { icon: "📶", name: "Complimentary Wi-Fi" },
        { icon: "🔒", name: "In-room Safe" },
        { icon: "☕", name: "Coffee/Tea Maker" },
        { icon: "🪞", name: "Vanity Mirror" },
        { icon: "🛁", name: "Premium Bathroom" },
        { icon: "🪑", name: "Reading Chair" },
        { icon: "⏰", name: "Wake-up Service" },
      ],
      checkInRules: [
        "Check-in time: 3:00 PM onwards",
        "Valid government ID required",
        "Early check-in subject to availability (additional charges may apply)",
        "Maximum 2 guests per suite",
      ],
      checkOutRules: [
        "Check-out time: 11:00 AM",
        "Late check-out until 2:00 PM (50% of room rate)",
        "Express check-out available",
        "Room inspection required before departure",
      ],
    },
    2: {
      name: "Deluxe Suite",
      subtitle: "Enhanced luxury with premium amenities",
      images: ["/delux.png", "/hero.png", "/gate.png"],
      description:
        "Spacious deluxe suites offering enhanced comfort with premium amenities and stunning views of the surrounding landscape.",
      size: "650 sq ft",
      features: [
        "King Size Bed",
        "Separate Living Area",
        "Premium Mini Bar",
        "Free WiFi",
      ],
      price: "₹12,500",
      phone: "+91 7719036036",
      beds: 1,
      baths: 1,
      guests: 3,
      amenities: [
        "Premium Air Conditioning",
        "Smart TV",
        "High-Speed Wi-Fi",
        "In-room Safe",
        "Premium Mini Bar",
        "Separate Living Area",
        "24/7 Room Service",
        "Concierge Service",
      ],
      additionalAmenities: [
        { icon: "❄️", name: "Dual Zone AC" },
        { icon: "📺", name: "42-inch Smart TV" },
        { icon: "📶", name: "High-Speed Wi-Fi" },
        { icon: "🔒", name: "Digital Safe" },
        { icon: "🍾", name: "Premium Mini Bar" },
        { icon: "🛋️", name: "Living Area" },
        { icon: "🛁", name: "Marble Bathroom" },
        { icon: "☕", name: "Espresso Machine" },
        { icon: "🌅", name: "Garden View" },
      ],
      checkInRules: [
        "Check-in time: 2:00 PM onwards",
        "Valid government ID and address proof required",
        "Complimentary early check-in for loyalty members",
        "Maximum 3 guests per deluxe suite",
        "Welcome drink included",
      ],
      checkOutRules: [
        "Check-out time: 12:00 PM",
        "Late check-out until 3:00 PM (complimentary for stays 3+ nights)",
        "Express check-out with mobile key",
        "Complimentary luggage storage",
      ],
    },
    3: {
      name: "Super Deluxe Suite",
      subtitle: "Ultimate luxury experience",
      images: [
        "/superdelux/superdelux1.png",
        "/superdelux/superdelux2.png",
        "/superdelux/superdelux3.png",
        "/superdelux/superdelux4.png",
        "/superdelux/superdelux5.png",
        "/superdelux/superdelux6.png",
        "/superdelux/superdelux7.png",
        "/superdelux/superdelux8.png",
        "/superdelux/superdelux9.png",
      ],
      description:
        "Our most luxurious suites featuring exceptional space, premium furnishings, and exclusive amenities for the ultimate experience.",
      size: "850 sq ft",
      features: [
        "King Size Bed",
        "Spacious Living Room",
        "Premium Bar",
        "Butler Service",
      ],
      price: "₹18,500",
      phone: "+91 7719036036",
      beds: 1,
      baths: 2,
      guests: 4,
      amenities: [
        "Climate Control",
        "Premium Entertainment System",
        "High-Speed Wi-Fi",
        "Personal Safe",
        "Premium Bar",
        "Spacious Living Room",
        "Butler Service",
        "Priority Check-in",
      ],
      additionalAmenities: [
        { icon: "❄️", name: "Smart Climate Control" },
        { icon: "📺", name: "55-inch OLED TV" },
        { icon: "📶", name: "Fiber Optic Wi-Fi" },
        { icon: "🔒", name: "Biometric Safe" },
        { icon: "🍸", name: "Premium Bar Setup" },
        { icon: "🛋️", name: "Designer Furniture" },
        { icon: "🛁", name: "Jacuzzi Bathtub" },
        { icon: "🎵", name: "Sound System" },
        { icon: "🌊", name: "Ocean View" },
      ],
      checkInRules: [
        "Check-in time: 1:00 PM onwards",
        "VIP check-in with dedicated concierge",
        "Complimentary airport transfer (within 50km)",
        "Maximum 4 guests per super deluxe suite",
        "Welcome amenities and champagne included",
      ],
      checkOutRules: [
        "Check-out time: 1:00 PM",
        "Complimentary late check-out until 4:00 PM",
        "Butler-assisted check-out",
        "Complimentary departure transfer",
        "Post-stay concierge follow-up",
      ],
    },
    4: {
      name: "Bungalow",
      subtitle: "Private sanctuary in nature",
      images: ["/bunglow/bunglow2.png", "/bunglow/Bunglow.png"],
      description:
        "Private bungalows offering complete privacy and independence with all modern amenities in a serene natural setting.",
      size: "1200 sq ft",
      features: [
        "Multiple Bedrooms",
        "Private Garden",
        "Full Kitchen",
        "Dedicated Staff",
      ],
      price: "₹25,000",
      phone: "+91 7719036036",
      beds: 2,
      baths: 2,
      guests: 6,
      amenities: [
        "Central Air Conditioning",
        "Full Kitchen",
        "Private Garden",
        "Dedicated Staff",
        "Private Parking",
        "Multiple Bedrooms",
        "Complete Privacy",
        "24/7 Support",
      ],
      additionalAmenities: [
        { icon: "❄️", name: "Central AC System" },
        { icon: "📺", name: "Multiple Smart TVs" },
        { icon: "📶", name: "Mesh Wi-Fi Network" },
        { icon: "🔒", name: "Smart Lock System" },
        { icon: "🍳", name: "Fully Equipped Kitchen" },
        { icon: "🌳", name: "Private Garden" },
        { icon: "🛁", name: "Master Bathroom Suite" },
        { icon: "🚗", name: "Private Parking" },
        { icon: "🏡", name: "Independent Villa" },
      ],
      checkInRules: [
        "Check-in time: 12:00 PM onwards",
        "Private check-in at bungalow",
        "Dedicated staff orientation included",
        "Maximum 6 guests per bungalow",
        "Grocery pre-stocking service available",
        "Pet-friendly accommodation (with prior notice)",
      ],
      checkOutRules: [
        "Check-out time: 2:00 PM",
        "Flexible check-out timing (up to 6:00 PM)",
        "Staff-assisted packing and departure",
        "Kitchen cleaning service included",
        "Property inspection with guest walkthrough",
        "Complimentary laundry service for extended stays",
      ],
    },
  };

  let currentRoom = $state(null);

  onMount(() => {
    const roomId = data.roomId;

    if (roomId && rooms[roomId]) {
      currentRoom = rooms[roomId];

      // Pre-fill room type in form
      formData.roomType = currentRoom.name.toLowerCase().replace(" ", "-");
    }
  });

  function handleBooking() {
    console.log("Booking submitted:", formData);
    // Handle booking logic here
  }

  function callRoom() {
    if (currentRoom?.phone) {
      window.location.href = `tel:${currentRoom.phone}`;
    }
  }

  function scrollToBookingForm() {
    const hero = document.querySelector(".relative.h-screen.bg-gray-900");
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.bottom;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }
</script>

<svelte:head>
  <title>{currentRoom?.name || "Book Room"} - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Book your {currentRoom?.name ||
      'luxury room'} at Cherilyn Monta Resort. Choose from our premium accommodations."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section with Room Image -->
  {#if currentRoom}
    <RoomHero
      room={currentRoom}
      onBookClick={scrollToBookingForm}
      onViewPictures={handleViewPictures}
    />
  {:else}
    <!-- Fallback hero for when no room data is available -->
    <section
      class="relative h-96 bg-orange-100 flex items-center justify-center pt-20"
    >
      <div class="text-center">
        <h1 class="new-icon-serif text-4xl sm:text-5xl text-gray-900 mb-4">
          Room Not Found
        </h1>
        <p class="text-lg text-gray-900 mb-6">
          The room you're looking for doesn't exist.
        </p>
        <a
          href="/rooms"
          class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 px-6 py-3"
        >
          View All Rooms
        </a>
      </div>
    </section>
  {/if}

  {#if showGallery}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <div class="relative w-full h-full max-w-6xl mx-auto">
        <button
          class="absolute top-4 right-4 z-50 btn btn-sm btn-circle bg-white text-black hover:bg-gray-200"
          onclick={closeGallery}
        >
          ✕
        </button>
        <BookingPictureCarousel images={currentRoom.images} />
      </div>
    </div>
  {/if}

  <!-- Main Content -->
  {#if currentRoom}
    <div class="bg-off-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Left Column - Room Details -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Room Header -->
            <RoomDetails
              room={currentRoom}
              {rating}
              {reviewCount}
              {address}
              onCallRoom={callRoom}
            />

            <!-- Overview -->
            <RoomOverview room={currentRoom} />

            <!-- Room Amenities -->
            <RoomAmenities
              room={currentRoom}
              additionalAmenities={currentRoom.additionalAmenities}
            />

            <!-- Booking Rules -->
            <BookingRules
              checkInRules={currentRoom.checkInRules}
              checkOutRules={currentRoom.checkOutRules}
            />
          </div>

          <!-- Right Column - Booking Form -->
          <div class="lg:col-span-1">
            <BookingForm
              room={currentRoom}
              {formData}
              onSubmit={handleBooking}
              onCallRoom={callRoom}
            />
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>
