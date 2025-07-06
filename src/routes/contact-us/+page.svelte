<script>
  import ContactHero from "$lib/ContactHero.svelte";
  import ContactInfo from "$lib/ContactInfo.svelte";
  import LocationMap from "$lib/LocationMap.svelte";
</script>

<svelte:head>
  <title>Contact Us - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Get in touch with Cherilyn Monta Resort. Contact us for bookings, events, or general inquiries. Located in Ratnagiri, Maharashtra."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <ContactHero />

  <!-- Contact Information -->
  <ContactInfo />

  <!-- Location Map -->
  <LocationMap />
</main>