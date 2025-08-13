<script>
  export let villaplans = [];
  export let selectedPlan = null;
  export let onSelectPlan = () => {};
  export let currenttype = ""; // from parent +page

  let currentTab = "2BHK";
  const tabs = ["2BHK", "3BHK", "4BHK"];

  function selectPlan(plan) {
    onSelectPlan(plan);
  }

  function filteredPlans(tab) {
    // Filter only when Bungalow
    if (currenttype === "Bungalow") {
      return villaplans.filter((plan) =>
        plan.package_name.toLowerCase().includes(tab.toLowerCase())
      );
    }
    return villaplans;
  }

  function cleanPackageName(name) {
    return name.replace(/ - Slab \(1-15\)$/i, ""); // removes " - Slab (1-15)" at the end
  }
</script>

<section class="bg-white py-10 px-6 sm:px-10 rounded-lg shadow-md">
  <h2 class="text-2xl font-semibold mb-6 text-gray-900">Available Plans</h2>

  {#if currenttype === "Bungalow"}
    <!-- Tab Navigation -->
    <div class="flex gap-4 mb-6">
      {#each tabs as tab}
        <button
          class="px-4 py-2 rounded-lg border transition
            {currentTab === tab
            ? 'bg-almaris-gold text-white'
            : 'bg-off-white text-gray-900'}"
          on:click={() => (currentTab = tab)}
        >
          {tab}
        </button>
      {/each}
    </div>

    <!-- Plans for selected tab -->
    {#if filteredPlans(currentTab).length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each filteredPlans(currentTab) as plan}
          <div
            class="border rounded-lg p-5 cursor-pointer bg-off-white shadow hover:shadow-lg transition-shadow duration-300
                   {selectedPlan && selectedPlan._id === plan._id
              ? 'border-2 border-almaris-gold'
              : 'border'}"
            on:click={() => selectPlan(plan)}
          >
            <h3 class="font-bold text-lg mb-2 text-almaris-gold">
              {cleanPackageName(plan.package_name)}
            </h3>
            <p class="font-semibold text-gray-900">
              Starting from ₹{plan.min_mrp}
            </p>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-gray-500">No plans available for {currentTab}.</p>
    {/if}
  {:else}
    <!-- Normal Behaviour -->
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
              {cleanPackageName(plan.package_name)}
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
  {/if}
</section>
