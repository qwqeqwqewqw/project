<script>
  import { IconCheck } from "@tabler/icons-svelte";

  let { room, selectedPlan, roomInv } = $props();
  let additionalAmenities = room.additionalAmenities;
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-gray-900 mb-2">Room Amenities</h3>
  <p class="text-gray-600 mb-6">
    Enjoy premium amenities designed for your comfort and convenience during
    your stay at Cherilyn Monta Resort.
  </p>

  <!-- Premium Amenities from room data -->
  <div class="mb-6">
    <h4 class="text-lg font-semibold text-gray-900 mb-3">Premium Amenities</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {#each room.amenities as amenity}
        <div class="flex items-center space-x-2">
          <IconCheck class="w-4 h-4 text-almaris-gold flex-shrink-0" />
          <span class="text-gray-900">{amenity}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Additional Amenities -->
  <div>
    <h4 class="text-lg font-semibold text-gray-900 mb-3">
      Additional Amenities
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each additionalAmenities as amenity}
        <div
          class="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
        >
          <span class="text-2xl">{@html amenity.icon}</span>
          <span class="text-gray-900">{amenity.name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
