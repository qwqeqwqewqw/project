<script>
  import { onMount } from "svelte";
  import RoomHero from "$lib/Components/BookingHero.svelte";
  import RoomDetails from "$lib/Components/BookingDetails.svelte";
  import RoomOverview from "$lib/Components/BookingOverview.svelte";
  import RoomAmenities from "$lib/Components/BookingAmenities.svelte";
  import BookingRules from "$lib/Components/BookingRules.svelte";
  import BookingForm from "$lib/Components/BookingForm.svelte";
  import BookingPictureCarousel from "$lib/Components/BookingPictureCarousel.svelte";
  import { roomdata as rooms } from "$lib/Data/data.js";

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
    plan: "",
  });

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
