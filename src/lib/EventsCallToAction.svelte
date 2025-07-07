<script>
  import { IconPhone, IconMail } from "@tabler/icons-svelte";
</script>

<section class="py-15 bg-blue-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="max-w-3xl mx-auto">
      <h2
        class="new-icon-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4"
      >
        Ready to Plan Your Event?
      </h2>
      <p class="text-sm sm:text-base text-gray-900 mb-6 leading-relaxed">
        Let our expert team help you create an unforgettable experience at
        Cherilyn Monta Resort. From intimate gatherings to grand celebrations,
        we make every moment special.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/contact-us"
          class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 hover:scale-105 px-6 py-2 text-sm"
        >
          Plan Your Event
        </a>
        <a
          href=""
          download="CherilynMonta_Brochure.pdf"
          class="btn btn-outline border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-300 px-6 py-2 text-sm inline-block text-center"
        >
          Download Brochure
        </a>
      </div>

      <!-- Contact Information -->
      <div class="mt-10 pt-6 border-t border-gray-400">
        <h3 class="text-base font-semibold text-gray-900 mb-3">Get in Touch</h3>
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-900"
        >
          <div class="flex items-center space-x-2">
            <IconPhone class="w-4 h-4 text-green-700" />
            <span>+91 7719036036</span>
          </div>
          <div class="flex items-center space-x-2">
            <IconMail class="w-4 h-4 text-green-700" />
            <span>events@cherilynmonta.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
