<script>
  import { onMount } from "svelte";
  let currentIndex = 0;

  const imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";

  const hotelRooms = [
    { id: 1, name: "Deluxe Suite", price: "$199/night", image: imageUrl },
    { id: 2, name: "Ocean View", price: "$249/night", image: imageUrl },
    { id: 3, name: "Mountain Lodge", price: "$179/night", image: imageUrl },
    { id: 4, name: "City Lights", price: "$209/night", image: imageUrl },
    { id: 5, name: "Garden View", price: "$189/night", image: imageUrl },
    { id: 6, name: "Penthouse", price: "$299/night", image: imageUrl },
  ];

  let visibleCount = 3;
  let interval;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % (hotelRooms.length - visibleCount + 1);
  }

  function updateVisibleCount() {
    if (window.innerWidth < 640) {
      visibleCount = 1;
    } else if (window.innerWidth < 1024) {
      visibleCount = 2;
    } else {
      visibleCount = 3;
    }
  }

  onMount(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    interval = setInterval(nextSlide, 4000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateVisibleCount);
    };
  });

  $: offset = `-${(currentIndex * 100) / hotelRooms.length}%`;
  $: wrapperWidth = `${(100 * hotelRooms.length) / visibleCount}%`;
  $: cardBasis = `${100 / hotelRooms.length}%`;
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-skyBlue">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="new-icon-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-midnight mb-4">
        Our Rooms & Suites
      </h2>
      <p class="text-base sm:text-lg lg:text-xl text-midnight max-w-2xl mx-auto">
        Discover comfort and luxury in every carefully designed space
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="overflow-hidden rounded-2xl">
      <!-- Sliding Row -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        style="width: {wrapperWidth}; transform: translateX({offset});"
      >
        {#each hotelRooms as room}
          <div class="flex-none px-2 sm:px-3" style="flex-basis: {cardBasis};">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
                  <div>
                    <h3 class="text-lg sm:text-xl font-semibold text-midnight mb-1">{room.name}</h3>
                    <p class="text-sm sm:text-base text-stormCloud">{room.price}</p>
                  </div>
                  <a href={`/room/${room.id}`} class="w-full sm:w-auto">
                    <button class="btn bg-sageGreen text-white border-0 hover:bg-forestGreen transition-all duration-300 hover:scale-105 w-full sm:w-auto px-4 sm:px-6 py-2">
                      <span class="text-sm sm:text-base">Book Now</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Carousel Indicators -->
    <div class="flex justify-center mt-8 space-x-2">
      {#each Array(hotelRooms.length - visibleCount + 1) as _, index}
        <button
          class="w-3 h-3 rounded-full transition-colors duration-300 {currentIndex === index ? 'bg-forestGreen' : 'bg-forestGreen/30'}"
          on:click={() => currentIndex = index}
          aria-label="Go to slide {index + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>