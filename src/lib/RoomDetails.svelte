<script>
  import { IconStar, IconMapPin, IconShare, IconPhone, IconBed, IconBath, IconMaximize, IconUsers } from '@tabler/icons-svelte';
  
  let { room, rating, reviewCount, address, onCallRoom } = $props();
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center space-x-4">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
        {room.name}
      </h2>
      <span
        class="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium"
      >
        Premium Room
      </span>
    </div>
    <button
      class="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors"
    >
      <IconShare class="w-5 h-5" />
      <span>Share</span>
    </button>
  </div>

  <!-- Rating and Address -->
  <div class="flex items-center space-x-4 mb-4">
    <div class="flex items-center space-x-2">
      <IconStar class="w-5 h-5 text-yellow-400" fill="currentColor" />
      <span class="font-semibold text-gray-900">{rating}</span>
      <span class="text-gray-600">({reviewCount} Reviews)</span>
    </div>
  </div>

  <div class="flex items-center space-x-2 mb-6">
    <IconMapPin class="w-5 h-5 text-green-700" />
    <span class="text-gray-600">{address}</span>
  </div>

  <!-- Price and Contact -->
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-baseline space-x-2">
      <span class="text-3xl font-bold text-gray-900">{room.price}</span>
      <span class="text-gray-600">/ night</span>
    </div>
    <button
      onclick={onCallRoom}
      class="flex items-center space-x-2 -mr-3 sm:mr-0 lg:mr-0 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
    >
      <IconPhone class="w-4 h-4" />
      <span class="text-sm lg:text-lg">{room.phone}</span>
    </button>
  </div>

  <!-- Room Specs -->
  <div class="grid grid-cols-4 gap-4 pt-6 border-t border-blue-200">
    <div class="flex items-center space-x-2">
      <IconBed class="w-5 h-5 text-green-700" />
      <span class="text-gray-900"
        >{room.beds} Bed{room.beds > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <IconBath class="w-5 h-5 text-green-700" />
      <span class="text-gray-900"
        >{room.baths} Bath{room.baths > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <IconMaximize class="w-5 h-5 text-green-700" />
      <span class="text-gray-900">{room.size}</span>
    </div>
    <div class="flex items-center space-x-2">
      <IconUsers class="w-5 h-5 text-green-700" />
      <span class="text-gray-900"
        >{room.guests} Guest{room.guests > 1 ? "s" : ""}</span
      >
    </div>
  </div>
</div>