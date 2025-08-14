<script>
  const { room, formData, onSubmit, onCallRoom, selectedPlan } = $props();

  // Generate options for adults and children based on max_pax
  let adultsOptions = $state([]);
  let childrenOptions = $state([]);
  let PackageName = $state("Package");
  let totalPrice = $state("0.00");

  $effect(() => {
    if (selectedPlan) {
      adultsOptions = Array.from(
        { length: selectedPlan.max_pax },
        (_, i) => i + 1
      );
      PackageName = selectedPlan.package_name || "Package";
    }
  });

  $effect(() => {
    if (selectedPlan && formData.adults) {
      const maxChildren = selectedPlan.max_pax - parseInt(formData.adults);
      childrenOptions = Array.from({ length: maxChildren + 1 }, (_, i) => i);
    } else if (selectedPlan) {
      childrenOptions = Array.from(
        { length: selectedPlan.max_pax + 1 },
        (_, i) => i
      );
    }
  });

  // Function to calculate price
  function calculatePrice() {
    const adults = formData.adults;
    const children = formData.children;
    const numberOfRooms = formData.numberOfRooms;
    const extraBeds = formData.extraBeds;
    const checkinDate = formData.checkinDate;
    const checkoutDate = formData.checkoutDate;
    const plan = selectedPlan;

    if (!plan) {
      return "0.00";
    }

    // If no meaningful selections are made (checking actual default values from form), return minimum price
    if (
      (!adults || adults === "") &&
      (!children || children === "") &&
      (!numberOfRooms || numberOfRooms === "") &&
      (!extraBeds || extraBeds === "0" || extraBeds === "") &&
      (!checkinDate || checkinDate === "") &&
      (!checkoutDate || checkoutDate === "")
    ) {
      return plan.min_mrp.toFixed(2);
    }

    // Calculate number of nights
    const nights =
      checkinDate && checkoutDate
        ? Math.max(
            1,
            Math.ceil(
              (new Date(checkoutDate).getTime() -
                new Date(checkinDate).getTime()) /
                (1000 * 60 * 60 * 24)
            )
          )
        : 1;

    const a = parseInt(adults || "0");
    const c = parseInt(children || "0");
    const r = parseInt(numberOfRooms || "0") || 1;
    const e = parseInt(extraBeds || "0");

    let price = 0;
    price += a * plan.agent_final_rate;
    price += c * plan.agent_child_rate;
    price += e * plan.agent_extra_bed_rate;
    price *= r * nights;

    return price.toFixed(2);
  }

  // Effect to update price when any relevant data changes
  $effect(() => {
    totalPrice = calculatePrice();
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  function handleAdultsChange(value) {
    formData.adults = Number(value);
    const maxChildren = selectedPlan.max_pax - parseInt(value);
    if (parseInt(formData.children || "0") > maxChildren) {
      formData.children = maxChildren;
    }
    // Trigger price recalculation
    totalPrice = calculatePrice();
  }

  function handleChildrenChange(value) {
    formData.children = Number(value);
    const maxAdults = selectedPlan.max_pax - parseInt(value);
    if (parseInt(formData.adults || "0") > maxAdults) {
      formData.adults = maxAdults;
    }
    // Trigger price recalculation
    totalPrice = calculatePrice();
  }

  function cleanPackageName(name) {
    return name.replace(/ - Slab \(1-15\)$/i, ""); // removes " - Slab (1-15)" at the end
  }
</script>

<div id="booking-form" class="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">
    {cleanPackageName(PackageName)}
  </h3>

  <div class="bg-gray-100 p-4 rounded-lg mb-6 text-center">
    <div class="text-3xl font-bold text-green-700">₹{totalPrice}</div>
    <div class="text-sm text-gray-600">per night</div>
  </div>

  <form onsubmit={handleSubmit} class="space-y-4">
    <div class="form-control">
      <label class="label" for="name">
        <p class="label-text font-medium text-gray-900">
          Your Name <span class="text-red-800">*</span>
        </p>
      </label>
      <input
        id="name"
        type="text"
        placeholder="Ex. John Doe"
        bind:value={formData.name}
        class="input input-bordered text-gray-600 w-full bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="phone">
        <p class="label-text font-medium text-gray-900">
          Phone Number <span class="text-red-800">*</span>
        </p>
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="Enter Phone Number"
        bind:value={formData.phone}
        class="input input-bordered text-gray-600 w-full bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="checkin">
        <p class="label-text font-medium text-gray-900">
          Check-in Date <span class="text-red-800">*</span>
        </p>
      </label>
      <input
        id="checkin"
        type="date"
        bind:value={formData.checkinDate}
        onchange={() => (totalPrice = calculatePrice())}
        class="input input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="checkout">
        <p class="label-text font-medium text-gray-900">
          Check-out Date <span class="text-red-800">*</span>
        </p>
      </label>
      <input
        id="checkout"
        type="date"
        bind:value={formData.checkoutDate}
        onchange={() => (totalPrice = calculatePrice())}
        class="input input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="adults">
        <p class="label-text font-medium text-gray-900">
          Adults <span class="text-red-800">*</span>
        </p>
      </label>
      <select
        id="adults"
        bind:value={formData.adults}
        onchange={(e) => handleAdultsChange(e.target.value)}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      >
        <option value="" selected>Select</option>
        {#each adultsOptions as option}
          <option value={option}>{option} Adult{option > 1 ? "s" : ""}</option>
        {/each}
      </select>
    </div>

    <div class="form-control">
      <label class="label" for="children">
        <p class="label-text font-medium text-gray-900">Children</p>
      </label>
      <select
        id="children"
        bind:value={formData.children}
        onchange={(e) => handleChildrenChange(e.target.value)}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
      >
        <option value="" selected>Select</option>
        {#each childrenOptions as option}
          <option value={Number(option)}>{option}</option>
        {/each}
      </select>
    </div>

    <div class="form-control">
      <label class="label" for="extraBeds">
        <p class="label-text font-medium text-gray-900">Extra Beds</p>
      </label>
      <select
        id="extraBeds"
        bind:value={formData.extraBeds}
        onchange={() => (totalPrice = calculatePrice())}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
      >
        <option value={0} selected>0</option>
        {#each Array(selectedPlan?.extra_bedding || 0)
          .fill(0)
          .map((_, i) => i + 1) as bed}
          <option value={Number(bed)}>{bed}</option>
        {/each}
      </select>
    </div>

    <div class="form-control">
      <label class="label" for="rooms">
        <p class="label-text font-medium text-gray-900">
          Number of Rooms <span class="text-red-800">*</span>
        </p>
      </label>
      <select
        id="rooms"
        bind:value={formData.numberOfRooms}
        onchange={() => (totalPrice = calculatePrice())}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      >
        <option value="" selected>Select</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>

    <button
      type="submit"
      class="btn w-full bg-almaris-blue text-white border-0 transition-all duration-300 mt-6 py-3 text-lg font-semibold"
    >
      Book
    </button>

    <div class="text-center mt-4 pt-4 border-t border-blue-200">
      <p class="text-sm text-gray-600 mb-2">Need help? Call us directly</p>
      <button
        type="button"
        onclick={onCallRoom}
        class="text-almaris-gold font-semibold"
      >
        {room.phone}
      </button>
    </div>
  </form>
</div>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
  }
</style>
