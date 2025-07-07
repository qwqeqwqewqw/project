<script>
  const events = [
    {
      title: "Megh Malhar",
      description:
        "Celebrate the monsoon season with traditional music, dance, and the beauty of rain-soaked Konkan landscapes.",
      image: "/megh-malhar.jpg",
      alt: "Megh Malhar - Monsoon Festival",
    },
    {
      title: "Diwali Celebrations",
      description:
        "Experience the festival of lights with traditional decorations, cultural performances, and festive dining.",
      image: "/diwali.jpg",
      alt: "Diwali Celebrations",
    },
    {
      title: "New Year Celebrations",
      description:
        "Welcome the new year with grand celebrations, live entertainment, and spectacular fireworks over the Konkan coast.",
      image:
        "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "New Year Celebrations",
    },
    {
      title: "Ranga Barase",
      description:
        "A vibrant celebration of colors, music, and joy, bringing together guests in a festival of unity and happiness.",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Ranga Barase - Color Festival",
    },
    {
      title: "Mango Fest",
      description:
        "Celebrate the king of fruits with mango-themed cuisine, tastings, and cultural activities during mango season.",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mango Festival",
    },
    {
      title: "Cultural Heritage",
      description:
        "Experience authentic Konkan culture through folk performances, traditional crafts, and local storytelling sessions.",
      image: "/heritage.jpg",
      alt: "Cultural Heritage Events",
    },
  ];
</script>

<section class="py-15 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2
        class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3"
      >
        Special Events at Resort
      </h2>
      <p class="text-sm sm:text-base text-gray-900 max-w-2xl mx-auto">
        Join us for our signature celebrations throughout the year
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
      {#each events as event}
        <div class="h-full">
          <div
            class="bg-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <!-- Image -->
            <div class="aspect-[16/6] overflow-hidden">
              <img
                src={event.image}
                alt={event.alt}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content -->
            <div class="p-5 text-center min-h-[140px] lg:min-h-[160px]">
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p class="text-sm text-gray-900 leading-normal">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
