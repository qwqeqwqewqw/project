<script>
  const topRow = [
    {
      src: "Activities/Pool.jpg",
      width: "w-[22vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "Activities/froggy.jpg",
      width: "w-[12vw]",
      height: "h-[20vw] sm:h-[18vw] md:h-[16vw]",
    },
    {
      src: "Activities/sindhadurg-fort2.jpg",
      width: "w-[18vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "Activities/archery.jpg",
      width: "w-[8vw]",
      height: "h-[14vw] sm:h-[12vw] md:h-[10vw]",
    },
  ];

  const bottomRow = [
    {
      src: "Activities/Indoor-games.jpg",
      width: "w-[10vw]",
      height: "h-[12vw] sm:h-[10vw] md:h-[12vw]",
    },
    {
      src: "Activities/commando.jpg",
      width: "w-[16vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "Activities/meditation.jpg",
      width: "w-[14vw]",
      height: "h-[22vw] sm:h-[20vw] md:h-[18vw]",
    },
    {
      src: "Activities/kayaking.jpg",
      width: "w-[18vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
  ];

  // For mobile single-column
  const allImages = [...topRow, ...bottomRow];
</script>

<!-- Desktop Layout (show on sm and up) -->
<section class="hidden sm:block bg-light-blue text-black pt-10 pb-15 px-4">
  <div class="text-center mb-5">
    <h2 class="font-wasted text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
      Activity Highlights
    </h2>
    <p class="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto">
      Discover a variety of exciting activities for all ages at our resort.
    </p>
  </div>

  <div class="grid grid-rows-2 justify-center gap-4 max-w-[60vw] mx-auto">
    <!-- Top Row -->
    <div class="flex justify-center gap-4 pl-20">
      {#each topRow as tile}
        <img
          src={tile.src}
          alt=""
          class={`rounded-lg object-cover flex-shrink-0 self-end ${tile.width} ${tile.height}`}
        />
      {/each}
    </div>

    <!-- Bottom Row -->
    <div class="flex justify-center gap-4 pr-30">
      {#each bottomRow as tile}
        <img
          src={tile.src}
          alt=""
          class={`rounded-lg object-cover flex-shrink-0 self-start ${tile.width} ${tile.height}`}
        />
      {/each}
    </div>
  </div>
</section>

<!-- Mobile Layout (show below sm) -->
<section class="block sm:hidden bg-light-blue text-gray-700 py-10 px-4">
  <div class="text-center mb-8">
    <h2 class="font-wasted text-3xl text-gray-900 mb-2">Our Rooms & Suites</h2>
    <p class="text-base text-gray-900 max-w-full mx-auto">
      Discover comfort and luxury in every carefully designed space
    </p>
  </div>

  <div class="flex flex-col gap-4 max-w-full mx-auto">
    {#each allImages as tile}
      <img
        src={tile.src}
        alt=""
        class="w-full h-[45vw] rounded-lg object-cover"
      />
    {/each}
  </div>
</section>
