<script>
  import { IconPlayerPlayFilled } from "@tabler/icons-svelte";
</script>

<section class="py-16 sm:py-20 lg:py-15 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
      <!-- Left Image - Made taller -->
      <div class="relative lg:order-1">
        <div class=" rounded-2xl overflow-hidden shadow-xl h-120">
          <img
            src="/gate.png"
            alt="Cherilyn Monta Resort entrance"
            class="w-full h-full object-cover"
          />
          <!-- Dark overlay for better text readability -->
        </div>

        <!-- Watch Video Button - positioned at bottom left of image -->
        <div class="absolute bottom-6 left-6 z-20">
          <button
            class="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 bg-almaris-blue rounded-full flex items-center justify-center"
            >
              <IconPlayerPlayFilled size={24} stroke={2} class="text-white" />
            </div>
            <span class="text-gray-900 font-medium">WATCH VIDEO</span>
          </button>
        </div>
      </div>

      <!-- Right Content - positioned at top right, overlapping the image -->
      <div class="relative lg:order-2 lg:-ml-26 lg:-mt-7 z-10">
        <div class="bg-white p-8 lg:p-8 rounded-2xl shadow-xl">
          <!-- Small heading -->
          <div
            class="text-sm uppercase tracking-wider text-almaris-gold mb-3 font-light"
          >
            WELCOME TO CHERILYN MONTA
          </div>

          <!-- Main heading -->
          <h2
            class="text-3xl sm:text-4xl lg:text-4xl font-wasted text-almaris-blue leading-tight mb-6"
          >
            Exceptional Hospitality Timeless Elegance
          </h2>

          <!-- Description -->
          <div class="text-gray-900 leading-relaxed space-y-4">
            <p>
              Cherilyn Monta – We have established a reputation as real estate
              developers who have built not just homes but lifestyles. A
              reputation based on a track record of promoting and marketing
              innovative real estate projects.
            </p>
            <p>
              Since 1997 we have track record for our steadfast commitment to
              building Top Class Landmarks – Refined in Appearance with an
              emphasis on Quality and Concern for the Environment.
            </p>
          </div>
        </div>

        <!-- Statistics positioned outside the image, below the content box -->
        <div class="mt-8 lg:mt-15 grid grid-cols-2 gap-8 lg:ml-15">
          <div class="text-center">
            <div class="text-3xl font-bold text-almaris-gold mb-1">25 +</div>
            <div class="text-xs sm:text-sm text-black uppercase tracking-wide">
              Years of Hospitality Excellence
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-almaris-gold mb-1">
              10 Acres
            </div>
            <div class="text-xs sm:text-sm text-black uppercase tracking-wide">
              of Lush Green Property
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
