<script>
  let { activeTab } = $props();

  const eventData = {
    weddings: {
      headline: "Destination Weddings in Paradise",
      description: "Planning for a destination wedding in Konkan? We understand that you want to make your social event as memorable as possible. Be it weddings, pre-wedding ceremonies, anniversaries, birthday parties or any social event for that matter, Cherilyn Monta Resort is the best place to celebrate your special moments.",
      details: "The event hall continuing into the green lawns can accommodate people up to a capacity of 300 guests. Additionally, we offer wedding planning services such as floral decorations done by experts, on-demand entertainment and a customizable lip-smacking menu.",
      address: "Plot No. 305 (B), Gorulewadi\nOzer Junction, Oni, Tal. - Rajapur\nRatnagiri, 416705",
      sqFootage: "5000 sq ft",
      capacity: "Up to 300 people",
      amenities: [
        { title: "Bridal suite", subtitle: "Luxury room with vanity" },
        { title: "Open bar", subtitle: "Wood-fired cocktail bar" },
        { title: "Chandeliers", subtitle: "Stunning performance stage lighting" },
        { title: "Dance floor", subtitle: "Polished hardwood patio furniture" }
      ],
      images: [
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    },
    corporate: {
      headline: "Corporate Events & Conferences",
      description: "Cherilyn Monta is not only a place to de-stress and relax but to network. It's ideal for residential corporate programs and day conferences.",
      details: "Our dedicated conference room 'The Verdant' seats up to 100 participants. An amphitheater is also available for key sessions and cultural gatherings. The resort promotes a productive and healthy environment with yoga, fitness routines, wellness consultations, and even adventure activities — redefining your corporate retreat experience.",
      address: "Plot No. 305 (B), Gorulewadi\nOzer Junction, Oni, Tal. - Rajapur\nRatnagiri, 416705",
      sqFootage: "2500 sq ft",
      capacity: "Up to 100 people",
      amenities: [
        { title: "Conference room", subtitle: "The Verdant with A/V setup" },
        { title: "Amphitheater", subtitle: "Natural outdoor venue" },
        { title: "Team building", subtitle: "Adventure activities included" },
        { title: "Catering", subtitle: "Business lunch & coffee breaks" }
      ],
      images: [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    },
    festivals: {
      headline: "Special Festival Celebrations",
      description: "Experience the magic of traditional festivals and seasonal celebrations at Cherilyn Monta Resort. We host spectacular events throughout the year that bring together guests in joyous celebration.",
      details: "From the vibrant colors of Megh Malhar during monsoon season to the sparkling lights of Diwali and the grand New Year celebrations with fireworks over the Konkan coast, each festival is celebrated with authentic traditions, cultural performances, and festive dining experiences.",
      address: "Plot No. 305 (B), Gorulewadi\nOzer Junction, Oni, Tal. - Rajapur\nRatnagiri, 416705",
      sqFootage: "Open spaces",
      capacity: "Up to 300 people",
      amenities: [
        { title: "Cultural shows", subtitle: "Traditional performances" },
        { title: "Festive dining", subtitle: "Special seasonal menus" },
        { title: "Decorations", subtitle: "Authentic festival themes" },
        { title: "Entertainment", subtitle: "Live music & fireworks" }
      ],
      images: [
        "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    }
  };

  $: currentData = eventData[activeTab];
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-12">
      <!-- Left Content -->
      <div class="space-y-8 max-w-4xl">
        <!-- Main Headline -->
        <div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            {currentData.headline}
          </h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>{currentData.description}</p>
            <p>{currentData.details}</p>
          </div>
        </div>

        <!-- Event Details -->
        <div class="grid sm:grid-cols-3 gap-6">
          <!-- Address -->
          <div class="space-y-2">
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">ADDRESS</h4>
            <p class="text-sm text-gray-600 whitespace-pre-line">{currentData.address}</p>
          </div>

          <!-- Square Footage -->
          <div class="space-y-2">
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">SQ. FOOTAGE</h4>
            <p class="text-sm text-gray-600">{currentData.sqFootage}</p>
          </div>

          <!-- Capacity -->
          <div class="space-y-2">
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">CAPACITY</h4>
            <p class="text-sm text-gray-600">{currentData.capacity}</p>
          </div>
        </div>

        <!-- Book Event Button -->
        <div class="pt-4">
          <button class="bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-green-700 transition-colors font-medium">
            BOOK AN EVENT
          </button>
        </div>

        <!-- Amenities -->
        <div class="pt-8 border-t border-gray-200">
          <h3 class="text-2xl font-light text-gray-900 mb-6 font-cursive1">Amenities</h3>
          <div class="grid sm:grid-cols-2 gap-6">
            {#each currentData.amenities as amenity}
              <div class="space-y-1">
                <h4 class="font-medium text-gray-900">{amenity.title}</h4>
                <p class="text-sm text-gray-600">{amenity.subtitle}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Gallery Section -->
      <div class="mt-12">
        <h3 class="text-2xl font-light text-gray-900 mb-6 font-cursive1">Gallery</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each currentData.images as image, index}
          <div class="aspect-square overflow-hidden rounded-lg {index === 0 ? 'col-span-2 sm:col-span-2 lg:col-span-2 aspect-[2/1]' : ''}">
            <img
              src={image}
              alt="Event venue {index + 1}"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
      </div>
    </div>
  </div>
</section>