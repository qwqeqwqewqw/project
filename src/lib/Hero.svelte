<script>
  let arrivalDate = $state('');
  let departureDate = $state('');
  let guests = $state(2);
</script>

<section class="relative min-h-screen bg-seashell-white pt-20">
  <div class="container mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <!-- Left Content -->
      <div class="space-y-8">
        <div class="space-y-6">
          <div class="script-font text-forestGreen text-3xl md:text-4xl">
            Memorable
          </div>
          
          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-midnight">
            Hotels for<br>
            moments 
            <span class="script-font text-sageGreen italic font-medium">Rich</span><br>
            in emotions
          </h1>
          
          <p class="text-lg text-midnight/80 max-w-md leading-relaxed">
            Book now and get the best prices
          </p>
        </div>

        <!-- Booking Form -->
        <div class="bg-cloudWhite p-8 rounded-2xl shadow-xl max-w-2xl border border-skyBlue/30">
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <!-- Arrival Date -->
            <div class="form-control">
              <label class="block text-sm font-medium text-midnight mb-2">
                Arrival date
              </label>
              <input 
                type="date" 
                bind:value={arrivalDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight"
                placeholder="06/04/2022"
              />
            </div>

            <!-- Departure Date -->
            <div class="form-control">
              <label class="block text-sm font-medium text-midnight mb-2">
                Departure date
              </label>
              <input 
                type="date" 
                bind:value={departureDate}
                class="input input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight"
                placeholder="06/04/2022"
              />
            </div>

            <!-- Number of People -->
            <div class="form-control">
              <label class="block text-sm font-medium text-midnight mb-2">
                Number of people
              </label>
              <select bind:value={guests} class="select input-bordered w-full px-4 py-3 rounded-lg bg-cloudWhite text-midnight">
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
          </div>

          <button class="btn btn-primary w-full font-semibold py-4 rounded-lg text-lg">
            BOOK A STAY
          </button>
        </div>
      </div>

      <!-- Right Content - Hotel Image -->
      <div class="relative">
        <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Luxury hotel room with modern design" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>