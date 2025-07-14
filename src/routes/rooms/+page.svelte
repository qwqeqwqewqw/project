<script>
  import RoomsHero from "$lib/RoomsHero.svelte";
  import RoomsGrid from "$lib/RoomsGrid.svelte";
  import RoomsCallToAction from "$lib/RoomsCallToAction.svelte";

  const rooms = [
    {
      id: 1,
      name: "Studio",
      image: "/studio/studio2.png",
      description:
        "Chalet-style suites feature eco-friendly bamboo furnishings, yellow ambient lighting, and large windows with forest views. Designed for comfort and serenity.",
      features: [
        "1 Queen Size Bed",
        "2 Single Beds",
        "Free WiFi",
        "Room Service",
      ],
      capacity: "4 Guests",
      price: "₹3,500",
      amenities: [
        "Air Conditioning",
        "Flat Screen TV",
        "Safe",
        "Bathrobe & Slippers",
        "Toiletries",
      ],
    },
    {
      id: 2,
      name: "Deluxe Suite",
      image: "/delux/delux2.png",
      description:
        "Deluxe Suites are spacious, chalet-style rooms ideal for families or groups, featuring separate beds for kids. Include a front veranda and natural ventilation.",
      features: [
        "Queen Size Bed",
        "Free WiFi",
        "Room Service",
        "Luxurious Interior",
      ],

      capacity: "2 Guests",
      price: "₹3,700",
      amenities: [
        "Air Conditioning",
        "Flat Screen TV",
        "In-room Safe",
        "Bathrobe & Slippers",
        "Luxury Toiletries",
      ],
    },
    {
      id: 3,
      name: "Super Deluxe Suite",
      image: "/superdelux/superdelux2.png",
      description:
        "Super Deluxe Suites are perfect for large families, with colorful interiors and garden-view balconies. Blends Konkan charm with luxury.",
      features: [
        "Queen Size Bed",
        "Spacious Living Space",
        "Free WiFi",
        "Private Balcony",
      ],

      capacity: "2 Guests",
      price: "₹4,000",
      amenities: [
        "Air Conditioning",
        "Flat Screen TV",
        "In-room Safe",
        "Bathrobe & Slippers",
        "Luxury Toiletries",
      ],
    },
    {
      id: 4,
      name: "Bungalow (2/3/4 BHK)",
      image: "/bunglow/bunglow2.png",
      description:
        "Private bungalows offering complete privacy and independence with all modern amenities in a serene natural setting.",
      features: [
        "2 Queen Size Beds",
        "Private Pool *",
        "Full Kitchen",
        "Free WiFi",
        "Room Service",
      ],

      capacity: "4/6/8 Guests",
      price: "₹ 4000/5000/4500",
      amenities: [
        "Air Conditioning",
        "Bathrobe & Slippers",
        "Luxury Toiletries",
        "Full Kitchen",
        "Private Bathrooms",
      ],
    },
  ];
</script>

<svelte:head>
  <title>Rooms & Suites - Cherilyn Monta Resort</title>
  <meta
    name="description"
    content="Discover our luxurious rooms and suites at Cherilyn Monta Resort. From elegant suites to private bungalows, find your perfect accommodation."
  />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <RoomsHero />

  <!-- Rooms Grid Section -->
  <RoomsGrid {rooms} />

  <!-- Call to Action Section -->
  <RoomsCallToAction />
</main>
