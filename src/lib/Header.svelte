<script>
  let isMenuOpen = $state(false);
</script>

<header class="bg-cloudWhite/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-skyBlue/20">
  <div class="container mx-auto px-6 py-4">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <div class="text-2xl new-icon-serif font-semibold text-forestGreen">
          Hotel
        </div>
        <div class="text-2xl new-icon-script font-light text-midnight italic">
          Scape
        </div>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#story" class="text-midnight hover:text-forestGreen transition-colors duration-300 font-medium">
          Our Story
        </a>
        <a href="#packages" class="text-midnight hover:text-forestGreen transition-colors duration-300 font-medium">
          Packages
        </a>
        <a href="#contact" class="text-midnight hover:text-forestGreen transition-colors duration-300 font-medium">
          Contact
        </a>
      </div>

      <!-- Book Now Button -->
      <div class="hidden md:block">
        <button class="btn btn-outline btn-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300">
          BOOK NOW
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 text-midnight hover:text-forestGreen transition-colors"
        onclick={() => isMenuOpen = !isMenuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden mt-4 pb-4 border-t border-skyBlue/30">
        <div class="flex flex-col space-y-4 mt-4">
          <a href="#story" class="text-midnight hover:text-forestGreen transition-colors duration-300">
            Our Story
          </a>
          <a href="#packages" class="text-midnight hover:text-forestGreen transition-colors duration-300">
            Packages
          </a>
          <a href="#contact" class="text-midnight hover:text-forestGreen transition-colors duration-300">
            Contact
          </a>
          <button class="btn btn-primary w-full mt-4 py-3 rounded-lg font-semibold">
            BOOK NOW
          </button>
        </div>
      </div>
    {/if}
  </div>
</header>