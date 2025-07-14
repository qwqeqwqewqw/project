<script>
  import {
    IconRocket,
    IconHeart,
    IconScale,
    IconUsersGroup,
    IconHeartHandshake,
    IconBulb,
  } from "@tabler/icons-svelte";

  const values = [
    {
      icon: IconRocket,
      title: "Performance",
      description:
        "Striving for excellence and continuous improvement in all our services and operations.",
    },
    {
      icon: IconHeart,
      title: "Respect",
      description:
        "Treating every guest, employee, and partner with dignity, empathy, and fairness.",
    },
    {
      icon: IconScale,
      title: "Integrity",
      description:
        "Upholding the highest ethical standards and transparency in all our dealings.",
    },
    {
      icon: IconUsersGroup,
      title: "Teamwork",
      description:
        "Collaborating effectively to achieve shared goals and deliver seamless experiences.",
    },
    {
      icon: IconHeartHandshake,
      title: "Humanity",
      description:
        "Fostering a compassionate and inclusive environment for everyone.",
    },
    {
      icon: IconBulb,
      title: "Innovation",
      description:
        "Embracing creativity and new ideas to enhance guest experiences and operational efficiency.",
    },
  ];
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2
        class="new-icon-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4"
      >
        Our Values
      </h2>
      <p class="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto">
        The principles that guide us in creating exceptional experiences for our
        guests
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each values as { icon, title, description }}
        <div
          class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
        >
          <div class="text-center mb-6">
            <div
              class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svelte:component this={icon} class="w-6 h-6 text-green-700" />
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
          </div>
          <p class="text-gray-900 text-center leading-relaxed text-md">
            {description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
