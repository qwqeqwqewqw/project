<script>
  import RoomsHero from "$lib/RoomsHero.svelte";
  import RoomsGrid from "$lib/RoomsGrid.svelte";
  import RoomsCallToAction from "$lib/RoomsCallToAction.svelte";

  const rooms = [
    {
      id: 1,
      name: "Suite",
      image: "/suites.png",
      description:
        "Elegant and comfortable suites designed for relaxation and luxury. Perfect for couples seeking a romantic getaway.",
      features: [
        "King Size Bed",
        "Private Balcony",
        "Mini Bar",
        "Free WiFi",
        "Room Service",
      ],
      size: "450 sq ft",
      capacity: "2 Guests",
      price: "₹8,500",
      amenities: [
        "Air Conditioning",
        "Flat Screen TV",
        "Coffee Maker",
        "Safe",
        "Bathrobe & Slippers",
      ],
    },
    {
      id: 2,
      name: "Deluxe Suite",
      image: "/delux.png",
      description:
        "Spacious deluxe suites offering enhanced comfort with premium amenities and stunning views of the surrounding landscape.",
      features: [
        "King Size Bed",
        "Separate Living Area",
        "Premium Mini Bar",
        "Free WiFi",
        "24/7 Room Service",
      ],
      size: "650 sq ft",
      capacity: "3 Guests",
      price: "₹12,500",
      amenities: [
        "Premium Air Conditioning",
        "Smart TV",
        "Espresso Machine",
        "In-room Safe",
        "Luxury Toiletries",
      ],
    },
    {
      id: 3,
      name: "Super Deluxe Suite",
      image: "/superdelux.png",
      description:
        "Our most luxurious suites featuring exceptional space, premium furnishings, and exclusive amenities for the ultimate experience.",
      features: [
        "King Size Bed",
        "Spacious Living Room",
        "Premium Bar",
        "High-Speed WiFi",
        "Butler Service",
      ],
      size: "850 sq ft",
      capacity: "4 Guests",
      price: "₹18,500",
      amenities: [
        "Climate Control",
        "Premium Entertainment System",
        "Nespresso Machine",
        "Personal Safe",
        "Designer Amenities",
      ],
    },
    {
      id: 4,
      name: "Bungalow",
      image: "/Bunglow.png",
      description:
        "Private bungalows offering complete privacy and independence with all modern amenities in a serene natural setting.",
      features: [
        "Multiple Bedrooms",
        "Private Garden",
        "Full Kitchen",
        "Free WiFi",
        "Dedicated Staff",
      ],
      size: "1200 sq ft",
      capacity: "6 Guests",
      price: "₹25,000",
      amenities: [
        "Central Air Conditioning",
        "Home Theater",
        "Full Kitchen",
        "Private Parking",
        "Concierge Service",
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