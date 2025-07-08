<script>
  import ExperiencesPageHeader from "$lib/ExperiencesPageHeader.svelte";
  import ExperiencesHero from "$lib/ExperiencesHero.svelte";
  import ExperiencesGrid from "$lib/ExperiencesGrid.svelte";

  let activeFilter = $state('all');

  // Experiences data with better images and descriptions
  const experiences = [
    {
      id: 1,
      name: "Ganpati Pule",
      distance: "81 Km",
      category: "beaches",
      image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Famous pilgrimage beach destination with the renowned Ganpati temple and pristine coastline perfect for spiritual seekers."
    },
    {
      id: 2,
      name: "Tarkarli Beach",
      distance: "120 Km",
      category: "beaches",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Crystal clear waters perfect for water sports, snorkeling, and beach activities with white sandy shores."
    },
    {
      id: 3,
      name: "Kunkeshwar Mandir",
      distance: "70 Km",
      category: "temple",
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ancient Shiva temple located on the seashore, offering spiritual serenity and breathtaking ocean views."
    },
    {
      id: 4,
      name: "Sindhudurg Fort",
      distance: "119 Km",
      category: "fort",
      image: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Historic sea fort built by Chhatrapati Shivaji Maharaj, showcasing magnificent Maratha naval architecture."
    },
    {
      id: 5,
      name: "Devgad Beach",
      distance: "60 Km",
      category: "beaches",
      image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Serene beach known for its famous Alphonso mangoes and peaceful coastal atmosphere away from crowds."
    },
    {
      id: 6,
      name: "Ambolgad Beach",
      distance: "50 Km",
      category: "beaches",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hidden gem with golden sands and clear waters, perfect for a quiet beach day and romantic sunsets."
    },
    {
      id: 7,
      name: "Are Ware",
      distance: "59 Km",
      category: "sightseeing",
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Scenic viewpoint offering panoramic views of the Konkan coastline and surrounding lush green hills."
    },
    {
      id: 8,
      name: "Savatkada Waterfall",
      distance: "8 Km",
      category: "sightseeing",
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Beautiful waterfall surrounded by lush greenery, perfect for nature lovers, photography, and monsoon visits."
    }
  ];

  function handleFilterChange(filterId) {
    activeFilter = filterId;
  }
</script>

<svelte:head>
  <title>Experiences - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Discover amazing experiences around Cherilyn Monta Resort. Explore beaches, temples, forts, and sightseeing spots in the beautiful Konkan region."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Page Header -->
  <ExperiencesPageHeader />

  <!-- Hero Section with Filters -->
  <ExperiencesHero {activeFilter} onFilterChange={handleFilterChange} />

  <!-- Experiences Grid -->
  <ExperiencesGrid {experiences} {activeFilter} />
</main>