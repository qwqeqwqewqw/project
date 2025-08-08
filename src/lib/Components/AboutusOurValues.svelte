<script>
  import {
    IconRocket,
    IconHeart,
    IconScale,
    IconUsersGroup,
    IconHeartHandshake,
    IconBulb,
  } from "@tabler/icons-svelte";
  const iconMap = {
    IconRocket,
    IconHeart,
    IconScale,
    IconUsersGroup,
    IconHeartHandshake,
    IconBulb,
  };
  import { values } from "$lib/Data/data";
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2
        class="font-wasted text-3xl sm:text-4xl md:text-5xl text-almaris-gold mb-4"
      >
        Our Values
      </h2>
      <p class="text-base sm:text-md text-gray-900 max-w-2xl mx-auto">
        The principles that guide us in creating exceptional experiences for our
        guests
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each values as { icon, title, description }}
        <div
          class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl shadow-almaris-blue/20 transition-all duration-300 border border-blue-100"
        >
          <div class="text-center mb-6">
            <div
              class="w-10 h-10 bg-off-white rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svelte:component
                this={iconMap[icon]}
                class="w-6 h-6 text-almaris-gold"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
          </div>
          <p class="text-gray-900 text-center leading-relaxed text-md">
            {description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
