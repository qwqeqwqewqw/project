<script>
  import { onMount } from "svelte";
  let currentIndex = 0;

  const imageUrl =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";

  const hotelRooms = [
    { id: 1, name: "Deluxe Suite", price: "$199/night", image: imageUrl },
    { id: 2, name: "Ocean View", price: "$249/night", image: imageUrl },
    { id: 3, name: "Mountain Lodge", price: "$179/night", image: imageUrl },
    { id: 4, name: "City Lights", price: "$209/night", image: imageUrl },
    { id: 5, name: "Garden View", price: "$189/night", image: imageUrl },
    { id: 6, name: "Penthouse", price: "$299/night", image: imageUrl },
  ];

  const visibleCount = 3;
  let interval;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % (hotelRooms.length - visibleCount + 1);
  }

  onMount(() => {
    interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  $: offset = `-${(currentIndex * 100) / hotelRooms.length}%`;
  $: wrapperWidth = `${(100 * hotelRooms.length) / visibleCount}%`;
  $: cardBasis = `${100 / hotelRooms.length}%`;
</script>

<!-- Carousel Container -->
<div class="w-full overflow-hidden px-3 py-15 bg-cloudWhite">
  <!-- Sliding Row -->
  <div
    class="flex transition-transform duration-700 ease-in-out"
    style="width: {wrapperWidth}; transform: translateX({offset});"
  >
    {#each hotelRooms as room}
      <div class="flex-none px-2" style="flex-basis: {cardBasis};">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            class="w-full h-48 object-cover"
          />
          <div class="p-4 flex justify-between items-center">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">{room.name}</h3>
              <p class="text-sm text-gray-600">{room.price}</p>
            </div>
            <div>
              <a
                href={`/room/${room.id}`}
                class="text-sm font-semibold text-midnight"
              >
                <button
                  class="btn bg-sageGreen text-white border-0 hover:bg-forestGreen transition-all duration-300 hover:scale-110"
                >
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
