<script>
  import { IconCheck } from '@tabler/icons-svelte';
  
  let { room } = $props();
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
  <p class="text-gray-600 leading-relaxed mb-6">
    {room.description}
  </p>

  <!-- Key Features -->
  <div>
    <h4 class="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
    <div class="grid sm:grid-cols-2 gap-3">
      {#each room.features as feature}
        <div class="flex items-center space-x-2">
          <IconCheck class="w-4 h-4 text-green-700 flex-shrink-0" />
          <span class="text-gray-900">{feature}</span>
        </div>
      {/each}
    </div>
  </div>
</div>