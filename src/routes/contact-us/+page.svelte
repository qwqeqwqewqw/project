<script>
  import ContactHero from "$lib/Components/ContactAboutHero.svelte";

  import ContactForm from "$lib/Components/ContactForm.svelte";
  import ContactMap from "$lib/Components/ContactMap.svelte";
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
  <ContactHero title="Contact Us" description="" subtitle="" />

  <!-- Contact Form -->
  <ContactForm />

  <!-- Map Section -->
  <ContactMap />
</main>
