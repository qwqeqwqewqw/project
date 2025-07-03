<script lang="ts">
  let arrivalDate = $state("");
  let departureDate = $state("");
  let guests = $state(2);
</script>

<section
  class="relative min-h-screen bg-seashellWhite flex flex-col sm:-ml-15 lg:m-0 md:flex-row items-stretch overflow-hidden"
>
  <!-- Left: Text and Booking Form (on top for mobile/tablet, left for desktop) -->
  <div
    class="relative z-10 flex flex-col justify-center items-start w-full md:w-[70%] px-6 py-16"
  >
    <div
      class="space-y-6 text-left mb-8 w-full max-w-3xl self-start ml-0 md:ml-16"
    >
      <div
        class="font-cursive1 text-[#0a3a8a] text-4xl mt-6 mb-5 md:mt-0 md:text-6xl"
      >
        Cherilyn Monta Resort
      </div>
      <h1
        class="font-wasted font-light text-[2.7rem] lg:text-[5.5rem] leading-tight text-midnight drop-shadow-lg"
      >
        Where Luxury <br />Meets Nature in the<br />
      </h1>
      <span
        class="font-cursive1 text-forest-green -mt-6 block text-5xl lg:text-[5.5rem]"
      >
        Heart of Konkan.
      </span>
      <p
        class="text-lg md:text-2xl text-midnight max-w-full leading-relaxed drop-shadow"
      >
        Slow Down. Breathe Deep. Live Cherilyn.
      </p>
    </div>

    <!-- Booking Form -->
    <div
      class="bg-white/90 w-full max-w-sm lg:min-w-[70rem] p-6 lg:p-8 rounded-2xl shadow-xl mx-auto lg:ml-12 sm:ml-50"
    >
      <div class="grid lg:grid-cols-4 gap-6 mb-3">
        <!-- ...form fields... -->
        <div class="form-control">
          <label class="label" for="guests-arrival">
            <span class="label-text font-medium text-forestGreen text-[1.35rem]"
              >Arrival date</span
            >
          </label>
          <input
            id="guests-arrival"
            type="date"
            bind:value={arrivalDate}
            class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight text-lg"
            placeholder="06/04/2022"
          />
        </div>
        <div class="form-control">
          <label class="label" for="guests-departure">
            <span class="label-text font-medium text-forestGreen text-[1.35rem]"
              >Departure date</span
            >
          </label>
          <input
            id="guests-departure"
            type="date"
            bind:value={departureDate}
            class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight text-lg"
            placeholder="06/04/2022"
          />
        </div>
        <div class="form-control">
          <label class="label" for="guests-select">
            <span class="label-text font-medium text-forestGreen text-[1.35rem]"
              >Number of people</span
            >
          </label>
          <select
            id="guests-select"
            bind:value={guests}
            class="select input-bordered w-full rounded-lg bg-cloudWhite text-midnight text-lg"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5+ Guests</option>
          </select>
        </div>
        <button
          class="btn btn-primary w-full md:w-68 text-white font-semibold py-5 h-auto mt-2 px-4"
        >
          <span class="text-lg">BOOK A STAY</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Right: Image (below on mobile/tablet, right on desktop) -->
  <div class="w-full md:w-[60%] lg:w-[120%] h-72 md:h-auto relative">
    <img
      src="/gate.png"
      alt="Luxury hotel room"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/20"></div>
  </div>
</section>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>
