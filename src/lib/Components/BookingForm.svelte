<script>
  let { room, formData, onSubmit, onCallRoom } = $props();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }
</script>

<div id="booking-form" class="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">Book {room.name}</h3>

  <!-- Price Display -->
  <div class="bg-gray-100 p-4 rounded-lg mb-6 text-center">
    <div class="text-3xl font-bold text-green-700">{room.price}</div>
    <div class="text-sm text-gray-600">per night</div>
  </div>

  <form onsubmit={handleSubmit} class="space-y-4">
    <!-- Name -->
    <div class="form-control">
      <label class="label" for="name">
        <p class="label-text font-medium text-gray-900">
          Your Name <span class=" text-red-800">*</span>
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

    <!-- Phone -->
    <div class="form-control">
      <label class="label" for="phone">
        <p class="label-text font-medium text-gray-900">
          Phone Number <span class=" text-red-800">*</span>
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

    <!-- Check-in Date -->
    <div class="form-control">
      <label class="label" for="checkin">
        <p class="label-text font-medium text-gray-900">
          Check-in Date <span class=" text-red-800">*</span>
        </p>
      </label>
      <input
        id="checkin"
        type="date"
        bind:value={formData.checkinDate}
        class="input input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <!-- Check-out Date -->
    <div class="form-control">
      <label class="label" for="checkout">
        <p class="label-text font-medium text-gray-900">
          Check-out Date <span class=" text-red-800">*</span>
        </p>
      </label>
      <input
        id="checkout"
        type="date"
        bind:value={formData.checkoutDate}
        class="input input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      />
    </div>

    <!-- Adults -->
    <div class="form-control">
      <label class="label" for="adults">
        <p class="label-text font-medium text-gray-900">
          Adults <span class=" text-red-800">*</span>
        </p>
      </label>
      <select
        id="adults"
        bind:value={formData.adults}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      >
        <option value="">Select</option>
        <option value="1">1 Adult</option>
        <option value="2">2 Adults</option>
        <option value="3">3 Adults</option>
        <option value="4">4 Adults</option>
        <option value="5">5+ Adults</option>
      </select>
    </div>

    <!-- Children -->
    <div class="form-control">
      <label class="label" for="children">
        <p class="label-text font-medium text-gray-900">Children</p>
      </label>
      <select
        id="children"
        bind:value={formData.children}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
      >
        <option value="">Select</option>
        <option value="0">No Children</option>
        <option value="1">1 Child</option>
        <option value="2">2 Children</option>
        <option value="3">3 Children</option>
        <option value="4">4+ Children</option>
      </select>
    </div>

    <!-- Number of Rooms -->
    <div class="form-control">
      <label class="label" for="rooms">
        <p class="label-text font-medium text-gray-900">
          Number of Rooms <span class=" text-red-800">*</span>
        </p>
      </label>
      <select
        id="rooms"
        bind:value={formData.numberOfRooms}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
        required
      >
        <option value="">Select</option>
        <option value="1">1 Room</option>
        <option value="2">2 Rooms</option>
        <option value="3">3 Rooms</option>
        <option value="4">4+ Rooms</option>
      </select>
    </div>

    <!-- Number of Rooms -->
    <div class="form-control">
      <label class="label" for="rooms">
        <p class="label-text font-medium text-gray-900">
          Select Plan <span class=" text-red-800">*</span>
        </p>
      </label>
      <select
        id="rooms"
        bind:value={formData.numberOfRooms}
        class="select input-bordered w-full text-gray-600 bg-gray-100 border-blue-200 focus:border-green-700"
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
      class="btn w-full bg-almaris-blue text-white border-0 transition-all duration-300 mt-6 py-3 text-lg font-semibold"
    >
      Book {room.name}
    </button>

    <!-- Contact Info -->
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
