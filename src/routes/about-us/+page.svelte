<script>
  import AboutHero from "$lib/AboutHero.svelte";
  import OurStory from "$lib/OurStory.svelte";
  import OurValues from "$lib/OurValues.svelte";
  import Timeline from "$lib/Timeline.svelte";
  import Features from "$lib/Features.svelte";
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
  <AboutHero />

  <!-- Our Story -->
  <OurStory />

  <!-- Our Values -->
  <OurValues />

  <!-- Timeline -->
  <Timeline />

  <!-- Features -->
  <Features />
</main>