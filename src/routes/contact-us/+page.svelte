<script>
  import ContactHero from "$lib/ContactAboutHero.svelte";

  import ContactForm from "$lib/ContactForm.svelte";
  import ContactMap from "$lib/ContactMap.svelte";
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
  <ContactHero title="Contact Us" description="Get in touch with us" />

  <!-- Contact Form -->
  <ContactForm />

  <!-- Map Section -->
  <ContactMap />
</main>
