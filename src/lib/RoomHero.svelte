<script>
  let { room, onBookClick } = $props();
</script>

<section class="relative h-screen bg-midnight overflow-hidden">
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
      <h1
        class="new-icon-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
      >
        {room.name}
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
        {room.subtitle}
      </p>
      <button
        onclick={onBookClick}
        class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-midnight transition-all duration-300 px-8 py-3 text-lg"
      >
        BOOK ROOM
      </button>
    </div>
  </div>
</section>