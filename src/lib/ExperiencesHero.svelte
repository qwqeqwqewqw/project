<script>
  let { onFilterChange, activeFilter } = $props();

  const filterCategories = [
    { id: 'beaches', title: 'Beaches', icon: '🏖️' },
    { id: 'temple', title: 'Temple', icon: '🛕' },
    { id: 'fort', title: 'Fort', icon: '🏰' },
    { id: 'sightseeing', title: 'Sightseeing', icon: '👁️' }
  ];

  function handleFilterClick(filterId) {
    onFilterChange(filterId);
  }
</script>

<section class="relative py-20 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Left: Large Image -->
      <div class="relative">
        <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/static/WhatsApp Image 2025-07-08 at 11.53.40_4e6a1ac4.jpg"
            alt="Konkan Experiences"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h1 class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl mb-2">
              Discover Konkan
            </h1>
            <p class="text-lg opacity-90">
              Explore the beauty and heritage around our resort
            </p>
          </div>
        </div>
      </div>

      <!-- Right: Filter Cards -->
      <div class="space-y-6">
        <div class="text-center lg:text-left mb-8">
          <h2 class="font-wasted text-2xl sm:text-3xl text-gray-900 mb-3">
            Choose Your Adventure
          </h2>
          <p class="text-gray-900 text-base">
            Filter experiences by category to find your perfect day out
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each filterCategories as category}
            <button
              onclick={() => handleFilterClick(category.id)}
              class="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 {activeFilter === category.id ? 'border-green-700 bg-green-50' : 'border-transparent hover:border-green-200'}"
            >
              <div class="text-center">
                <div class="text-3xl mb-3">{category.icon}</div>
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                  {category.title}
                </h3>
              </div>
              {#if activeFilter === category.id}
                <div class="absolute top-2 right-2 w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
              {/if}
            </button>
          {/each}
        </div>

        <!-- Show All Button -->
        <div class="text-center pt-4">
          <button
            onclick={() => handleFilterClick('all')}
            class="btn {activeFilter === 'all' ? 'bg-green-700 text-white' : 'btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white'} transition-all duration-300 px-6 py-2"
          >
            Show All Experiences
          </button>
        </div>
      </div>
    </div>
  </div>
</section>