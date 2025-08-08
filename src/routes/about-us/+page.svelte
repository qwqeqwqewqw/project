<script>
  import AboutHero from "$lib/Components/ContactAboutHero.svelte";
  import OurStory from "$lib/Components/AboutusOurStory.svelte";
  import OurValues from "$lib/Components/AboutusOurValues.svelte";
  import Timeline from "$lib/Components/AboutusTimeline.svelte";
</script>

<svelte:head>
  <title>About Us - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Learn about Cherilyn Monta Resort's journey since 1997. Discover our commitment to quality, environmental consciousness, and exceptional hospitality in Konkan."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <AboutHero subtitle="" description="" />

  <!-- Our Story -->
  <OurStory />

  <!-- Our Values -->
  <OurValues />

  <!-- Timeline -->
  <Timeline />
</main>
