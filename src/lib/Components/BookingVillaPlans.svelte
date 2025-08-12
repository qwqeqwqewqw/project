<script>
  export let villaplans = [];
  export let selectedPlan = null; // currently selected plan
  export let onSelectPlan = () => {}; // callback function for plan selection

  function selectPlan(plan) {
    onSelectPlan(plan);
  }
</script>

<section class="bg-white py-10 px-6 sm:px-10 rounded-lg shadow-md">
  <h2 class="text-2xl font-semibold mb-6 text-gray-900">Available Plans</h2>

  {#if villaplans.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each villaplans as plan}
        <div
          class="border rounded-lg p-5 cursor-pointer bg-off-white shadow hover:shadow-lg transition-shadow duration-300
                 {selectedPlan && selectedPlan._id === plan._id
            ? 'border-2 border-almaris-gold'
            : 'border'}"
          on:click={() => selectPlan(plan)}
        >
          <h3 class="font-bold text-lg mb-2 text-almaris-gold">
            {plan.plan_name}
          </h3>
          <p class="font-semibold text-gray-900">
            Starting from ₹{plan.min_mrp}
          </p>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No plans available for this villa type.</p>
  {/if}
</section>
