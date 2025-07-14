<script>
  import { IconChefHat, IconToolsKitchen2 } from "@tabler/icons-svelte";
  const imageSrc =
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800";

  const images = [
    "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];
</script>

<section class="bg-off-white pt-20 px-6 lg:px-24 overflow-hidden">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <!-- Left: Image -->
    <div class="relative">
      <img
        src={imageSrc}
        alt="Burger on board"
        class="md:w-[40vw] max-w-full rounded-lg shadow-lg"
      />
    </div>

    <!-- Right: Text Content -->
    <div class="text-gray-900 space-y-6">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-semibold leading-tight">
        A Culinary Journey with authentic Konkan Cuisine
      </h2>

      <!-- Paragraphs -->
      <div class="space-y-6 text-gray-600 leading-relaxed">
        <p>
          The multi-cuisine restaurant at Cherilyn Monta Resort features a wide
          spectrum of culinary offerings that reflect the best of Konkan
          cuisine. Located adjacent to the swimming pool is The Lounge and The
          Coffee shop, where readers can find a library and work stations.
        </p>
        <p>
          You can hang out with your loved ones and sip on your favorite
          beverage, catch up on reading or work while appreciating the panoramic
          landscape.
        </p>
      </div>

      <!-- Feature Highlights -->
      <div class="grid sm:grid-cols-2 gap-8 pt-6">
        <div>
          <p class="font-semibold text-lg">
            <span class="inline-flex items-center gap-2">
              <IconChefHat size={24} stroke={2} class="text-black" />
              <span>Specialist</span>
            </span>
          </p>
          <p class="text-sm text-gray-600 mt-1">
            Our chefs are masters of authentic Konkan recipes.
          </p>
        </div>
        <div>
          <p class="font-semibold text-lg">
            <span class="inline-flex items-center gap-2">
              <IconToolsKitchen2 size={24} stroke={2} class="text-black" />
              <span>Restaurant</span>
            </span>
          </p>
          <p class="text-sm text-gray-600 mt-1">
            Enjoy poolside seating and an in-house library café.
          </p>
        </div>
      </div>

      <!-- Checklist -->
      <ul class="mt-6 space-y-2 text-sm text-gray-800">
        <li class="flex items-start gap-2">
          ✓ Authentic multi-cuisine dining experience
        </li>
        <li class="flex items-start gap-2">
          ✓ Pool table and library zones for guests
        </li>
      </ul>

      <!-- CTA Button -->
      <div class="pt-8">
        <button
          class="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition text-sm"
        >
          Explore Dining →
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Gallery -->
<section class="pt-8 bg-off-white px-6 pb-10 xl:px-30">
  <h3 class="font-cursive1 text-3xl text-gray-900 mb-4">Gallery</h3>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each images as img, i}
      <figure class="overflow-hidden rounded-lg aspect-square">
        <img
          src={img}
          alt={`Event image ${i + 1}`}
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </figure>
    {/each}
  </div>
</section>
