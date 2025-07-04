<script>
  let { room, rating, reviewCount, address, onCallRoom } = $props();
</script>

<div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center space-x-4">
      <h2 class="text-2xl sm:text-3xl font-bold text-midnight">
        {room.name}
      </h2>
      <span
        class="bg-forestGreen text-white px-3 py-1 rounded-full text-sm font-medium"
      >
        Premium Room
      </span>
    </div>
    <button
      class="flex items-center space-x-2 text-forestGreen hover:text-sageGreen transition-colors"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
        />
      </svg>
      <span>Share</span>
    </button>
  </div>

  <!-- Rating and Address -->
  <div class="flex items-center space-x-4 mb-4">
    <div class="flex items-center space-x-2">
      <svg
        class="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <span class="font-semibold text-midnight">{rating}</span>
      <span class="text-stormCloud">({reviewCount} Reviews)</span>
    </div>
  </div>

  <div class="flex items-center space-x-2 mb-6">
    <svg
      class="w-5 h-5 text-forestGreen"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <span class="text-stormCloud">{address}</span>
  </div>

  <!-- Price and Contact -->
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-baseline space-x-2">
      <span class="text-3xl font-bold text-midnight">{room.price}</span>
      <span class="text-stormCloud">/ night</span>
    </div>
    <button
      onclick={onCallRoom}
      class="flex items-center space-x-2 -mr-3 sm:mr-0 lg:mr-0 bg-forestGreen text-white px-4 py-2 rounded-lg hover:bg-sageGreen transition-colors"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span class="text-sm lg:text-lg">{room.phone}</span>
    </button>
  </div>

  <!-- Room Specs -->
  <div class="grid grid-cols-4 gap-4 pt-6 border-t border-skyBlue/30">
    <div class="flex items-center space-x-2">
      <svg
        class="w-5 h-5 text-forestGreen"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
      </svg>
      <span class="text-midnight"
        >{room.beds} Bed{room.beds > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <svg
        class="w-5 h-5 text-forestGreen"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"
        />
      </svg>
      <span class="text-midnight"
        >{room.baths} Bath{room.baths > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <svg
        class="w-5 h-5 text-forestGreen"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
      <span class="text-midnight">{room.size}</span>
    </div>
    <div class="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-forestGreen"
        style="vertical-align: middle; fill: currentColor; overflow: hidden;"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M394 108.1c-130.9 0-237 106.1-237 237s106.1 237 237 237 237-106.1 237-237-106.1-237-237-237z m0 391.3c-85.2 0-154.3-69.1-154.3-154.3S308.8 190.8 394 190.8s154.3 69.1 154.3 154.3S479.2 499.4 394 499.4z"
        />
        <path
          d="M393.5 581c151.1 0 273.6 122.5 273.6 273.6H749c0-196.3-159.2-355.5-355.5-355.5S38 658.3 38 854.6h81.9c0-151.1 122.5-273.6 273.6-273.6z"
        />
        <path
          d="M38 855.4a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0z m629.2 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0z m-44.7-314.2a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0z m-20.3-392a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0z"
        />
        <path
          d="M989 854.6c0-143.7-85.3-267.5-208-323.6 54.8-43.4 90-110.6 90-185.9 0-127.8-101.2-232-227.9-236.8v81.8c81 4.7 145.2 72.9 145.2 155 0 78.8-56.1 146.7-132.3 156.1-5.6 0.7-12.9 7.4-12.9 13v60.6c0-20 3.1-0.6 7.2-0.3l5 7c143.3 8.7 251.8 127.6 251.8 273.1h0.1v0.8c0 22.6 18.3 40.9 40.9 40.9S989 878 989 855.4v-0.8z"
        />
      </svg>
      <span class="text-midnight"
        >{room.guests} Guest{room.guests > 1 ? "s" : ""}</span
      >
    </div>
  </div>
</div>