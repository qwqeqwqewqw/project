<script lang="ts">
  import { page } from "$app/stores";
  import {
    IconStar,
    IconMapPin,
    IconShare,
    IconPhone,
    IconBed,
    IconBath,
    IconMaximize,
    IconUsers,
    IconCheck,
  } from "@tabler/icons-svelte";
  import { get } from "svelte/store";
  import { onMount, onDestroy } from "svelte";

  export let room;
  export let rating;
  export let reviewCount;
  export let address;
  export let onCallRoom;

  let showShareBox = false;
  let copied = false;
  let textToCopy = get(page).url.href;
  let shareBoxRef: HTMLDivElement;
  let toggleBtnRef: HTMLButtonElement;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  function toggleShareBox() {
    showShareBox = !showShareBox;
    copied = false;
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      showShareBox &&
      !shareBoxRef?.contains(event.target as Node) &&
      !toggleBtnRef?.contains(event.target as Node)
    ) {
      showShareBox = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClickOutside);
  });
</script>

<!-- MAIN CONTAINER -->
<div class="bg-white rounded-2xl p-6 shadow-lg relative">
  <div class="flex items-center justify-between mb-4 relative">
    <div class="flex items-center space-x-4">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">{room.name}</h2>
      <span
        class="bg-off-white text-almaris-gold font-bold px-3 py-1 rounded-full text-sm"
      >
        Premium Room
      </span>
    </div>

    <!-- Share Button & Box -->
    <div class="relative">
      <button
        bind:this={toggleBtnRef}
        class="flex items-center space-x-2 text-almaris-gold font-bold transition-colors"
        onclick={toggleShareBox}
      >
        <IconShare class="w-5 h-5" />
        <span>Share</span>
      </button>

      {#if showShareBox}
        <div
          bind:this={shareBoxRef}
          class="absolute right-0 mt-2 z-20 bg-white border border-gray-200 shadow-lg p-4 rounded-xl w-64 space-y-3"
        >
          <p class="text-sm text-gray-700 break-all">{textToCopy}</p>
          <button
            onclick={copyToClipboard}
            class="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-white bg-almaris-blue rounded-lg"
          >
            {#if copied}
              <IconCheck class="w-4 h-4" />
              <span>Copied!</span>
            {:else}
              <IconShare class="w-4 h-4" />
              <span>Copy Link</span>
            {/if}
          </button>
        </div>
      {/if}
    </div>
  </div>

  <!-- Rating -->
  <div class="flex items-center space-x-4 mb-4">
    <div class="flex items-center space-x-2">
      <IconStar class="w-5 h-5 text-yellow-400" fill="currentColor" />
      <span class="font-semibold text-gray-900">{rating}</span>
      <span class="text-gray-600">({reviewCount} Reviews)</span>
    </div>
  </div>

  <!-- Address -->
  <div class="flex items-center space-x-2 mb-6">
    <IconMapPin class="w-5 h-5 text-almaris-gold" />
    <span class="text-gray-600">{address}</span>
  </div>

  <!-- Price & Contact -->
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-baseline space-x-2">
      <span class="text-3xl font-bold text-gray-900">{room.price}</span>
      <span class="text-gray-600">/ night</span>
    </div>
    <button
      onclick={onCallRoom}
      class="flex items-center space-x-2 -mr-3 sm:mr-0 lg:mr-0 bg-almaris-blue text-white px-4 py-2 rounded-lg"
    >
      <IconPhone class="w-4 h-4" />
      <span class="text-sm lg:text-lg">{room.phone}</span>
    </button>
  </div>

  <!-- Room Specs -->
  <div class="grid grid-cols-4 gap-4 pt-6 border-t border-blue-200">
    <div class="flex items-center space-x-2">
      <IconBed class="w-5 h-5 text-almaris-gold" />
      <span class="text-gray-900"
        >{room.beds} Bed{room.beds > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <IconBath class="w-5 h-5 text-almaris-gold" />
      <span class="text-gray-900"
        >{room.baths} Bath{room.baths > 1 ? "s" : ""}</span
      >
    </div>
    <div class="flex items-center space-x-2">
      <IconMaximize class="w-5 h-5 text-almaris-gold" />
      <span class="text-gray-900">{room.size}</span>
    </div>
    <div class="flex items-center space-x-2">
      <IconUsers class="w-5 h-5 text-almaris-gold" />
      <span class="text-gray-900"
        >{room.guests} Guest{room.guests > 1 ? "s" : ""}</span
      >
    </div>
  </div>
</div>
