<script>
  const features = [
    {
      title: "Luxury Amenities",
      description:
        "Experience world-class facilities designed for your comfort and relaxation.",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Fine Dining",
      description:
        "Savor exquisite culinary experiences crafted by renowned local chefs.",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Spa & Wellness",
      description:
        "Rejuvenate your mind and body with our comprehensive wellness services.",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
</script>

<section class="py-20 bg-freshCream">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="new-icon-serif text-4xl md:text-7xl text-midnight mb-4">
        Exceptional Experiences
      </h2>
      <p class="text-lg md:text-2xl text-midnight max-w-2xl mx-auto">
        Every moment at Hotel Scape is carefully curated to create unforgettable
        memories
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each features as feature}
        <div
          class="card bg-cloudWhite shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-skyBlue/20"
        >
          <figure class="aspect-[4/3]">
            <img
              src={feature.image}
              alt={feature.title}
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body p-8">
            <h3
              class="card-title new-icon-serif font-semibold text-midnight mb-4 text-4xl md:text-5xl"
            >
              {feature.title}
            </h3>
            <p class="text-midnight text-[1.4rem] leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
