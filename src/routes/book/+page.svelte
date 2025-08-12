<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";

  import RoomHero from "$lib/Components/BookingHero.svelte";
  import RoomDetails from "$lib/Components/BookingDetails.svelte";
  import RoomOverview from "$lib/Components/BookingOverview.svelte";
  import RoomAmenities from "$lib/Components/BookingAmenities.svelte";
  import BookingRules from "$lib/Components/BookingRules.svelte";
  import BookingForm from "$lib/Components/BookingForm.svelte";
  import BookingVillaPlans from "../../lib/Components/BookingVillaPlans.svelte";

  import { selectedVilla } from "../../stores/villaStore";
  import { callServerApi } from "../../services/DataService";

  let currentRoom = null;
  let villaplans = [];
  let selectedPlan = null;

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

  onMount(async () => {
    const villa = get(selectedVilla);
    console.log("Data for booking page ", villa);
    currentRoom = villa;

    if (villa && villa.name) {
      formData.roomType = villa.name.toLowerCase().replace(/\s+/g, "-");
    }

    await getPlans(); // load plans after room is set

    if (villaplans.length > 0) selectedPlan = villaplans[0];

    console.log("Filtered plans:", villaplans);
  });

  async function getPlans() {
    const data = await callServerApi("getSalesPackages", {}, {});
    console.log("unfiltered list: ", data.data);
    let currenttype = currentRoom?.villa_type;
    console.log("Current villa type:", currenttype);

    if (!currenttype) {
      villaplans = [];
      return;
    }

    // Filter plans that include currenttype in room_type (case-sensitive)
    villaplans = data.data.filter(
      (plan) => plan.room_type && plan.room_type.includes(currenttype)
    );

    // Specific exclusion if current room is "Delux Room" (case-sensitive)
    if (currenttype === "Delux Room") {
      villaplans = villaplans.filter(
        (plan) => plan.room_type !== "Super Delux Room"
      );
    }
  }

  function handleBooking() {
    // Attach selected plan to formData before booking
    formData.plan = selectedPlan ? selectedPlan.plan_name : "";

    console.log("Booking submitted:", formData);
    // Your booking logic here
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

  function handlePlanSelect(plan) {
    selectedPlan = plan;
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

            <!-- Plans selector with props -->
            <BookingVillaPlans
              {villaplans}
              {selectedPlan}
              onSelectPlan={handlePlanSelect}
            />

            <!-- Show selected plan details -->
            {#if selectedPlan}
              <section class="mt-8 p-4 bg-gray-100 rounded shadow">
                <h3 class="text-xl font-semibold mb-2">
                  Selected Plan Details
                </h3>
                <p><strong>Plan Name:</strong> {selectedPlan.plan_name}</p>
                <p>
                  <strong>Price Range:</strong> ₹{selectedPlan.min_mrp} - ₹{selectedPlan.max_mrp}
                </p>
                <p><strong>Remarks:</strong> {selectedPlan.remarks}</p>
                <!-- Future: show amenities here -->
              </section>
            {/if}

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
          Please wait while we fetch the room info.
        </h1>

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
