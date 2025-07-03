<script lang="ts">
  let isMenuOpen = $state(false);
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
  <div class="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/logo.png" alt="Hotel Scape Logo" class="h-8 sm:h-10 w-auto" />
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center space-x-8">
      <a href="/rooms" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Rooms
      </a>
      <a href="/dining" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Dining
      </a>
      <a href="/events" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Events
      </a>
      <a href="/activities" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Activities
      </a>
      <a href="/attractions" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Attractions
      </a>
      <a href="/about-us" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        About us
      </a>
      <a href="/Contact-us" class="text-midnight hover:text-forestGreen font-medium transition duration-300 text-lg">
        Contact us
      </a>
    </nav>

    <!-- Desktop Book Now Button -->
    <div class="hidden lg:block">
      <button class="btn bg-transparent border-2 border-forestGreen text-forestGreen hover:bg-forestGreen hover:text-white transition-all duration-300 px-6 py-2">
        <span class="text-lg font-medium">BOOK NOW</span>
      </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      class="lg:hidden btn btn-ghost p-2"
      on:click={() => (isMenuOpen = !isMenuOpen)}
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if isMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
      <nav class="container mx-auto px-4 py-6 space-y-4">
        <a href="/rooms" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Rooms
        </a>
        <a href="/dining" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Dining
        </a>
        <a href="/events" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Events
        </a>
        <a href="/activities" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Activities
        </a>
        <a href="/attractions" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Attractions
        </a>
        <a href="/about-us" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          About us
        </a>
        <a href="/Contact-us" class="block text-midnight hover:text-forestGreen font-medium py-2 text-lg">
          Contact us
        </a>
        <button class="btn btn-primary w-full mt-4 py-3">
          <span class="text-lg">BOOK NOW</span>
        </button>
      </nav>
    </div>
  {/if}
</header>