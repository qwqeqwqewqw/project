<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";

  import BookingHero from "$lib/Components/BookingHero.svelte";
  import BookingDetails from "$lib/Components/BookingDetails.svelte";
  import BookingOverview from "$lib/Components/BookingOverview.svelte";
  import BookingAmenities from "$lib/Components/BookingAmenities.svelte";
  import BookingRules from "$lib/Components/BookingRules.svelte";
  import BookingForm from "$lib/Components/BookingForm.svelte";
  import BookingVillaPlans from "../../lib/Components/BookingVillaPlans.svelte";
  import { BookingFormSchema } from "../../schema/BookingForm";

  import { selectedVilla } from "../../stores/villaStore";
  import { callServerApi } from "../../services/DataService";

  let currentRoom = null;
  let villaplans = [];
  let selectedPlan = null;
  let currenttype = null;
  let roomInv = null;
  let bookingStatus = "";

  let rating = 4.9;
  let reviewCount = 245;
  let address = "Cherilyn Monta Resort, Konkan Coast, Maharashtra";
  let finalobj = {};
  let formData = {
    name: "",
    phone: "",
    email: "",
    checkinDate: "",
    checkoutDate: "",
    adults: "",
    children: 0,
    roomType: "",
    numberOfRooms: "",
    plan: "",
    extraBeds: 0,
  };

  function generateBookingId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 0-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }

  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  async function getPlans() {
    const data = await callServerApi("getSalesPackages", {}, {});
    currenttype = currentRoom?.villa_type;
    // console.log("Current villa type:", currenttype);

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

  // async function getbooking() {
  //   const data = await callServerApi("getSalesBookings", {}, {});
  //   console.log("Booking : ", data.data);
  // }

  // async function deleteItemTypesById() {
  //   const result = await callServerApi(
  //     "deleteSalesBookingsById",
  //     {},
  //     {
  //       _id: "689df3e611179e48ede8d975",
  //       booking_id: "20250814200414",
  //       booking_date: "2025-08-14 20:04",
  //       cust_name: "Ojasvin Borawke",
  //       phone1: "0888577550",
  //       email_id: "ojasvinborawke@gmail.com",
  //       travel_from_date: "2025-08-15",
  //       travel_to_date: "2025-08-16",
  //       package_id: "20250517200045",
  //       pax: 1,
  //       extra_beds: 0,
  //       child_count: 0,
  //       v_admin_type_master: [],
  //       v_sales_packages: [
  //         {
  //           _id: "68289e1b82b24e12e4e2740f",
  //           package_id: "20250517200045",
  //           stay_tax_percent: 12,
  //           food_tax_percent: 5,
  //           start_date: "2025-05-17",
  //           end_date: "2026-05-17",
  //           status: "Active",
  //           package_name: "AP Plan - 2BHK Bungalow - Slab (1-15)",
  //           min_pax: 1,
  //           max_pax: 15,
  //           total_pax_per_room: 4,
  //           extra_bedding: 1,
  //           min_mrp: 3500,
  //           max_mrp: 4000.5,
  //           child_mrp: 1610,
  //           min_extra_bed_mrp: 2021.6,
  //           max_extra_bed_mrp: 2522.1,
  //           agent_final_rate: 3000.76,
  //           agent_child_rate: 1610,
  //           agent_extra_bed_rate: 2499,
  //           plan_name: "AP plan",
  //           room_type: "2BHK Bungalow",
  //           season: "",
  //           audit_info: [
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:03",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:03",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:05",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:06",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:06",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:08",
  //             },
  //             {
  //               user: "Dev Mallick",
  //               action_date: "2025-05-17 20:08",
  //             },
  //           ],
  //           stay_child_rate: 500,
  //           stay_rate: 1470,
  //           food_agent_child_rate: 1000,
  //           food_agent_rate: 1500,
  //           food_child_rate: 1000,
  //           food_max_discount: 370,
  //           food_rate: 2242,
  //           stay_agent_child_rate: 500,
  //           stay_agent_extra_bed_rate: 825,
  //           stay_agent_rate: 1273,
  //           stay_extra_bed_rate: 150,
  //           stay_max_discount: 100,
  //           remarks:
  //             "These rates are adjusted to get final out come as :                                                                                                                  Agent MRP -3000/- | Cherilyn Net Rate - 3500/- | Rack MRP Rate 4000/-",
  //         },
  //       ],
  //       v_sales_offers: [],
  //       v_hr_employees: [],
  //     }
  //   );
  //   if (result.msg) {
  //     console.log(result.msg);
  //   }
  // }

  async function saveSalesBookings(data) {
    try {
      // Ensure optional values have defaults
      if (!formData.children) formData.children = 0;
      if (formData.extraBeds == null) formData.extraBeds = 0;
      // Validate against schema
      BookingFormSchema.parse(data);

      // Call API
      const result = await callServerApi("saveSalesBookings", data, {});

      if (result.msg) {
        let status = result.msg;
        bookingStatus = result.msg;
        setTimeout(() => {
          status = "";
          bookingStatus = "";
        }, 5000);
      }
    } catch (err) {
      let errorObj = err;
      console.log(errorObj);
    }
  }

  async function handleBooking() {
    formData.plan = selectedPlan ? selectedPlan.plan_name : "";

    finalobj = {
      booking_id: generateBookingId(),
      booking_date: getFormattedDate(),
      cust_name: formData.name,
      phone1: formData.phone,
      email_id: formData.email,
      travel_from_date: formData.checkinDate,
      travel_to_date: formData.checkoutDate,
      package_id: selectedPlan.package_id,
      pax: formData.adults,
      extra_beds: formData.extraBeds,
      child_count: formData.children,
    };

    await saveSalesBookings(finalobj);
    console.log("Booking data : ", finalobj);
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
    // console.log("selected plan : ", selectedPlan);
  }

  onMount(async () => {
    const villa = get(selectedVilla);
    // console.log("Data for booking page ", villa);
    currentRoom = villa;

    if (villa && villa.name) {
      formData.roomType = villa.villa_type;
    }

    await getPlans(); // load plans after room is set
    await getbooking();
    if (villaplans.length > 0) selectedPlan = villaplans[0];
    // console.log("selected plan : ", selectedPlan);
    // console.log("Filtered plans:", villaplans);
  });
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
    <BookingHero room={currentRoom} />

    <div class="bg-off-white">
      <div class="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <BookingDetails
              room={currentRoom}
              {rating}
              {reviewCount}
              {address}
              onCallRoom={callRoom}
            />
            <!-- <button
              type="button"
              class="text-black"
              onclick={deleteItemTypesById}
            >
              delete
            </button>
            <button type="button" class="text-black" onclick={getbooking}>
              get
            </button> -->
            <BookingOverview room={currentRoom} />

            <!-- Plans selector with props -->
            <BookingVillaPlans
              {villaplans}
              {selectedPlan}
              {currenttype}
              onSelectPlan={handlePlanSelect}
            />

            <!-- Show selected plan details -->
            {#if selectedPlan}
              <section class="mt-8 p-4 bg-gray-100 text-black rounded shadow">
                <h3 class="text-xl font-semibold mb-2">
                  Selected Plan Details
                </h3>
                <p>
                  <strong>Plan Name:</strong>
                  {selectedPlan.package_name.replace(/ - Slab \(1-15\)/, "") ||
                    ""}
                </p>
                <p>
                  <strong>Price Range:</strong> ₹{selectedPlan.min_mrp} - ₹{selectedPlan.max_mrp}
                </p>
                <p><strong>Remarks:</strong> {selectedPlan.remarks}</p>
                <!-- Future: show amenities here -->
              </section>
            {/if}

            <BookingAmenities {roomInv} {selectedPlan} room={currentRoom} />

            <BookingRules
              checkInRules={currentRoom.checkInRules}
              checkOutRules={currentRoom.checkOutRules}
            />
          </div>

          <div class="lg:col-span-1">
            <BookingForm
              {selectedPlan}
              room={currentRoom}
              {formData}
              onSubmit={handleBooking}
              onCallRoom={callRoom}
              {bookingStatus}
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
