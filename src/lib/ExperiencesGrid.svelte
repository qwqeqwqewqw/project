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
      'beaches': 'bg-blue-100 text-blue-700 border-blue-200',
      'temple': 'bg-orange-100 text-orange-700 border-orange-200',
      'fort': 'bg-gray-100 text-gray-700 border-gray-200',
      'sightseeing': 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  }

  function getCategoryName(category) {
    const names = {
      'beaches': 'Beach',
      'temple': 'Temple',
      'fort': 'Fort',
      'sightseeing': 'Sightseeing'
    };
    return names[category] || category;
  }
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Results Header -->
    <div class="text-center mb-12">
      <h2 class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
        {#if activeFilter === 'all'}
          All Experiences
        {:else}
          {getCategoryName(activeFilter)} Experiences
        {/if}
      </h2>
      <p class="text-gray-600 text-base">
        Showing {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? 's' : ''} 
        {#if activeFilter !== 'all'}in {getCategoryName(activeFilter).toLowerCase()}{/if}
      </p>
    </div>

    <!-- Experiences Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each filteredExperiences as experience (experience.id)}
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden relative">
            <img
              src={experience.image}
              alt={experience.name}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Distance Badge -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span class="text-sm font-bold text-green-700">
                {experience.distance}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Category Badge -->
            <div class="flex items-center justify-between mb-4">
              <span class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border {getCategoryColor(experience.category)}">
                <span>{getCategoryIcon(experience.category)}</span>
                <span>{getCategoryName(experience.category)}</span>
              </span>
            </div>

            <!-- Name -->
            <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
              {experience.name}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              {experience.description}
            </p>

            <!-- Action Button -->
            <button class="w-full btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 text-sm py-3 font-semibold group-hover:scale-105">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Get Directions
            </button>
          </div>
        </div>
      {/each}
    </div>

    <!-- No Results Message -->
    {#if filteredExperiences.length === 0}
      <div class="text-center py-16">
        <div class="text-6xl mb-6">🔍</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">
          No experiences found
        </h3>
        <p class="text-gray-600 text-lg mb-6">
          Try selecting a different category to explore more options.
        </p>
        <button
          onclick={() => onFilterChange('all')}
          class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 px-6 py-3"
        >
          Show All Experiences
        </button>
      </div>
    {/if}
  </div>
</section>