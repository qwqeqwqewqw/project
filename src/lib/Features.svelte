<script>
  const features = [
    {
      title: "Yoga and Forest therapy",
      description:
        "Rejuvenate your mind and body with our comprehensive wellness services.",
      image: "yoga.png",
    },
    {
      title: "Swimming Pool",
      description:
        "Take a dip in the waters of our swimming pool and relax on the lounge chairs.",
      image: "/swimming.png",
    },
    {
      title: "Traditional Konkan Cuisine",
      description: "Relish traditional konkani cuisine made by local chefs",
      image: "food.png",
    },
  ];
</script>

<section class="py-16 px-12 sm:py-20 lg:py-24 bg-freshCream">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 sm:mb-16 lg:mb-20">
      <h2
        class="font-wasted text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-midnight mb-4 sm:mb-6"
      >
        Exceptional Experiences
      </h2>
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-midnight max-w-3xl mx-auto leading-relaxed"
      >
        Every moment at Cherilyn Monta is carefully curated to create
        unforgettable memories
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {#each features as feature}
        <div
          class="card bg-cloudWhite shadow-xl hover:shadow-2xl transition-all duration-300 border border-skyBlue/20 group"
        >
          <figure class="aspect-[4/3] overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </figure>
          <div class="card-body p-6 sm:p-8">
            <h3
              class="card-title font-semibold text-midnight mb-3 sm:mb-2 text-2xl sm:text-3xl lg:text-4xl xl:text-3xl"
            >
              {feature.title}
            </h3>
            <p
              class="text-midnight text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
