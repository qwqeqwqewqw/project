<script lang="ts">
  let isMenuOpen = $state(false);
</script>

<header
  class="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md"
>
  <div class="w-full px-6 py-4 flex items-center justify-between">
    <!-- Left: Logo + Navigation -->
    <div class="flex items-center space-x-12">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <a href="/" class="flex items-center space-x-2">
          <img src="/logo.png" alt="Hotel Scape Logo" class="h-10 w-auto" />
        </a>
      </div>

      <!-- Nav Links -->
      <div class="hidden lg:flex items-center space-x-6 header-text">
        <a
          href="/rooms"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Rooms
        </a>
        <a
          href="/dining"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Dining
        </a>
        <a
          href="/events"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Events
        </a>
        <a
          href="/activities"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Activities
        </a>
        <a
          href="/attractions"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Attractions
        </a>
        <a
          href="/about-us"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          About us
        </a>
        <a
          href="/Contact-us"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Contact us
        </a>
      </div>
    </div>

    <!-- Right: Book Now Button -->
    <div class="hidden lg:block lg:mr-15">
      <button
        class="btn bg-transparent border-2 border-rose-50 text-white transition-all duration-300 hover:scale-110 shadow-none p-5"
      >
        <span class="text-[1.1rem]">BOOK NOW</span>
      </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      class="block lg:hidden btn btn-ghost"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if isMenuOpen}
    <div
      class="lg:hidden bg-white/80 backdrop-blur-md text-midnight px-6 py-4 space-y-4 border-t border-gray-300"
    >
      <a href="#story" class="block hover:text-primary">Our Story</a>
      <a href="#packages" class="block hover:text-primary">Packages</a>
      <a href="#contact" class="block hover:text-primary">Contact</a>
      <button class="btn btn-primary w-full"> BOOK NOW </button>
    </div>
  {/if}
</header>
