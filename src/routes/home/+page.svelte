<script>
  import Header from "$lib/Header.svelte";
  import Hero from "$lib/HomeHero.svelte";
  import LocalTalents from "$lib/HomeLocalTalents.svelte";
  import Footer from "$lib/Footer.svelte";
  import Carousel from "$lib/HomeRooms.svelte";
  import MasonryCollage from "$lib/HomeMasonryCollage.svelte";
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
