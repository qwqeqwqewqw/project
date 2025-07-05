<script lang="ts">
  import { page } from "$app/stores";
  import { IconMenu2 } from "@tabler/icons-svelte";

  let isMenuOpen = $state(false);
  const hideBookNow = $derived(
    $page.url.pathname.startsWith("/rooms") ||
      $page.url.pathname.startsWith("/book")
  );
</script>

<header
  class="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md"
>
  <div class="w-full px-6 py-4 flex items-center justify-between">
    <!-- Left: Logo + Navigation -->
    <div class="flex items-center space-x-12">
      <!-- Logo -->
      <div class=" rounded px-5 py-2 -pr-20">
        <a href="/"
          ><img
            src="/headerlogo.png"
            alt="Hotel Scape Logo"
            class="h-10 w-auto drop-shadow-md"
          /></a
        >
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
          href="/contact-us"
          class="text-midnight hover:text-primary font-medium transition duration-300"
        >
          Contact us
        </a>
      </div>
    </div>

    <!-- Right: Book Now Button -->
    {#if !hideBookNow}
      <div class="hidden lg:block lg:mr-15">
        <button
          class="btn bg-transparent border-2 border-rose-50 text-white hover:bg-rose-50 hover:text-forest-green transition-all duration-300 hover:scale-110 shadow-none p-5"
        >
          <span class="text-[1.1rem]">BOOK NOW</span>
        </button>
      </div>
    {/if}

    <!-- Mobile Menu Toggle -->
    <button
      class="block lg:hidden btn btn-ghost !bg-transparent !border-transparent"
      aria-label="Open menu"
      onclick={() => (isMenuOpen = !isMenuOpen)}
    >
      <IconMenu2 class="w-6 h-6" stroke="black" color="black" />
    </button>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if isMenuOpen}
    <div
      class="lg:hidden bg-white/80 backdrop-blur-md text-midnight px-6 py-4 space-y-4 border-t border-gray-300"
    >
      <a
        href="/rooms"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Rooms
      </a>
      <a
        href="/dining"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Dining
      </a>
      <a
        href="/events"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Events
      </a>
      <a
        href="/activities"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Activities
      </a>
      <a
        href="/attractions"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Attractions
      </a>
      <a
        href="/about-us"
        class="block hover:text-primary font-medium transition duration-300"
      >
        About us
      </a>
      <a
        href="/contact-us"
        class="block hover:text-primary font-medium transition duration-300"
      >
        Contact us
      </a>
      {#if !hideBookNow}
        <button class="btn btn-primary w-full">BOOK NOW</button>
      {/if}
    </div>
  {/if}
</header>
