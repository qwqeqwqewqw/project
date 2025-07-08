<script>
  let { onFilterChange, activeFilter } = $props();

  const filterCategories = [
    { id: 'beaches', title: 'Beaches', icon: '🏖️', description: 'Pristine coastal beauty' },
    { id: 'temple', title: 'Temples', icon: '🛕', description: 'Sacred spiritual sites' },
    { id: 'fort', title: 'Forts', icon: '🏰', description: 'Historic monuments' },
    { id: 'sightseeing', title: 'Sightseeing', icon: '👁️', description: 'Natural wonders' }
  ];

  function handleFilterClick(filterId) {
    onFilterChange(filterId);
  }
</script>

<section class="py-16 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Large Image with Overlay Content -->
      <div class="relative">
        <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Konkan Experiences"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div class="absolute bottom-8 left-8 text-white">
            <h2 class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl mb-3">
              Discover Konkan
            </h2>
            <p class="text-base sm:text-lg opacity-90 max-w-sm">
              Explore the beauty and heritage around our resort
            </p>
          </div>
        </div>
      </div>

      <!-- Right: Filter Cards -->
      <div class="space-y-8">
        <div class="text-center lg:text-left">
          <h3 class="font-wasted text-2xl sm:text-3xl text-gray-900 mb-4">
            Choose Your Adventure
          </h3>
          <p class="text-gray-600 text-base leading-relaxed">
            Filter experiences by category to find your perfect day out in the beautiful Konkan region
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each filterCategories as category}
            <button
              onclick={() => handleFilterClick(category.id)}
              class="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 text-left {activeFilter === category.id ? 'border-green-700 bg-green-50 scale-105' : 'border-transparent hover:border-green-200 hover:scale-102'}"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl">{category.icon}</div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-1">
                    {category.title}
                  </h4>
                  <p class="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
              {#if activeFilter === category.id}
                <div class="absolute top-3 right-3 w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
              {/if}
            </button>
          {/each}
        </div>

        <!-- Show All Button -->
        <div class="text-center lg:text-left pt-4">
          <button
            onclick={() => handleFilterClick('all')}
            class="btn {activeFilter === 'all' ? 'bg-green-700 text-white border-green-700' : 'btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white'} transition-all duration-300 px-8 py-3 text-base font-semibold"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            Show All Experiences
          </button>
        </div>
      </div>
    </div>
  </div>
</section>