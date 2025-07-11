<script>
  import EventsPageHero from "$lib/EventsPageHero.svelte";
  import EventsContent from "$lib/EventsContent.svelte";

  let activeTab = $state('weddings');

  function handleTabChange(tabId) {
    activeTab = tabId;
  }
</script>

<svelte:head>
  <title>Events - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Plan your perfect event at Cherilyn Monta Resort. From destination weddings to corporate conferences and festival celebrations in the heart of Konkan."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section with Tab Navigation -->
  <EventsPageHero {activeTab} onTabChange={handleTabChange} />

  <!-- Dynamic Content Based on Active Tab -->
  <EventsContent {activeTab} />
</main>