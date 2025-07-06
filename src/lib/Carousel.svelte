<script>
  import { onMount } from "svelte";

  let currentIndex = 0;
  let interval;

  const hotelRooms = [
    {
      id: 1,
      name: "Studio",
      image: "/studio/studio2.png",
      guests: 2,
      size: "25 Feet",
    },
    {
      id: 2,
      name: "Deluxe Suite",
      image: "/delux/delux2.png",
      guests: 2,
      size: "30 Feet",
    },
    {
      id: 3,
      name: "Super Deluxe Suite",
      image: "/superdelux/superdelux2.png",
      guests: 3,
      size: "35 Feet",
    },
    {
      id: 4,
      name: "Bungalow",
      image: "/bunglow/bunglow2.png",
      guests: 4,
      size: "40 Feet",
    },
  ];

  onMount(() => {
    // Only rotate if mobile
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % hotelRooms.length;
      }, 4000);
    }

    return () => {
      clearInterval(interval);
    };
  });
</script>

<section class="py-16 sm:py-20 lg:py-12 bg-blue-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12 sm:mb-16">
      <h2
        class="font-wasted text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 mb-4"
      >
        Our Rooms & Suites
      </h2>
      <p
        class="text-base sm:text-lg lg:text-lg text-gray-900 max-w-2xl mx-auto"
      >
        Discover comfort and luxury in every carefully designed space
      </p>
    </div>

    <!-- Mobile: Auto-rotating one card at a time -->
    <div class="sm:hidden overflow-hidden">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        style="transform: translateX(-{currentIndex * 100}%)"
      >
        {#each hotelRooms as room}
          <div class="w-full flex-shrink-0 px-2">
            <div class="bg-transparent rounded-2xl">
              <img
                src={room.image}
                alt={room.name}
                class="w-full h-60 object-cover rounded-2xl"
              />
              <div
                class="grid grid-cols-10 space-x-1 bg-transparent p-4 text-center"
              >
                <div class="col-span-6">
                  <h3 class="text-lg font-semibold text-gray-900">
                    {room.name}
                  </h3>
                  <p class="text-sm text-gray-600 mt-1">
                    {room.guests} Guests · {room.size} Size
                  </p>
                </div>
                <div class="col-span-1"></div>
                <a href={`/book/${room.id}`} class="col-span-3">
                  <button
                    class="btn bg-cyan-500 border-0 mt-1 px-3 shadow-none text-md"
                    >Book Now</button
                  >
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Desktop: Grid layout -->
    <div
      class="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-6"
    >
      {#each hotelRooms as room}
        <div class="bg-transparent rounded-2xl text-center">
          <div class="relative group aspect-[10/9] rounded-2xl overflow-hidden">
            <!-- Image -->
            <img
              src={room.image}
              alt={room.name}
              class="w-full h-full object-cover"
            />

            <!-- Fade-in Overlay -->
            <div
              class="absolute inset-0 bg-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            >
              <!-- Moving Button -->
              <a
                href={`/book/${room.id}`}
                class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700"
              >
                <div class="bg-transparent text-white font-semibold px-5 py-2">
                  Book Now
                </div>
              </a>
            </div>
          </div>

          <!-- Text Below the Image -->
          <div class="bg-transparent p-4">
            <h3 class="text-lg font-semibold text-gray-900">{room.name}</h3>
            <p class="text-sm text-gray-600 mt-1">
              {room.guests} Guests · {room.size} Size
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>