<script>
  const eventTypes = [
    {
      icon: "💒",
      title: "Weddings",
      description:
        "Create your dream destination wedding with our comprehensive wedding planning services and stunning venues.",
    },
    {
      icon: "🏢",
      title: "Corporate Events",
      description:
        "Professional conferences, team building, and corporate retreats in our dedicated facilities.",
    },
    {
      icon: "🎉",
      title: "Social Celebrations",
      description:
        "Birthdays, anniversaries, family reunions, and other special milestone celebrations.",
    },
    {
      icon: "💍",
      title: "Pre-Wedding Events",
      description:
        "Engagement parties, mehendi ceremonies, sangeet nights, and bachelor/bachelorette parties.",
    },
    {
      icon: "🎭",
      title: "Cultural Events",
      description:
        "Traditional festivals, cultural performances, and community celebrations in authentic Konkan style.",
    },
    {
      icon: "🧘",
      title: "Wellness Retreats",
      description:
        "Yoga retreats, wellness workshops, and holistic healing programs in our serene environment.",
    },
  ];
</script>

<section class="py-15 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2
        class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3"
      >
        Event Types
      </h2>
      <p class="text-sm sm:text-base text-gray-900 max-w-2xl mx-auto">
        From intimate gatherings to grand celebrations, we cater to all your
        special occasions
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each eventTypes as event}
        <div class="flex">
          <div
            class="flex flex-col justify-between bg-orange-50 rounded-2xl p-5 w-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
          >
            <div class="text-center">
              <div class="text-3xl mb-3">{event.icon}</div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p class="text-sm text-gray-900 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
