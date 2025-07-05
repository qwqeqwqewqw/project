<script>
  let { rooms } = $props();
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-16 lg:space-y-24">
      {#each rooms as room, index}
        <div
          class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center {index % 2 ===
          1
            ? 'lg:grid-flow-col-dense'
            : ''}"
        >
          <!-- Image -->
          <div class="relative {index % 2 === 1 ? 'lg:col-start-2' : ''}">
            <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={room.image}
                alt={room.name}
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6 {index % 2 === 1 ? 'lg:col-start-1' : ''}">
            <div>
              <h2
                class="font-wasted text-3xl sm:text-4xl lg:text-5xl text-midnight mb-4"
              >
                {room.name}
              </h2>
              <p class="text-lg sm:text-xl text-midnight leading-relaxed mb-6">
                {room.description}
              </p>
            </div>

            <!-- Room Details -->
            <div class="grid sm:grid-cols-2 gap-4 mb-6">
              <div class="bg-cloudWhite p-4 rounded-lg text-center">
                <div
                  class="text-2xl sm:text-3xl font-bold text-forestGreen mb-1"
                >
                  {room.capacity}
                </div>
                <div class="text-sm text-midnight">Capacity</div>
              </div>
              <div class="bg-cloudWhite p-4 rounded-lg text-center">
                <div
                  class="text-2xl sm:text-3xl font-bold text-forestGreen mb-1"
                >
                  {room.price}
                </div>
                <div class="text-sm text-midnight">Per Person, Per Night</div>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-midnight mb-3">
                Key Features
              </h3>
              <div class="grid sm:grid-cols-2 gap-2">
                {#each room.features as feature}
                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5 text-forestGreen flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-midnight">{feature}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Amenities -->
            <div class="mb-4">
              <h3 class="text-xl font-semibold text-midnight mb-3">
                Amenities
              </h3>
              <div class="flex flex-wrap gap-2">
                {#each room.amenities as amenity}
                  <span
                    class="bg-sageGreen/20 text-forestGreen px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                {/each}
              </div>
            </div>

            <!-- Book Now Button -->
            <div class="pt-4">
              <a href={`/book/${room.id}`} class="inline-block">
                <button
                  class="btn bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
                >
                  Book {room.name}
                </button>
              </a>
            </div>

            {#if room.name.includes("Bungalow (2/3/4 BHK)")}
              <p class="text-sm text-red-600 font-medium">
                * Pools are only part of specific plans.
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
