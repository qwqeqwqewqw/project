<script>
  import ExperiencesPageHeader from "$lib/Components/ExperiencesPageHeader.svelte";
  import ExperiencesHero from "$lib/Components/ExperiencesHero.svelte";
  import ExperiencesGrid from "$lib/Components/ExperiencesGrid.svelte";
  import ResortActivities from "$lib/Components/ResortActivities.svelte";
  import { experiences } from "$lib/Data/data";

  let activeFilter = $state("all");

  function handleFilterChange(filterId) {
    activeFilter = filterId;
    console.log("Filter changed to:", filterId);
    console.log("Experiences array:", experiences);
  }

  console.log("Initial experiences:", experiences);
  console.log("Initial activeFilter:", activeFilter);
</script>

<svelte:head>
  <title>Experiences - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Discover amazing experiences around Cherilyn Monta Resort. Explore beaches, temples, forts, and sightseeing spots in the beautiful Konkan region."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Page Header -->
  <ExperiencesPageHeader />

  <!-- Hero Section with Filters -->
  <ExperiencesHero {activeFilter} onFilterChange={handleFilterChange} />

  <!-- Experiences Grid -->
  <ExperiencesGrid {experiences} {activeFilter} />

  <!-- Resort Activities -->
  <ResortActivities />
</main>
