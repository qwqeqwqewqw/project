<script>
  import {
    IconBuilding,
    IconClipboard,
    IconMask,
    IconTrees,
    IconChefHat,
    IconStars,
    IconCheck,
  } from "@tabler/icons-svelte";

  const facilities = [
    {
      icon: IconBuilding,
      title: "Grand Event Hall",
      features: [
        "300 guest capacity",
        "Extends to green lawns",
        "Climate controlled",
        "Professional lighting",
      ],
    },
    {
      icon: IconClipboard,
      title: "The Verdant",
      features: [
        "100 participant capacity",
        "A/V equipment included",
        "High-speed Wi-Fi",
        "Natural lighting",
      ],
    },
    {
      icon: IconMask,
      title: "Amphitheater",
      features: [
        "Outdoor venue",
        "Natural acoustics",
        "Cultural performances",
        "Scenic backdrop",
      ],
    },
    {
      icon: IconTrees,
      title: "Green Lawns",
      features: [
        "Expansive outdoor space",
        "Perfect for ceremonies",
        "Garden party setup",
        "Natural ambiance",
      ],
    },
    {
      icon: IconChefHat,
      title: "Catering Services",
      features: [
        "Customizable menus",
        "Konkan specialties",
        "Multi-cuisine options",
        "Professional service",
      ],
    },
    {
      icon: IconStars,
      title: "Event Planning",
      features: [
        "Expert floral decorations",
        "On-demand entertainment",
        "Photography services",
        "Complete coordination",
      ],
    },
  ];
</script>

<section class="py-15 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2
        class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2"
      >
        Event Facilities
      </h2>
      <p class="text-sm sm:text-base text-gray-900 max-w-2xl mx-auto">
        State-of-the-art facilities designed to make your event seamless and
        memorable
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 lg:px-6">
      {#each facilities as facility}
        <div
          class="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 w-full lg:max-w-sm mx-auto"
        >
          <div class="text-center mb-4">
            <div
              class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"
            >
              <svelte:component
                this={facility.icon}
                class="w-5 h-5 text-green-700"
              />
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">
              {facility.title}
            </h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-900">
            {#each facility.features as feature}
              <li class="flex items-start space-x-2">
                <IconCheck
                  class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                />
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
