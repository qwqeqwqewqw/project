<script>
  let { experiences, activeFilter } = $props();
  import { activityCategories } from "$lib/Data/data";
  // Filter experiences based on active filter using Svelte 5 $derived()
  const filteredExperiences = $derived(
    activeFilter === 'all' 
      ? experiences 
      : experiences.filter(exp => exp.category === activeFilter)
  );

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
      'beaches': 'bg-blue-500',
      'temple': 'bg-orange-500',
      'fort': 'bg-gray-600',
      'sightseeing': 'bg-green-500'
    };
    return colors[category] || 'bg-gray-500';
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

  function getRating(category) {
    // Generate consistent ratings based on category
    const ratings = {
      'beaches': 4.8,
      'temple': 4.9,
      'fort': 4.7,
      'sightseeing': 4.6
    };
    return ratings[category] || 4.5;
  }

  function getReviewCount(id) {
    // Generate review counts based on ID for consistency
    const counts = [45, 67, 89, 123, 156, 78, 234, 98];
    return counts[id % counts.length] || 50;
  }

  function getPrice(category) {
    // Generate prices based on category
    const prices = {
      'beaches': '₹150',
      'temple': '₹50',
      'fort': '₹100',
      'sightseeing': '₹75'
    };
    return prices[category] || '₹100';
  }
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">


    <!-- Experiences Grid -->
    {#if filteredExperiences.length > 0}
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {#each filteredExperiences as experience (experience.id)}
          <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-fit">
            <!-- Image Container -->
            <div class="relative aspect-[4/2.8] overflow-hidden">
              <img
                src={experience.image}
                alt={experience.name}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <!-- Distance Badge -->
              <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                <span class="text-xs font-semibold text-gray-800">
                  {experience.distance}
                </span>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-2 left-2 {getCategoryColor(experience.category)} text-white rounded-lg px-2 py-1">
                <span class="text-xs font-medium">
                  {getCategoryIcon(experience.category)} {getCategoryName(experience.category)}
                </span>
              </div>

              <!-- Bottom Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white">
                <div class="flex items-center text-xs text-gray-200 mb-1">
                  <span>{experience.distance}</span>
                  <span class="mx-1">•</span>
                  <span>{getCategoryName(experience.category)}</span>
                </div>
                <h3 class="font-bold text-base lg:text-lg leading-tight">
                  {experience.name}
                </h3>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-3">
              <!-- Rating -->
              <div class="flex items-center mb-2">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span class="ml-1 text-sm font-bold text-gray-900">
                    {getRating(experience.category)}
                  </span>
                  <span class="ml-1 text-sm text-gray-500">
                    ({getReviewCount(experience.id)})
                  </span>
                </div>
              </div>

              <!-- Price -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">
                    {getPrice(experience.category)}
                  </span>
                  <span class="text-sm text-gray-500 ml-1">per person</span>
                </div>
                
                <!-- Action Button -->
                <button class="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <!-- No Results Message -->
      <div class="text-center py-12">
        <div class="text-6xl mb-6">🔍</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">
          No experiences found
        </h3>
        <p class="text-gray-600 text-lg mb-6">
          Try selecting a different category to explore more options.
        </p>
        <button
          onclick={() => activeFilter = 'all'}
          class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 px-6 py-3"
        >
          Show All Experiences
        </button>
      </div>
    {/if}
  </div>
</section>