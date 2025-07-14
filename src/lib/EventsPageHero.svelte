<script>
  let { activeTab, onTabChange } = $props();

  const tabs = [
    { id: "weddings", label: "WEDDINGS" },
    { id: "corporate", label: "CORPORATE" },
    { id: "festivals", label: "FESTIVALS" },
  ];

  function handleTabClick(tabId) {
    onTabChange(tabId);
  }
</script>

<!-- Tab Navigation -->
<div class="bg-white shadow-sm border-t pt-20">
  <div class="container mx-auto px-4">
    <div class="flex justify-center">
      {#each tabs as tab}
        <button
          onclick={() => handleTabClick(tab.id)}
          class="px-8 py-4 text-sm font-medium tracking-wider transition-all duration-300 border-b-2
            {activeTab === tab.id
            ? 'text-green-700 border-green-700 bg-white'
            : 'text-gray-600 border-transparent hover:text-green-700 hover:border-green-300'}"
        >
          {tab.label}
        </button>
      {/each}
    </div>
  </div>
</div>
