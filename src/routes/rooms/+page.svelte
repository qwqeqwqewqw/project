<script>
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
  <section class="relative py-20 sm:py-24 lg:py-32 bg-seashellWhite">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <div
          class="font-cursive1 text-[#0a3a8a] text-3xl sm:text-4xl md:text-5xl mb-4"
        >
          Cherilyn Monta Resort
        </div>
        <h1
          class="font-wasted text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-midnight mb-6 leading-tight"
        >
          Rooms & Suites
        </h1>
        <p
          class="text-lg sm:text-xl lg:text-2xl text-midnight leading-relaxed max-w-3xl mx-auto"
        >
          Discover comfort and luxury in every carefully designed space, where
          modern amenities meet timeless elegance.
        </p>
      </div>
    </div>
  </section>

  <!-- Rooms Grid Section -->
  <section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-16 lg:space-y-24">
        {#each rooms as room, index}
          <div
            class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center {index %
              2 ===
            1
              ? 'lg:grid-flow-col-dense'
              : ''}"
          >
            <!-- Image -->
            <div class="relative {index % 2 === 1 ? 'lg:col-start-2' : ''}">
              <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={room.image}
                  alt={room.name}
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-6 {index % 2 === 1 ? 'lg:col-start-1' : ''}">
              <div>
                <h2
                  class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-4"
                >
                  {room.name}
                </h2>
                <p
                  class="text-lg sm:text-xl text-midnight leading-relaxed mb-6"
                >
                  {room.description}
                </p>
              </div>

              <!-- Room Details -->
              <div class="grid sm:grid-cols-3 gap-4 mb-6">
                <div class="bg-cloudWhite p-4 rounded-lg text-center">
                  <div
                    class="text-2xl sm:text-3xl font-bold text-forestGreen mb-1"
                  >
                    {room.size}
                  </div>
                  <div class="text-sm text-midnight">Room Size</div>
                </div>
                <div class="bg-cloudWhite p-4 rounded-lg text-center">
                  <div
                    class="text-2xl sm:text-3xl font-bold text-forestGreen mb-1"
                  >
                    {room.capacity}
                  </div>
                  <div class="text-sm text-midnight">Capacity</div>
                </div>
                <div class="bg-cloudWhite p-4 rounded-lg text-center">
                  <div
                    class="text-2xl sm:text-3xl font-bold text-forestGreen mb-1"
                  >
                    {room.price}
                  </div>
                  <div class="text-sm text-midnight">Per Night</div>
                </div>
              </div>

              <!-- Features -->
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-midnight mb-3">
                  Key Features
                </h3>
                <div class="grid sm:grid-cols-2 gap-2">
                  {#each room.features as feature}
                    <div class="flex items-center space-x-2">
                      <svg
                        class="w-5 h-5 text-forestGreen flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-midnight">{feature}</span>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Amenities -->
              <div class="mb-8">
                <h3 class="text-xl font-semibold text-midnight mb-3">
                  Amenities
                </h3>
                <div class="flex flex-wrap gap-2">
                  {#each room.amenities as amenity}
                    <span
                      class="bg-sageGreen/20 text-forestGreen px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  {/each}
                </div>
              </div>

              <!-- Book Now Button -->
              <div class="pt-4">
                <a href={`/book/${room.id}`} class="inline-block">
                  <button
                    class="btn bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
                  >
                    Book {room.name}
                  </button>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-16 sm:py-20 lg:py-24 bg-skyBlue">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-3xl mx-auto">
        <h2
          class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-6"
        >
          Ready to Experience Luxury?
        </h2>
        <p class="text-lg sm:text-xl text-midnight mb-8 leading-relaxed">
          Book your perfect room today and create unforgettable memories at
          Cherilyn Monta Resort.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="btn btn-outline border-forestGreen text-forestGreen hover:bg-forestGreen hover:text-white transition-all duration-300 px-8 py-3 text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
</main>
