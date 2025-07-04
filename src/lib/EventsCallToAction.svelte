<script>
  import { IconPhone, IconMail } from '@tabler/icons-svelte';
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-skyBlue">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="max-w-3xl mx-auto">
      <h2
        class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-6"
      >
        Ready to Plan Your Event?
      </h2>
      <p class="text-lg sm:text-xl text-midnight mb-8 leading-relaxed">
        Let our expert team help you create an unforgettable experience at Cherilyn Monta Resort. From intimate gatherings to grand celebrations, we make every moment special.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="btn bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
        >
          Plan Your Event
        </button>
        <button
          class="btn btn-outline border-forestGreen text-forestGreen hover:text-white hover:bg-forestGreen transition-all duration-300 px-8 py-3 text-lg"
        >
          Download Brochure
        </button>
      </div>
      
      <!-- Contact Information -->
      <div class="mt-12 pt-8 border-t border-midnight/20">
        <h3 class="text-xl font-semibold text-midnight mb-4">Get in Touch</h3>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 text-midnight">
          <div class="flex items-center space-x-2">
            <IconPhone class="w-5 h-5 text-forestGreen" />
            <span>+91 7719036036</span>
          </div>
          <div class="flex items-center space-x-2">
            <IconMail class="w-5 h-5 text-forestGreen" />
            <span>events@cherilynmonta.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>