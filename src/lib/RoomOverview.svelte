<script>
  let { room } = $props();
</script>

<div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-midnight mb-4">Overview</h3>
  <p class="text-stormCloud leading-relaxed mb-6">
    {room.description}
  </p>

  <!-- Key Features -->
  <div>
    <h4 class="text-lg font-semibold text-midnight mb-3">Key Features</h4>
    <div class="grid sm:grid-cols-2 gap-3">
      {#each room.features as feature}
        <div class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-forestGreen flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-midnight">{feature}</span>
        </div>
      {/each}
    </div>
  </div>
</div>