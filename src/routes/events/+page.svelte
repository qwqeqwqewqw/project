<script>
  import EventsHero from "$lib/EventsHero.svelte";
  import EventsOverview from "$lib/EventsOverview.svelte";
  import EventTypes from "$lib/EventTypes.svelte";
  import CorporateEvents from "$lib/CorporateEvents.svelte";
  import EventFacilities from "$lib/EventFacilities.svelte";
  import SpecialEvents from "$lib/SpecialEvents.svelte";
  import EventsCallToAction from "$lib/EventsCallToAction.svelte";
</script>

<svelte:head>
  <title>Weddings & Events - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Plan your dream destination wedding or corporate event at Cherilyn Monta Resort in Konkan. Comprehensive event planning services with venues for up to 300 guests."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <EventsHero />

  <!-- Events Overview -->
  <EventsOverview />

  <!-- Event Types -->
  <EventTypes />

  <!-- Corporate Events -->
  <CorporateEvents />

  <!-- Event Facilities -->
  <EventFacilities />

  <!-- Special Events -->
  <SpecialEvents />

  <!-- Call to Action -->
  <EventsCallToAction />
</main>