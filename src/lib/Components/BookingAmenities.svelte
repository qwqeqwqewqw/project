<script>
  import { onMount } from "svelte";
  import { callServerApi } from "../../services/DataService";

  // props
  let { room, selectedPlan } = $props();

  // state
  let additionalAmenities = room?.additionalAmenities || [];
  let roomInv = $state([]); // reactive
  let loading = $state(true);
  let fetchError = $state(null);

  // fetch inventory
  onMount(async () => {
    loading = true;
    fetchError = null;
    try {
      const data = await callServerApi("getInvVillas", {}, {});
      roomInv = data?.data ?? [];
    } catch (err) {
      console.error("Failed to fetch roomInv:", err);
      fetchError = err;
    } finally {
      loading = false;
    }
  });

  let curr_room = $derived.by(() => {
    if (!selectedPlan?.room_type || !roomInv?.length) return null;

    if (room.villa_type.includes("Bungalow")) {
      const match = selectedPlan.room_type.match(/\d+\s*BHK/i);
      if (!match) return null;

      const bhk = match[0].replace(/\s+/g, "").toUpperCase(); // "3BHK"
      return (
        roomInv.find((r) => r.villa_type?.toUpperCase().includes(bhk)) || null
      );
    } else {
      return (
        roomInv.find((r) => r.villa_type?.includes(room.villa_type)) || null
      );
    }
  });

  //
  // $effect(() => {
  //   console.log("curr_room updated:", curr_room);
  // });
</script>

{#if loading}
  <p class="text-black">Loading room amenities...</p>
{:else if fetchError}
  <p class="text-red-600">Failed to load amenities. Check console.</p>
{:else}
  <div class="bg-white rounded-2xl p-6 shadow-lg">
    {#if curr_room}
      <h3 class="text-2xl font-bold text-gray-900 mb-2">
        Room Amenities for {curr_room.villa_type}
      </h3>

      <p class="text-gray-600 mb-6">
        Enjoy premium amenities designed for your comfort and convenience during
        your stay at Cherilyn Monta Resort.
      </p>

      <!-- Premium Amenities -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-3">
          Premium Amenities
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each curr_room.amenities ?? [] as amenity}
            <div class="flex items-center space-x-2">
              <span class="text-gray-900">{amenity.title ?? amenity}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Room specs -->
      <div>
        <h4 class="text-lg font-semibold text-gray-900 mb-3">Room specs</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each curr_room.specifications ?? [] as specs}
            <div
              class="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <span class="text-2xl text-black"
                >{specs.spec_value} {specs.spec_name}</span
              >
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <!-- No matching curr_room found: show fallback or message -->
      <h3 class="text-2xl font-bold text-gray-900 mb-2">Room Amenities</h3>
      <p class="text-gray-600 mb-4">
        No exact match found for the selected plan (showing room-level amenities
        instead).
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-3">
          Premium Amenities
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each room?.amenities ?? [] as amenity}
            <div class="flex items-center space-x-2">
              <span class="text-gray-900">{amenity}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
{/if}
