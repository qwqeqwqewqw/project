<script lang="ts">
  let arrivalDate = $state("");
  let departureDate = $state("");
  let guests = $state(2);
</script>

<section class="relative min-h-screen bg-yellow-50 overflow-hidden">
  <!-- Desktop Layout: Content and Form stacked, Image on right -->
  <div class="hidden lg:flex items-stretch min-h-screen">
    <!-- Left: Content and Booking Form -->
    <div class="flex-1 flex flex-col justify-center px-8 xl:px-16 py-24">
      <div class="space-y-6 mb-12 max-w-4xl xl:pl-0">
        <div class="font-cursive1 text-blue-800  xl:text-6xl">
          Cherilyn Monta Resort
        </div>
        <h1
          class="font-wasted font-light text-5xl xl:text-6xl xl:max-w-[95%] leading-tight text-gray-900"
        >
          Where Luxury <br />Meets Nature in the<br />
        </h1>
        <span
          class="font-cursive1 text-green-800 block text-5xl xl:text-5xl -mt-4"
        >
          Heart of Konkan.
        </span>
        <p class="text-xl xl:text-xl text-gray-900 leading-relaxed max-w-2xl">
          Slow Down. Breathe Deep. Live Cherilyn.
        </p>
      </div>
    </div>

    <!-- Right: Image -->
    <div class="w-1/2 relative">
      <img
        src="/gate.png"
        alt="Luxury hotel room"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </div>
  </div>

  <!-- Desktop Booking Form - 80% width, positioned to the left -->
  <div
    class="hidden lg:block absolute bottom-16 left-16 z-10"
    style="width: 70vw;"
  >
    <div class="bg-white p-9 rounded-2xl shadow-xl">
      <div class="grid grid-cols-8 gap-4">
        <!-- Arrival Date -->
        <div class="form-control col-span-2">
          <label class="label" for="arrival-desktop">
            <span class="label-text font-medium text-green-700 text-md"
              >Arrival date</span
            >
          </label>
          <input
            id="arrival-desktop"
            type="date"
            bind:value={arrivalDate}
            class="input w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-md"
          />
        </div>

        <!-- Divider + Departure Date -->
        <div
          class="form-control col-span-2 border-l border-gray-400 pl-4 ml-2"
        >
          <label class="label" for="departure-desktop">
            <span class="label-text font-medium text-green-700 text-md"
              >Departure date</span
            >
          </label>
          <input
            id="departure-desktop"
            type="date"
            bind:value={departureDate}
            class="input w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-md"
          />
        </div>

        <!-- Divider + Guests -->
        <div
          class="form-control col-span-2 border-l border-gray-400 pl-4 ml-2"
        >
          <label class="label" for="guests-desktop">
            <span class="label-text font-medium text-green-700 text-md"
              >Number of people</span
            >
          </label>
          <select
            id="guests-desktop"
            bind:value={guests}
            class="select w-full rounded-lg bg-white text-gray-900 text-md"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5+ Guests</option>
          </select>
        </div>

        <!-- Divider + Button -->
        <div
          class="flex items-end col-span-2 border-l border-gray-400 pl-4 ml-2"
        >
          <button
            class="btn btn-primary text-white font-semibold h-auto py-3 w-full mb-2"
          >
            <span class="text-md">BOOK A STAY</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-t-2 border-black/20" />

  <!-- Mobile & Tablet Layout: Text → Booking Form → Image -->
  <div class="lg:hidden">
    <!-- Text Content Section -->
    <div class="px-4 py-10 pt-30">
      <div class="space-y-6 text-center max-w-4xl mx-auto">
        <div class="font-cursive1 text-blue-800 text-3xl sm:text-4xl md:text-5xl">
          Cherilyn Monta Resort
        </div>
        <h1
          class="font-wasted font-light text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900"
        >
          Where Luxury <br />Meets Nature in the<br />
        </h1>
        <span
          class="font-cursive1 text-green-800 block text-3xl sm:text-4xl md:text-5xl -mt-2"
        >
          Heart of Konkan.
        </span>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed">
          Slow Down. Breathe Deep. Live Cherilyn.
        </p>
      </div>
    </div>

    <!-- Mobile/Tablet Booking Form -->
    <div class="px-4 sm:px-6 md:px-8 py-8">
      <div
        class="bg-white/95 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
      >
        <div class="space-y-6">
          <div class="form-control">
            <label class="label" for="arrival-mobile">
              <span class="label-text font-medium text-green-700 text-lg"
                >Arrival date</span
              >
            </label>
            <input
              id="arrival-mobile"
              type="date"
              bind:value={arrivalDate}
              class="input input-bordered w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-base"
            />
          </div>
          <div class="form-control">
            <label class="label" for="departure-mobile">
              <span class="label-text font-medium text-green-700 text-lg"
                >Departure date</span
              >
            </label>
            <input
              id="departure-mobile"
              type="date"
              bind:value={departureDate}
              class="input input-bordered w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-base"
            />
          </div>
          <div class="form-control">
            <label class="label" for="guests-mobile">
              <span class="label-text font-medium text-green-700 text-lg"
                >Number of people</span
              >
            </label>
            <select
              id="guests-mobile"
              bind:value={guests}
              class="select input-bordered w-full rounded-lg bg-white text-gray-900 text-base"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>5+ Guests</option>
            </select>
          </div>
          <button
            class="btn btn-primary w-full text-white font-semibold py-4 h-auto"
          >
            <span class="text-lg">BOOK A STAY</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="relative h-64 sm:h-80 md:h-96">
      <img
        src="/gate.png"
        alt="Luxury hotel room"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/20"></div>
    </div>
  </div>
</section>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>