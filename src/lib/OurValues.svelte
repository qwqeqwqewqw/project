<script>
  import { IconRocket, IconHeart, IconScale, IconUsersGroup, IconHeartHandshake, IconLightbulb } from '@tabler/icons-svelte';
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

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <!-- Performance -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconRocket class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Performance
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Striving for excellence and continuous improvement in all our services and operations.
        </p>
      </div>

      <!-- Respect -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconHeart class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Respect
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Treating every guest, employee, and partner with dignity, empathy, and fairness.
        </p>
      </div>

      <!-- Integrity -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconScale class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Integrity
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Upholding the highest ethical standards and transparency in all our dealings.
        </p>
      </div>

      <!-- Teamwork -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconUsersGroup class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Teamwork
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Collaborating effectively to achieve shared goals and deliver seamless experiences.
        </p>
      </div>

      <!-- Humanity -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconHeartHandshake class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Humanity
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Fostering a compassionate and inclusive environment for everyone.
        </p>
      </div>

      <!-- Innovation -->
      <div class="bg-cloudWhite rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-skyBlue/20">
        <div class="text-center mb-6">
          <div
            class="w-12 h-12 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <IconLightbulb class="w-6 h-6 text-forestGreen" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-midnight mb-3">
            Innovation
          </h3>
        </div>
        <p class="text-midnight text-center leading-relaxed">
          Embracing creativity and new ideas to enhance guest experiences and operational efficiency.
        </p>
      </div>
    </div>
  </div>
</section>