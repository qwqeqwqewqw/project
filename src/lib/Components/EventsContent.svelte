<script>
  let activeTab = "weddings";

  const tabs = [
    { id: "weddings", label: "WEDDINGS" },
    { id: "corporate", label: "CORPORATE" },
    { id: "festivals", label: "FESTIVALS" },
  ];

  import { festivalsList, eventData } from "$lib/Data/data";

  $: current = eventData[activeTab];
</script>

<!-- Banner -->
<div class="relative h-52 sm:h-56 overflow-hidden">
  <img
    src={current.images[0]}
    alt="Banner"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 flex items-center justify-center h-full px-4">
    <p
      class="text-white font-wasted text-2xl lg:text-4xl text-center max-w-xl pt-12"
    >
      {current.bannerText}
    </p>
  </div>
</div>

<!-- Tabs -->
<nav class="bg-white border-b">
  <div class="max-w-6xl mx-auto px-4">
    <ul class="flex justify-center text-sm">
      {#each tabs as { id, label }}
        <li>
          <button
            on:click={() => (activeTab = id)}
            class="px-6 py-3 border-b-2 transition {activeTab === id
              ? 'text-almaris-blue border-almaris-blue'
              : 'text-black border-transparent hover:text-almaris-blue hover:border-almaris-blue'}"
          >
            {label}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<!-- Content -->
<section class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 space-y-12">
    <article class="space-y-6">
      <h2 class="text-5xl font-wasted text-almaris-gold">{current.headline}</h2>
      <div class="space-y-4 text-gray-600 text-base">
        <p>{current.description}</p>
        <p>{current.details}</p>
      </div>
      <div class="pt-4">
        <h3 class="text-xs font-semibold tracking-widest text-gray-900">
          CAPACITY
        </h3>
        <p class="text-sm text-gray-600">{current.capacity}</p>
      </div>
      <button
        class="mt-3 bg-almaris-blue text-white text-sm uppercase tracking-wide px-6 py-3 rounded"
        >Book an Event</button
      >
    </article>

    <!-- Conditional Amenities or Festival Cards -->
    <section class="py-10 bg-off-white px-10">
      {#if activeTab === "festivals"}
        <div class="max-w-[100rem] mx-auto space-y-10">
          <h3
            class="text-center text-5xl font-wasted text-almaris-blue mb-6"
          >
            Festival Highlights
          </h3>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[150rem]">
            {#each festivalsList as fest}
              <div class="bg-white shadow rounded-xl overflow-hidden">
                <img
                  src={fest.image}
                  alt={fest.alt}
                  class="w-full h-48 object-cover"
                />
                <div class="p-5 space-y-2">
                  <h4 class="text-lg font-semibold text-gray-800">
                    {fest.title}
                  </h4>
                  <p class="text-sm text-gray-600">{fest.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div
          class="relative max-w-4xl mx-auto bg-white px-6 py-10 shadow-xl rounded-3xl border border-gray-200"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-almaris-gold rounded-full"
          ></div>
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-almaris-gold rounded-full"
          ></div>
          <div
            class="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-100 pointer-events-none"
          ></div>
          <h3 class="text-center text-4xl font-wasted text-almaris-blue mb-8">
            Our Signature Amenities
          </h3>
          <div class="grid sm:grid-cols-2 gap-6 relative z-10">
            {#each current.amenities as a}
              <div class="flex items-start gap-3">
                <span class="text-almaris-gold text-lg pt-1">✦</span>
                <div>
                  <div class="text-base font-medium text-gray-900">
                    {a.title}
                  </div>
                  <div class="text-sm text-gray-500">{a.subtitle}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </section>

    <!-- Gallery -->
    <section >
      <h3 class="font-wasted text-5xl text-gray-900 mb-8 text-center">Gallery</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each current.images as img, i}
          <figure class="overflow-hidden rounded-lg aspect-square">
            <img
              src={img}
              alt={`Event image ${i + 1}`}
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </figure>
        {/each}
      </div>
    </section>
  </div>
</section>
