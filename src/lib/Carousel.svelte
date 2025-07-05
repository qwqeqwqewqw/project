<script>
  import { onMount } from "svelte";
  let currentIndex = 0;

  const hotelRooms = [
    { id: 1, name: "Studio", image: "/studio/studio2.png" },
    { id: 2, name: "Deluxe Suite", image: "/delux/delux2.png" },
    { id: 3, name: "Super Deluxe Suite", image: "/superdelux/superdelux2.png" },
    { id: 4, name: "Bunglow", image: "/bunglow/bunglow2.png" },
  ];

  let visibleCount = 3;
  let interval;
  let transitioning = false;

  function updateVisibleCount() {
    if (window.innerWidth < 640) {
      visibleCount = 1;
    } else if (window.innerWidth < 1024) {
      visibleCount = 2;
    } else {
      visibleCount = 3;
    }
  }

  // Duplicate last visibleCount slides at the start and first visibleCount at the end
  $: slides = [
    ...hotelRooms.slice(-visibleCount),
    ...hotelRooms,
    ...hotelRooms.slice(0, visibleCount),
  ];

  // Start at the first real slide
  $: startIndex = visibleCount;
  $: endIndex = hotelRooms.length + visibleCount - 1;

  function nextSlide() {
    if (transitioning) return;
    transitioning = true;
    currentIndex += 1;
  }

  function handleTransitionEnd(event) {
    const row = event.currentTarget;
    // Loop back to real start after reaching cloned end
    if (currentIndex > endIndex) {
      row.style.transition = "none";
      currentIndex = startIndex;
      row.style.transform = `translateX(-${(currentIndex * 100) / slides.length}%)`;
      // Force reflow and restore transition
      row.offsetHeight;
      row.style.transition = "transform 700ms ease-in-out";
    }
    transitioning = false;
  }

  onMount(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    currentIndex = visibleCount;
    interval = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateVisibleCount);
    };
  });

  $: wrapperWidth = `${(100 * slides.length) / visibleCount}%`;
  $: cardBasis = `${100 / slides.length}%`;
  $: offset = `-${(currentIndex * 100) / slides.length}%`;
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-skyBlue">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12 sm:mb-16">
      <h2
        class="font-wasted text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-midnight mb-4"
      >
        Our Rooms & Suites
      </h2>
      <p
        class="text-base sm:text-lg lg:text-xl text-midnight max-w-2xl mx-auto"
      >
        Discover comfort and luxury in every carefully designed space
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="overflow-hidden rounded-2xl">
      <!-- Sliding Row -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        style="width: {wrapperWidth}; transform: translateX({offset});"
        on:transitionend={handleTransitionEnd}
      >
        {#each slides as room}
          <div class="flex-none px-2 sm:px-3" style="flex-basis: {cardBasis}; ">
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:border-b-monta hover:border-b-3"
            >
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="p-4 sm:p-6">
                <div
                  class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4"
                >
                  <div>
                    <h3
                      class="text-lg sm:text-xl font-semibold text-midnight mb-1"
                    >
                      {room.name}
                    </h3>
                  </div>
                  <a href={`/book/${room.id}`} class="w-full sm:w-auto">
                    <button
                      class="btn bg-nautical-navy text-white border-0 transition-all duration-300 hover:scale-105 w-full sm:w-auto px-4 sm:px-6 py-2"
                    >
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
  </div>
</section>
