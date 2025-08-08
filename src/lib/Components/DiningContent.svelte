<script>
  import { IconChefHat, IconToolsKitchen2 } from "@tabler/icons-svelte";
  const imageSrc = "Dining/food1.png";

  const images = [
    "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];
</script>

<section class="bg-off-white pt-20 px-6 lg:px-24 pb-15 overflow-hidden">
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
    <div class="text-gray-900 space-y-2">
      <!-- Heading -->
      <h2
        class="text-3xl sm:text-5xl font-wasted text-almaris-blue leading-tight"
      >
        A Culinary Journey with authentic Konkan Cuisine
      </h2>

      <!-- Paragraphs -->
      <div class="space-y-2 text-gray-600 leading-relaxed">
        <p>
          The multi-cuisine restaurant at Cherilyn Monta Resort features a wide
          spectrum of culinary offerings that reflect the best of Konkan
          cuisine. Located adjacent to the swimming pool is The Lounge and The
          Coffee shop, where readers can find a library and work stations.
        </p>
      </div>

      <!-- Feature Highlights -->
      <div class="grid sm:grid-cols-2 gap-8 pt-6">
        <div>
          <p class="font-semibold text-lg">
            <span class="inline-flex items-center gap-2 text-almaris-gold">
              <IconChefHat size={24} stroke={2} class="text-almaris-gold" />
              <span>Specialist</span>
            </span>
          </p>
          <p class="text-sm text-gray-600 mt-1">
            Our chefs are masters of authentic Konkan recipes.
          </p>
        </div>
        <div>
          <p class="font-semibold text-lg">
            <span class="inline-flex items-center gap-2 text-almaris-gold">
              <IconToolsKitchen2
                size={24}
                stroke={2}
                class="text-almaris-gold"
              />
              <span>Restaurant</span>
            </span>
          </p>
          <p class="text-sm text-gray-600 mt-1">
            Enjoy poolside seating and an in-house library café.
          </p>
        </div>
      </div>

      <!-- CTA Button -->
    </div>
  </div>
</section>

<!-- Gallery -->
<section class="pt-2 bg-white pb-10 xl:px-30">
  <h3 class="font-wasted text-5xl text-gray-900 my-8 text-center">Gallery</h3>
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
