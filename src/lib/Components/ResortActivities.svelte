<script>
  import { IconChevronRight } from "@tabler/icons-svelte";
  import { activityCategories } from "$lib/Data/data";
</script>

<section class="py-16 pt-12 bg-light-blue">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="font-wasted text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
        Activities
      </h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-base sm:text-md text-gray-900 leading-relaxed mb-6">
          Say goodbye to your digital screens to now de-stress and recharge your
          body and soul. Cherilyn Monta, a paradise hideaway where luxurious
          seclusion meets exotic natural beauty, offers a wide array of
          activities.
        </p>
      </div>
    </div>

    <!-- Activities Grid -->
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
      {#each activityCategories as category}
        <div class="space-y-6">
          <!-- Category Header -->
          <div class="text-center lg:text-left">
            <h3 class="text-2xl sm:text-2xl font-bold text-almaris-blue mb-2">
              {category.title}
            </h3>
          </div>

          <!-- Activities Cards -->
          <div class="grid sm:grid-cols-2 gap-4">
            {#each category.activities as activity}
              <div
                class="group {category.bgColor} {category.borderColor} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div class="flex items-start space-x-3">
                  <!-- Icon -->
                  <div
                    class="flex-shrink-0 w-10 h-10 {category.iconBg} rounded-lg flex items-center justify-center text-white text-lg"
                  >
                    {activity.icon}
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <h4
                      class="font-semibold text-gray-900 text-base sm:text-lg mb-1 transition-colors"
                    >
                      {activity.name}
                    </h4>
                    <p class="text-sm text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  <!-- Arrow Icon -->
                  <div
                    class="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <IconChevronRight class="w-5 h-5 text-gray-400 " />
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <div
        class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto"
      >
        <h3 class="text-2xl font-bold text-almaris-gold mb-1">
          Ready for Adventure?
        </h3>
        <p class="text-gray-600 mb-6 leading-relaxed">
          Book your stay and experience all these amazing activities included in
          your resort package.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/rooms"
            class="btn bg-almaris-blue text-white border-0  transition-all duration-300 px-6 py-3"
          >
            Book Your Stay
          </a>
          <a
            href="/contact-us"
            class="btn btn-outline border-almaris-blue text-almaris-blue hover:bg-almaris-blue hover:text-white transition-all duration-300 px-6 py-3"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
