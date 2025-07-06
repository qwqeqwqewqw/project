<script>
  const topRow = [
    {
      src: "https://picsum.photos/100/300?image=100",
      width: "w-[22vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "https://picsum.photos/140/300?image=300",
      width: "w-[12vw]",
      height: "h-[20vw] sm:h-[18vw] md:h-[16vw]",
    },
    {
      src: "https://picsum.photos/220/300?image=200",
      width: "w-[18vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "https://picsum.photos/270/300?image=350",
      width: "w-[8vw]",
      height: "h-[14vw] sm:h-[12vw] md:h-[10vw]",
    },
  ];

  const bottomRow = [
    {
      src: "https://picsum.photos/120/260?image=400",
      width: "w-[10vw]",
      height: "h-[12vw] sm:h-[10vw] md:h-[9vw]",
    },
    {
      src: "https://picsum.photos/190/260?image=500",
      width: "w-[16vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
    {
      src: "https://picsum.photos/170/260?image=600",
      width: "w-[14vw]",
      height: "h-[22vw] sm:h-[20vw] md:h-[18vw]",
    },
    {
      src: "https://picsum.photos/220/260?image=700",
      width: "w-[18vw]",
      height: "h-[18vw] sm:h-[16vw] md:h-[14vw]",
    },
  ];

  // For mobile single-column
  const allImages = [...topRow, ...bottomRow];
</script>

<!-- Desktop Layout (show on sm and up) -->
<section class="hidden sm:block bg-gray-200 text-gray-700 pt-10 pb-15 px-4">
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
<section class="block sm:hidden bg-gray-200 text-gray-700 py-16 px-4">
  <div class="text-center mb-8">
    <h2 class="font-wasted text-2xl text-gray-900 mb-2">Our Rooms & Suites</h2>
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