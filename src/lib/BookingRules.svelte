<script>
  let { checkInRules, checkOutRules } = $props();
</script>

<div class="bg-cloudWhite rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-midnight mb-6">Booking Rules</h3>

  <div class="grid md:grid-cols-2 gap-8">
    <!-- Check In -->
    <div>
      <h4 class="text-xl font-semibold text-midnight mb-4">Check In</h4>
      <div class="space-y-3">
        {#each checkInRules as rule}
          <div class="flex items-start space-x-3">
            <svg
              class="w-5 h-5 text-forestGreen mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-stormCloud">{rule}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Check Out -->
    <div>
      <h4 class="text-xl font-semibold text-midnight mb-4">Check Out</h4>
      <div class="space-y-3">
        {#each checkOutRules as rule}
          <div class="flex items-start space-x-3">
            <svg
              class="w-5 h-5 text-forestGreen mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-stormCloud">{rule}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>