<script>
  import {
    IconBuilding,
    IconClipboard,
    IconMask,
    IconTrees,
    IconChefHat,
  } from "@tabler/icons-svelte";
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 sm:mb-16">
      <h2
        class="new-icon-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-midnight mb-4"
      >
        Event Facilities
      </h2>
      <p
        class="text-base sm:text-lg lg:text-xl text-midnight max-w-2xl mx-auto"
      >
        State-of-the-art facilities designed to make your event seamless and
        memorable
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      <!-- Event Hall -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconBuilding class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Grand Event Hall
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>300 guest capacity</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Extends to green lawns</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Climate controlled</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Professional lighting</span>
          </li>
        </ul>
      </div>

      <!-- The Verdant Conference Room -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconClipboard class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            The Verdant
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>100 participant capacity</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>A/V equipment included</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>High-speed Wi-Fi</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Natural lighting</span>
          </li>
        </ul>
      </div>

      <!-- Amphitheater -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconMask class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Amphitheater
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Outdoor venue</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Natural acoustics</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Cultural performances</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Scenic backdrop</span>
          </li>
        </ul>
      </div>

      <!-- Green Lawns -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconTrees class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Green Lawns
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Expansive outdoor space</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Perfect for ceremonies</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Garden party setup</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Natural ambiance</span>
          </li>
        </ul>
      </div>

      <!-- Catering Services -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconChefHat class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Catering Services
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Customizable menus</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Konkan specialties</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Multi-cuisine options</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Professional service</span>
          </li>
        </ul>
      </div>

      <!-- Event Planning -->
      <div
        class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <!-- <IconBadgeCheck class="w-6 h-6 text-forestGreen" /> -->
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Event Planning
          </h3>
        </div>
        <ul class="space-y-2 text-midnight">
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Expert floral decorations</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>On-demand entertainment</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Photography services</span>
          </li>
          <li class="flex items-center space-x-2">
            <!-- <IconBadgeCheck class="w-4 h-4 text-forestGreen" /> -->
            <span>Complete coordination</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
