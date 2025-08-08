<script>
  let { experiences, activeFilter } = $props();
  import { categoryMeta } from "$lib/Data/data";

  const filteredExperiences = $derived(
    activeFilter === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter)
  );

  function getMeta(category, field) {
    return categoryMeta[category]?.[field] || "";
  }

  function getReviewCount(id) {
    const counts = [45, 67, 89, 123, 156, 78, 234, 98];
    return counts[id % counts.length] || 50;
  }
</script>

<section class="py-16 bg-off-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredExperiences.length > 0}
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {#each filteredExperiences as experience (experience.id)}
          <div
            class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-fit"
          >
            <div class="relative aspect-[4/2.8] overflow-hidden">
              <img
                src={experience.image}
                alt={experience.name}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              ></div>

              <div
                class="absolute top-2 left-2 {getMeta(
                  experience.category,
                  'color'
                )} text-white rounded-lg px-2 py-1 pb-0"
              >
                <span
                  class="text-xs font-medium inline-flex items-center gap-1"
                >
                  <span>{@html getMeta(experience.category, "icon")}</span>
                </span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white">
                <div class="flex items-center text-xs text-gray-200 mb-1">
                  <span>{getMeta(experience.category, "name")}</span>
                </div>
                <h3 class="font-bold text-base lg:text-lg leading-tight">
                  {experience.name}
                </h3>
              </div>
            </div>
            <div class="p-3">
              <div class="flex items-center mb-2">
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="ml-1 text-sm font-bold text-gray-900"
                  >{getMeta(experience.category, "rating")}</span
                >
                <span class="ml-1 text-sm text-gray-500"
                  >({getReviewCount(experience.id)})</span
                >
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">
                    <span class="text-sm font-normal">
                      Distance from Cheriyn Monta:&nbsp
                    </span>{experience.distance}
                  </span>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <div class="text-6xl mb-6">🔍</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">
          No experiences found
        </h3>
        <p class="text-gray-600 text-lg mb-6">
          Try selecting a different category to explore more options.
        </p>
        <button
          onclick={() => (activeFilter = "all")}
          class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 px-6 py-3"
        >
          Show All Experiences
        </button>
      </div>
    {/if}
  </div>
</section>
