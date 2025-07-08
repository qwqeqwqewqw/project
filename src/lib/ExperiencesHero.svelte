<script>
  let { onFilterChange, activeFilter } = $props();

  const filterCategories = [
    { 
      id: 'beaches', 
      title: 'Beaches', 
      icon: '🏖️', 
      count: '4 places',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500'
    },
    { 
      id: 'temple', 
      title: 'Temples', 
      icon: '🛕', 
      count: '1 place',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-gradient-to-br from-green-400 to-green-500'
    },
    { 
      id: 'fort', 
      title: 'Forts', 
      icon: '🏰', 
      count: '1 place',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500'
    },
    { 
      id: 'sightseeing', 
      title: 'Sightseeing', 
      icon: '👁️', 
      count: '2 places',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-500'
    }
  ];

  function handleFilterClick(filterId) {
    onFilterChange(filterId);
  }

  function handleViewAll() {
    onFilterChange('all');
  }
</script>

<section class="py-8 bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Bring more epic to your everyday
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Find and book the best adventure activities around Cherilyn Monta Resort
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <!-- Left: Large Hero Card -->
      <div class="lg:col-span-2">
        <button
          onclick={handleViewAll}
          class="group relative w-full h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        >
          <!-- Background Image -->
          <img
            src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Konkan Adventures"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-500/60 to-transparent"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 flex flex-col justify-center px-6 lg:px-8 text-white">
            <div class="max-w-md">
              <div class="text-sm font-medium mb-2 opacity-90">
                over 8 experiences
              </div>
              <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4">
                Find and book<br />
                activities near you.
              </h2>
              <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                <span class="text-base font-medium mr-2">View All</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>

      <!-- Right: Category Cards Grid -->
      <div class="grid grid-cols-2 gap-3">
        {#each filterCategories as category}
          <button
            onclick={() => handleFilterClick(category.id)}
            class="group relative h-32 lg:h-36 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 {category.bgColor}"
          >
            <!-- Background Pattern/Texture -->
            <div class="absolute inset-0 opacity-20">
              <div class="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="relative h-full flex flex-col justify-between p-3 text-white">
              <!-- Icon -->
              <div class="text-xl lg:text-2xl">
                {category.icon}
              </div>
              
              <!-- Bottom Content -->
              <div class="text-left">
                <h3 class="font-bold text-base lg:text-lg mb-1">
                  {category.title}
                </h3>
                <p class="text-sm opacity-90">
                  {category.count}
                </p>
              </div>

              <!-- Arrow Icon -->
              <div class="absolute top-3 right-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>

              <!-- Active State Indicator -->
              {#if activeFilter === category.id}
                <div class="absolute inset-0 border-4 border-white rounded-2xl"></div>
                <div class="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
              {/if}
            </div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Active Filter Indicator -->
    {#if activeFilter !== 'all'}
      <div class="text-center mt-6">
        <div class="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
          <span class="text-sm text-gray-600 mr-2">Showing:</span>
          <span class="text-sm font-semibold text-gray-900 capitalize">{activeFilter}</span>
          <button
            onclick={() => handleFilterClick('all')}
            class="ml-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    {/if}
  </div>
</section>