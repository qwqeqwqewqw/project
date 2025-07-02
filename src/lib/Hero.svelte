<script lang="ts">
  let arrivalDate = $state("");
  let departureDate = $state("");
  let guests = $state(2);
</script>

<section class="relative min-h-screen bg-seashellWhite">
  <div class="flex flex-col lg:flex-row min-h-screen">
    <!-- Left Side -->
    <div class="w-full lg:w-1/2 flex items-center px-6 py-20">
      <div class="space-y-8 w-full">
        <!-- Headings -->
        <div class="space-y-6">
          <div class="script-font text-forestGreen text-3xl md:text-4xl">
            Memorable
          </div>
          <h1
            class="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-midnight"
          >
            Hotels for<br />
            moments
            <span class="script-font text-forestGreen italic font-medium"
              >Rich</span
            ><br />
            in emotions
          </h1>
          <p class="text-lg text-midnight max-w-md leading-relaxed">
            Book now and get the best prices
          </p>
        </div>

        <!-- Booking Form -->
        <div class="bg-white p-8 rounded-2xl shadow-xl max-w-2xl">
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <div class="form-control">
              <label class="label" for="guests-arrival">
                <span class="label-text font-medium text-forestGreen"
                  >Arrival date</span
                >
              </label>
              <input
                id="guests-arrival"
                type="date"
                bind:value={arrivalDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight"
                placeholder="06/04/2022"
              />
            </div>

            <div class="form-control">
              <label class="label" for="guests-departure">
                <span class="label-text font-medium text-forestGreen"
                  >Departure date</span
                >
              </label>
              <input
                id="guests-departure"
                type="date"
                bind:value={departureDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight"
                placeholder="06/04/2022"
              />
            </div>

            <div class="form-control">
              <label class="label" for="guests-select">
                <span class="label-text font-medium text-forestGreen"
                  >Number of people</span
                >
              </label>
              <select
                id="guests-select"
                bind:value={guests}
                class="select input-bordered w-full rounded-lg bg-cloudWhite text-midnight"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
          </div>

          <button
            class="btn btn-primary w-full text-white font-semibold py-4 h-auto"
          >
            BOOK A STAY
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side - Image -->
    <div class="w-full lg:w-1/2 h-[500px] lg:h-auto">
      <img
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Luxury hotel room"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>
