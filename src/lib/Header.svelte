<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { IconMenu2 } from "@tabler/icons-svelte";

  let isMenuOpen = $state(false);

  // Nav links array
  const navLinks = [
    { href: "/rooms", label: "Rooms" },
    { href: "/dining", label: "Dining" },
    { href: "/events", label: "Events" },
    { href: "/experiences", label: "experiences" },
    { href: "/about-us", label: "About us" },
    { href: "/contact-us", label: "Contact us" },
  ];

  // Hide book now for specific pages
  const hideBookNow = $derived(
    $page.url.pathname.startsWith("/rooms") ||
      $page.url.pathname.startsWith("/book")
  );
</script>

<header
  class="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md transition-colors duration-300"
>
  <div class="w-full px-6 py-1 flex items-center justify-between">
    <!-- Logo + Nav -->
    <div class="flex items-center space-x-5">
      <div class="rounded px-5 py-2 -pr-10">
        <a href="/">
          <img
            src="/headerlogo.png"
            alt="Hotel Scape Logo"
            class="h-10 w-auto drop-shadow-md"
          />
        </a>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center space-x-6 text-md">
        {#each navLinks as { href, label }}
          <a
            {href}
            class="text-midnight hover:text-green-700 font-medium transition duration-300"
          >
            {label}
          </a>
        {/each}
      </div>
    </div>

    <!-- Book Now -->
    {#if !hideBookNow}
      <div class="hidden lg:block lg:mr-15">
        <a href="/rooms">
          <button
            class="btn bg-blue-100 border-0 text-slate-700 transition-all duration-300 hover:scale-110 shadow-none p-4.5"
          >
            <span class="text-md">BOOK NOW</span>
          </button>
        </a>
      </div>
    {/if}

    <!-- Mobile Toggle -->
    <button
      class="block lg:hidden btn btn-ghost !bg-transparent !border-transparent"
      aria-label="Open menu"
      onclick={() => (isMenuOpen = !isMenuOpen)}
    >
      <IconMenu2 class="w-6 h-6" stroke="black" color="black" />
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="lg:hidden bg-white/80 backdrop-blur-md text-gray-900 px-6 py-4 space-y-4 border-t border-gray-300"
    >
      {#each navLinks as { href, label }}
        <a
          {href}
          class="block hover:text-green-700 font-medium transition duration-300"
        >
          {label}
        </a>
      {/each}
      {#if !hideBookNow}
        <button class="btn btn-primary w-full">BOOK NOW</button>
      {/if}
    </div>
  {/if}
</header>
