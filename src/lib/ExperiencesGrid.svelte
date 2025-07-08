<script>
  let { experiences, activeFilter } = $props();

  // Filter experiences based on active filter
  const filteredExperiences = $derived(() => {
    if (activeFilter === 'all') {
      return experiences;
    }
    return experiences.filter(exp => exp.category === activeFilter);
  });

  function getCategoryIcon(category) {
    const icons = {
      'beaches': '🏖️',
      'temple': '🛕',
      'fort': '🏰',
      'sightseeing': '👁️'
    };
    return icons[category] || '📍';
  }

  function getCategoryColor(category) {
    const colors = {
      'beaches': 'bg-blue-100 text-blue-700',
      'temple': 'bg-orange-100 text-orange-700',
      'fort': 'bg-gray-100 text-gray-700',
      'sightseeing': 'bg-green-100 text-green-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  }
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Results Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {#if activeFilter === 'all'}
          All Experiences
        {:else}
          {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Experiences
        {/if}
      </h2>
      <p class="text-gray-600">
        Showing {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? 's' : ''}
      </p>
    </div>

    <!-- Experiences Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each filteredExperiences as experience}
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden">
            <img
              src={experience.image}
              alt={experience.name}
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Category Badge -->
            <div class="flex items-center justify-between mb-3">
              <span class="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium {getCategoryColor(experience.category)}">
                <span>{getCategoryIcon(experience.category)}</span>
                <span>{experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}</span>
              </span>
              <span class="text-sm font-semibold text-green-700">
                {experience.distance}
              </span>
            </div>

            <!-- Name -->
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {experience.name}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {experience.description}
            </p>

            <!-- Action Button -->
            <button class="w-full btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 text-sm py-2">
              Get Directions
            </button>
          </div>
        </div>
      {/each}
    </div>

    <!-- No Results Message -->
    {#if filteredExperiences.length === 0}
      <div class="text-center py-12">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          No experiences found
        </h3>
        <p class="text-gray-600">
          Try selecting a different category to explore more options.
        </p>
      </div>
    {/if}
  </div>
</section>