<script>
  let { room, onBookClick, onViewPictures } = $props();
  console.log(room);
</script>

<section class="relative h-screen bg-gray-900 overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img
      src={room.images[0]}
      alt={room.name}
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  <!-- Content Overlay -->
  <div class="relative z-10 flex items-center justify-center h-full">
    <div class="text-center text-white max-w-4xl px-6">
      <h1 class="font-wasted text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {room.name}
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
        {room.subtitle}
      </p>

      <div class="grid grid-rows-2">
        <button
          onclick={onBookClick}
          class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-lg mb-4"
        >
          BOOK ROOM
        </button>

        <button
          onclick={onViewPictures}
          class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-lg mb-4"
        >
          VIEW PICTURES{#if room.name.includes("Bungalow")}
            &nbsp 2 BHK{/if}
        </button>
        {#if room.name.includes("Bungalow")}
          <button
            onclick={onViewPictures}
            class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-lg mb-4"
          >
            VIEW PICTURES 3 BHK
          </button>
          <button
            onclick={onViewPictures}
            class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-lg mb-4"
          >
            VIEW PICTURES 4 BHK
          </button>
        {/if}
      </div>
    </div>
  </div>
</section>
