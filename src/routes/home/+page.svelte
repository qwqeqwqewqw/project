<script>
  import Header from "$lib/Header.svelte";
  import Hero from "$lib/Hero.svelte";
  import LocalTalents from "$lib/LocalTalents.svelte";
  import Footer from "$lib/Footer.svelte";
  import Carousel from "$lib/Carousel.svelte";
  import MasonryCollage from "$lib/MasonryCollage.svelte";
</script>

<svelte:head>
  <title>Hotel Scape - Memorable Hotels for Moments Rich in Emotions</title>
  <meta
    name="description"
    content="Experience luxury hospitality at Hotel Scape, where every stay becomes a cherished memory. Book now for the best prices on our premium accommodations."
  />
</svelte:head>

<div class="min-h-screen">
  <main>
    <Hero />

    <LocalTalents />
    <Carousel />

    <MasonryCollage />
  </main>
</div>
