<script>
  import { IconCheck } from '@tabler/icons-svelte';
  
  let { checkInRules, checkOutRules } = $props();
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">Booking Rules</h3>

  <div class="grid md:grid-cols-2 gap-8">
    <!-- Check In -->
    <div>
      <h4 class="text-xl font-semibold text-gray-900 mb-4">Check In</h4>
      <div class="space-y-3">
        {#each checkInRules as rule}
          <div class="flex items-start space-x-3">
            <IconCheck class="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
            <span class="text-gray-600">{rule}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Check Out -->
    <div>
      <h4 class="text-xl font-semibold text-gray-900 mb-4">Check Out</h4>
      <div class="space-y-3">
        {#each checkOutRules as rule}
          <div class="flex items-start space-x-3">
            <IconCheck class="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
            <span class="text-gray-600">{rule}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>