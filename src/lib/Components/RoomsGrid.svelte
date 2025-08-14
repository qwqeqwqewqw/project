<script>
  import { onMount } from "svelte";
  import { callServerApi } from "../../services/DataService";
  import { selectedVilla } from "../../stores/villaStore";
  import { get } from "svelte/store";

  let room3 = null;

  async function getRoomData() {
    const data = await callServerApi("getVillaInfo", {}, {});
    // console.log(data.data);
    room3 = data.data;
  }

  onMount(() => {
    getRoomData();
  });

  function bookVilla(villa) {
    selectedVilla.set(villa);
    // console.log("Selected villa:", get(selectedVilla));
    window.location.href = `/book`;
  }
</script>

{#if room3}
  <section class="py-15 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-14 lg:space-y-20">
        {#each Object.values(room3) as room, index}
          <div
            class="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center {index %
              2 ===
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
            <div class="space-y-5 {index % 2 === 1 ? 'lg:col-start-1' : ''}">
              <div>
                <h2
                  class="font-wasted text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-1"
                >
                  {room.name}
                </h2>
                <p
                  class="text-sm sm:text-base text-gray-900 leading-relaxed mb-4"
                >
                  {room.description}
                </p>
              </div>

              <!-- Room Details -->
              <div class="grid sm:grid-cols-2 gap-4 mb-5">
                <div class="bg-off-white p-4 rounded-lg text-center">
                  <div
                    class="text-lg sm:text-xl font-bold text-almaris-gold mb-1"
                  >
                    {room.capacity}
                  </div>
                  <div class="text-xs text-gray-900">Capacity</div>
                </div>
                <div class="bg-off-white p-4 rounded-lg text-center">
                  <div
                    class="text-lg sm:text-xl font-bold text-almaris-gold mb-1"
                  >
                    {room.price}
                  </div>
                  <div class="text-xs text-gray-900">Per Person, Per Night</div>
                </div>
              </div>

              <!-- Features -->
              <div class="mb-5">
                <h3 class="text-base font-semibold text-gray-900 mb-2">
                  Key Features
                </h3>
                <div class="grid sm:grid-cols-2 gap-2">
                  {#each room.features as feature}
                    <div class="flex items-center space-x-2">
                      <svg
                        class="w-4 h-4 text-almaris-gold flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-sm text-gray-900">{feature}</span>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Amenities -->
              <div class="mb-3">
                <h3 class="text-base font-semibold text-gray-900 mb-2">
                  Amenities
                </h3>
                <div class="flex flex-wrap gap-2">
                  {#each room.amenities as amenity}
                    <span
                      class="bg-off-white font-bold text-almaris-gold px-3 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  {/each}
                </div>
              </div>

              <!-- Book Now Button -->
              <div class="pt-3">
                <button
                  class="btn bg-almaris-blue text-white border-0 duration-300 hover:scale-105 px-5 py-2 text-sm"
                  on:click={() => bookVilla(room)}
                >
                  Book {room.name}
                </button>
              </div>

              {#if room.name.includes("Bungalow (2/3/4 BHK)")}
                <p class="text-xs text-red-600 font-medium mt-2">
                  * Pools are only part of specific plans.
                </p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{:else}
  <section class="py-15 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-gray-500 text-lg">Loading villa data...</p>
    </div>
  </section>
{/if}
