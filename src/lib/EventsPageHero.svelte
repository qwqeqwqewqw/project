<script>
  let { activeTab, onTabChange } = $props();

  const tabs = [
    { id: 'weddings', label: 'WEDDINGS' },
    { id: 'corporate', label: 'CORPORATE' },
    { id: 'festivals', label: 'FESTIVALS' }
  ];

  function handleTabClick(tabId) {
    onTabChange(tabId);
  }
</script>

<section class="relative h-[60vh] min-h-[400px] bg-gray-900 overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
      alt="Elegant event venue"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  <!-- Content Overlay -->
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Elegant Script Text -->
      <div class="font-cursive1 text-2xl sm:text-3xl lg:text-4xl opacity-90 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur<br>
        adipiscing elit Donec nec maximus ligula Sed<br>
        ex mauris porttitor orci.
      </div>
    </div>
  </div>

  <!-- Tab Navigation - Positioned at bottom -->
  <div class="absolute bottom-0 left-0 right-0 z-20">
    <div class="bg-white/95 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          {#each tabs as tab}
            <button
              onclick={() => handleTabClick(tab.id)}
              class="px-8 py-4 text-sm font-medium tracking-wider transition-all duration-300 border-b-2 {
                activeTab === tab.id
                  ? 'text-green-700 border-green-700 bg-white'
                  : 'text-gray-600 border-transparent hover:text-green-700 hover:border-green-300'
              }"
            >
              {tab.label}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>