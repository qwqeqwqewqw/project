<script>
  import {
    IconBuilding,
    IconClipboard,
    IconMask,
    IconTrees,
    IconChefHat,
  } from "@tabler/icons-svelte";
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 sm:mb-16">
      <h2
        class="new-icon-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4"
      >
        Event Facilities
      </h2>
      <p
        class="text-base sm:text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto"
      >
        State-of-the-art facilities designed to make your event seamless and
        memorable
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      <!-- Event Hall -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconBuilding class="w-6 h-6 text-green-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Grand Event Hall
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>300 guest capacity</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Extends to green lawns</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Climate controlled</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Professional lighting</span>
          </li>
        </ul>
      </div>

      <!-- The Verdant Conference Room -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconClipboard class="w-6 h-6 text-green-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            The Verdant
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>100 participant capacity</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>A/V equipment included</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>High-speed Wi-Fi</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Natural lighting</span>
          </li>
        </ul>
      </div>

      <!-- Amphitheater -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconMask class="w-6 h-6 text-green-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Amphitheater
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>Outdoor venue</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Natural acoustics</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Cultural performances</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Scenic backdrop</span>
          </li>
        </ul>
      </div>

      <!-- Green Lawns -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconTrees class="w-6 h-6 text-green-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Green Lawns
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>Expansive outdoor space</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Perfect for ceremonies</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Garden party setup</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Natural ambiance</span>
          </li>
        </ul>
      </div>

      <!-- Catering Services -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconChefHat class="w-6 h-6 text-green-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Catering Services
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>Customizable menus</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Konkan specialties</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Multi-cuisine options</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Professional service</span>
          </li>
        </ul>
      </div>

      <!-- Event Planning -->
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Event Planning
          </h3>
        </div>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-center space-x-2">
            <span>Expert floral decorations</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>On-demand entertainment</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Photography services</span>
          </li>
          <li class="flex items-center space-x-2">
            <span>Complete coordination</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>