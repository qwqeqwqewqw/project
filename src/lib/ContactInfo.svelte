<script>
  import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-svelte';
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Address Section -->
    <div class="text-center mb-16">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6 leading-relaxed">
          Plot No. 305(B), Gorulewadi, Ozer Junction, Oni,<br />
          Tal. - Rajapur, Ratnagiri 416705,<br />
          MAHARASHTRA, INDIA.
        </h2>
        <button class="bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-green-700 transition-colors rounded-none">
          FIND US ON MAP
        </button>
      </div>
    </div>

    <!-- Contact Methods -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <!-- Make a Call -->
      <div class="text-center group">
        <div class="w-16 h-16 bg-transparent border border-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors duration-300">
          <IconPhone class="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2 uppercase tracking-wide">Make a Call</h3>
        <p class="text-gray-600 text-sm mb-4">Make a call for your general inquiries</p>
        <a href="tel:+918181824242" class="text-green-700 hover:text-green-600 transition-colors font-light">
          +91 8181 82 4242
        </a>
      </div>

      <!-- Send a Mail -->
      <div class="text-center group">
        <div class="w-16 h-16 bg-transparent border border-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors duration-300">
          <IconMail class="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2 uppercase tracking-wide">Send a Mail</h3>
        <p class="text-gray-600 text-sm mb-4">Send your mail for general inquiries</p>
        <a href="mailto:Rosaalba@cherilynmonta.com" class="text-green-700 hover:text-green-600 transition-colors font-light">
          Rosaalba@cherilynmonta.com
        </a>
      </div>

      <!-- Toll Free -->
      <div class="text-center group">
        <div class="w-16 h-16 bg-transparent border border-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors duration-300">
          <IconPhone class="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2 uppercase tracking-wide">Toll Free</h3>
        <p class="text-gray-600 text-sm mb-4">Toll free number for sharing greets</p>
        <a href="tel:+918181825252" class="text-green-700 hover:text-green-600 transition-colors font-light">
          +91 8181 82 5252
        </a>
      </div>
    </div>
  </div>
</section>