<script>
  import RoomsHero from "$lib/Components/RoomsHero.svelte";
  import RoomsGrid from "$lib/Components/RoomsGrid.svelte";
  import RoomsCallToAction from "$lib/Components/RoomsCallToAction.svelte";

  import { roomlist as rooms } from "$lib/Data/data";
</script>

<svelte:head>
  <title>Rooms & Suites - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Discover our luxurious rooms and suites at Cherilyn Monta Resort. From elegant suites to private bungalows, find your perfect accommodation."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <RoomsHero />

  <!-- Rooms Grid Section -->
  <RoomsGrid {rooms} />

  <!-- Call to Action Section -->
  <RoomsCallToAction />
</main>
