<script>
  import { IconLeaf, IconHeart, IconStar, IconUsers } from '@tabler/icons-svelte';
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-cloudWhite">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 sm:mb-16">
      <h2
        class="new-icon-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-midnight mb-4"
      >
        Our Values
      </h2>
      <p
        class="text-base sm:text-lg lg:text-xl text-midnight max-w-2xl mx-auto"
      >
        The principles that guide us in creating exceptional experiences for our guests
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <!-- Quality -->
      <div class="text-center group">
        <div
          class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forestGreen/20 transition-colors duration-300"
        >
          <IconStar class="w-8 h-8 text-forestGreen" />
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
          Quality
        </h3>
        <p class="text-midnight leading-relaxed">
          Unwavering commitment to excellence in every aspect of our service and facilities.
        </p>
      </div>

      <!-- Environment -->
      <div class="text-center group">
        <div
          class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forestGreen/20 transition-colors duration-300"
        >
          <IconLeaf class="w-8 h-8 text-forestGreen" />
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
          Environment
        </h3>
        <p class="text-midnight leading-relaxed">
          Deep concern for environmental sustainability and preserving the natural beauty of Konkan.
        </p>
      </div>

      <!-- Hospitality -->
      <div class="text-center group">
        <div
          class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forestGreen/20 transition-colors duration-300"
        >
          <IconHeart class="w-8 h-8 text-forestGreen" />
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
          Hospitality
        </h3>
        <p class="text-midnight leading-relaxed">
          Warm, authentic Konkan hospitality that makes every guest feel at home.
        </p>
      </div>

      <!-- Community -->
      <div class="text-center group">
        <div
          class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forestGreen/20 transition-colors duration-300"
        >
          <IconUsers class="w-8 h-8 text-forestGreen" />
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
          Community
        </h3>
        <p class="text-midnight leading-relaxed">
          Supporting local communities and showcasing the rich cultural heritage of the region.
        </p>
      </div>
    </div>
  </div>
</section>