<script>
  let activeTab = "weddings";

  const tabs = [
    { id: "weddings", label: "WEDDINGS" },
    { id: "corporate", label: "CORPORATE" },
    { id: "festivals", label: "FESTIVALS" },
  ];

  const eventData = {
    weddings: {
      headline: "Destination Weddings in Paradise",
      bannerText: "Tie the knot amidst verdant lawns & coastal sunsets.",
      description:
        "Planning for a destination wedding in Konkan? We understand that you want to make your social event as memorable as possible. Be it weddings, pre-wedding ceremonies, anniversaries, birthday parties or any social event for that matter, Cherilyn Monta Resort is the best place to celebrate your special moments.",
      details:
        "The event hall continuing into the green lawns can accommodate people up to a capacity of 300. Additionally, we offer wedding planning services such as floral decorations done by experts, on-demand entertainment and a customizable lip-smacking menu.",
      capacity: "Up to 300 people",
      amenities: [
        { title: "Bridal suite", subtitle: "Luxury room with vanity" },
        { title: "Open bar", subtitle: "Wood‑fired cocktail bar" },
        { title: "Chandeliers", subtitle: "Stunning stage lighting" },
        { title: "Dance floor", subtitle: "Polished hardwood patio" },
      ],
      images: [
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    corporate: {
      headline: "Corporate Events & Conferences",
      bannerText: "Where strategy meets serenity.",
      description:
        "Cherilyn Monta is not only a place to de-stress and relax but to network. Cherilyn Monta can be used extensively by corporate houses for both residential programs and day conferences.",
      details:
        "We have a dedicated conference room called “The Verdant” with a seating capacity of up to 100 participants. There is also an amphitheater to host important programs. Cherilyn Monta provides a healthy environment for intensive training sessions. Complement this with morning yoga and a fitness regime, health consultations, wellness advice, and adventure sports, and you will be thrilled at being provided with a different experience altogether.",
      capacity: "Up to 100 people",
      amenities: [
        { title: "Conference room", subtitle: "The Verdant, full A/V" },
        { title: "Amphitheatre", subtitle: "Natural outdoor venue" },
        { title: "Team building", subtitle: "Adventure activities" },
        { title: "Catering", subtitle: "Business lunch breaks" },
      ],
      images: [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    festivals: {
      headline: "Special Festival Celebrations",
      bannerText: "Celebrate every colour of Konkan.",
      description:
        "Experience the magic of traditional festivals and seasonal celebrations at Cherilyn Monta Resort. Each celebration is thoughtfully curated to bring out the beauty, color, and community spirit of Konkan through authentic food, decor, music, and joyful gatherings.",
      details:
        "From Megh Malhar in monsoon to Diwali lights and spectacular New Year fireworks—each festival is celebrated with authenticity, culture, and guest engagement. Whether it’s the celebration of rain, color, fruit, or heritage — every occasion is an immersive memory.",
      capacity: "Up to 300 people",
      images: [
        "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
  };

  const festivalsList = [
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

  $: current = eventData[activeTab];
</script>

<!-- Banner -->
<div class="relative h-52 sm:h-64 lg:h-72 overflow-hidden">
  <img
    src={current.images[0]}
    alt="Banner"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 flex items-center justify-center h-full px-4">
    <p class="text-white font-cursive1 text-lg lg:text-xl text-center max-w-xl">
      {current.bannerText}
    </p>
  </div>
</div>

<!-- Tabs -->
<nav class="bg-white border-b">
  <div class="max-w-6xl mx-auto px-4">
    <ul class="flex justify-center text-sm">
      {#each tabs as { id, label }}
        <li>
          <button
            on:click={() => (activeTab = id)}
            class="px-6 py-3 border-b-2 transition {activeTab === id
              ? 'text-green-700 border-green-700'
              : 'text-gray-600 border-transparent hover:text-green-700 hover:border-green-400'}"
          >
            {label}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<!-- Content -->
<section class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 space-y-12">
    <article class="space-y-6">
      <h2 class="text-3xl font-light text-gray-900">{current.headline}</h2>
      <div class="space-y-4 text-gray-600 text-base">
        <p>{current.description}</p>
        <p>{current.details}</p>
      </div>
      <div class="pt-4">
        <h3 class="text-xs font-semibold tracking-widest text-gray-900">
          CAPACITY
        </h3>
        <p class="text-sm text-gray-600">{current.capacity}</p>
      </div>
      <button
        class="mt-6 bg-gray-900 hover:bg-green-700 text-white text-sm uppercase tracking-wide px-6 py-3 rounded"
        >Book an Event</button
      >
    </article>

    <!-- Conditional Amenities or Festival Cards -->
    <section class="py-10">
      {#if activeTab === "festivals"}
        <div class="max-w-[100rem] mx-auto space-y-10">
          <h3
            class="text-center text-3xl font-serif font-semibold text-gray-800 mb-6"
          >
            Festival Highlights
          </h3>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[150rem]">
            {#each festivalsList as fest}
              <div class="bg-white shadow rounded-xl overflow-hidden">
                <img
                  src={fest.image}
                  alt={fest.alt}
                  class="w-full h-48 object-cover"
                />
                <div class="p-5 space-y-2">
                  <h4 class="text-lg font-semibold text-gray-800">
                    {fest.title}
                  </h4>
                  <p class="text-sm text-gray-600">{fest.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div
          class="relative max-w-4xl mx-auto bg-white px-6 py-10 shadow-xl rounded-3xl border border-gray-200"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"
          ></div>
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"
          ></div>
          <div
            class="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-100 pointer-events-none"
          ></div>
          <h3
            class="text-center text-3xl font-serif font-semibold text-gray-800 mb-8"
          >
            Our Signature Amenities
          </h3>
          <div class="grid sm:grid-cols-2 gap-6 relative z-10">
            {#each current.amenities as a}
              <div class="flex items-start gap-3">
                <span class="text-yellow-500 text-lg pt-1">✦</span>
                <div>
                  <div class="text-base font-medium text-gray-900">
                    {a.title}
                  </div>
                  <div class="text-sm text-gray-500">{a.subtitle}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </section>

    <!-- Gallery -->
    <section class="pt-8">
      <h3 class="font-cursive1 text-xl text-gray-900 mb-4">Gallery</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each current.images as img, i}
          <figure class="overflow-hidden rounded-lg aspect-square">
            <img
              src={img}
              alt={`Event image ${i + 1}`}
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </figure>
        {/each}
      </div>
    </section>
  </div>
</section>
