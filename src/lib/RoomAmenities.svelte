<script>
  let { room, additionalAmenities } = $props();
</script>

<div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-midnight mb-4">Room Amenities</h3>
  <p class="text-stormCloud mb-6">
    Enjoy premium amenities designed for your comfort and convenience during
    your stay at Cherilyn Monta Resort.
  </p>

  <!-- Premium Amenities from room data -->
  <div class="mb-6">
    <h4 class="text-lg font-semibold text-midnight mb-3">Premium Amenities</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {#each room.amenities as amenity}
        <div class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-forestGreen flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-midnight">{amenity}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Additional Amenities -->
  <div>
    <h4 class="text-lg font-semibold text-midnight mb-3">Additional Amenities</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each additionalAmenities as amenity}
        <div
          class="flex items-center space-x-3 p-3 rounded-lg hover:bg-freshCream transition-colors"
        >
          <span class="text-2xl">{amenity.icon}</span>
          <span class="text-midnight">{amenity.name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>