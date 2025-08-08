<script>
  import Header from "$lib/Components/Header.svelte";
  import Hero from "$lib/Components/HomeHero.svelte";
  import LocalTalents from "$lib/Components/HomeLocalTalents.svelte";
  import Footer from "$lib/Components/Footer.svelte";
  import HomeRooms from "$lib/Components/HomeRooms.svelte";
  import MasonryCollage from "$lib/Components/HomeMasonryCollage.svelte";
</script>

<svelte:head>
  <title
    >Hotel Cherilyn Monta - Memorable Hotel for Moments Rich in Emotions</title
  >
  <meta
    name="description"
    content="Experience luxury hospitality at Hotel Cherilyn Monta, where every stay becomes a cherished memory. Book now for the best prices on our premium accommodations."
  />
</svelte:head>

<div class="min-h-screen">
  <main>
    <Hero />

    <LocalTalents />
    <HomeRooms />

    <MasonryCollage />
  </main>
</div>
