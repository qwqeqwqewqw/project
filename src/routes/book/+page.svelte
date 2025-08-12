<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  import RoomHero from "$lib/Components/BookingHero.svelte";
  import RoomDetails from "$lib/Components/BookingDetails.svelte";
  import RoomOverview from "$lib/Components/BookingOverview.svelte";
  import RoomAmenities from "$lib/Components/BookingAmenities.svelte";
  import BookingRules from "$lib/Components/BookingRules.svelte";
  import BookingForm from "$lib/Components/BookingForm.svelte";

  import { selectedVilla } from "../../stores/villaStore";

  let currentRoom = null;

  let rating = 4.9;
  let reviewCount = 245;
  let address = "Cherilyn Monta Resort, Konkan Coast, Maharashtra";

  let formData = {
    name: "",
    phone: "",
    checkinDate: "",
    checkoutDate: "",
    adults: "",
    children: "",
    roomType: "",
    numberOfRooms: "",
    plan: "",
  };

  onMount(() => {
    console.log(get(selectedVilla));
    const villa = get(selectedVilla);
    currentRoom = villa;

    // if (villa && villa.name) {
    //   formData.roomType = villa.name.toLowerCase().replace(/\s+/g, "-");
    // } else if (browser) {
    //   // Redirect after delay if no villa selected
    //   setTimeout(() => {
    //     goto("/rooms");
    //   }, 3000);
    // }
  });

  function handleBooking() {
    console.log("Booking submitted:", formData);
    // Your booking logic here
  }

  function callRoom() {
    if (currentRoom?.phone) {
      // Using window.location.href is fine for tel: links
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
  {#if currentRoom}
    <RoomHero room={currentRoom} />

    <div class="bg-off-white">
      <div class="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <RoomDetails
              room={currentRoom}
              {rating}
              {reviewCount}
              {address}
              onCallRoom={callRoom}
            />
            <RoomOverview room={currentRoom} />
            <RoomAmenities
              room={currentRoom}
              additionalAmenities={currentRoom.additionalAmenities}
            />
            <BookingRules
              checkInRules={currentRoom.checkInRules}
              checkOutRules={currentRoom.checkOutRules}
            />
          </div>

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
  {:else}
    <section
      class="relative h-96 bg-orange-100 flex items-center justify-center pt-20"
    >
      <div class="text-center px-6">
        <h1 class="new-icon-serif text-4xl sm:text-5xl text-gray-900 mb-4">
          Room Not Found
        </h1>
        <p class="text-lg text-gray-900 mb-6">
          No villa selected. Redirecting to room list...
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
</main>
