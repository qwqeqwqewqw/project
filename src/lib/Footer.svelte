<script>
  import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconMapPin, IconPhone, IconMail } from '@tabler/icons-svelte';
</script>

<footer class="bg-midnight text-cloudWhite py-12 sm:py-16 lg:py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
      <!-- Hotel Logo and Description -->
      <div class="sm:col-span-2 space-y-6">
        <div class="flex items-center space-x-2">
          <a href="/" class="flex items-center space-x-2">
            <img
              src="/footerlogo.png"
              alt="Hotel Scape Logo"
              class="h-16 sm:h-20 w-auto"
            />
          </a>
        </div>
        <p class="text-skyBlue leading-relaxed max-w-md text-sm sm:text-base">
          Creating memorable experiences through exceptional hospitality, where
          every stay becomes a cherished memory rich in emotions.
        </p>
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-skyBlue hover:text-sageGreen transition-colors"
            aria-label="Twitter"
          >
            <IconBrandTwitter class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="#"
            class="text-skyBlue hover:text-sageGreen transition-colors"
            aria-label="Facebook"
          >
            <IconBrandFacebook class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="#"
            class="text-skyBlue hover:text-sageGreen transition-colors"
            aria-label="Instagram"
          >
            <IconBrandInstagram class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4 sm:space-y-6">
        <h3 class="text-lg sm:text-xl font-semibold text-sageGreen">
          Quick Links
        </h3>
        <ul class="space-y-2 sm:space-y-3 text-skyBlue text-sm sm:text-base">
          <li>
            <a href="/rooms" class="hover:text-sageGreen transition-colors"
              >Rooms & Suites</a
            >
          </li>
          <li>
            <a href="/dining" class="hover:text-sageGreen transition-colors"
              >Dining</a
            >
          </li>
          <li>
            <a href="/activities" class="hover:text-sageGreen transition-colors"
              >Activities</a
            >
          </li>
          <li>
            <a href="/events" class="hover:text-sageGreen transition-colors"
              >Events</a
            >
          </li>
          <li>
            <a
              href="/attractions"
              class="hover:text-sageGreen transition-colors">Attractions</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4 sm:space-y-6">
        <h3 class="text-lg sm:text-xl font-semibold text-sageGreen">Contact</h3>
        <div class="space-y-3 sm:space-y-4 text-skyBlue text-sm sm:text-base">
          <div class="flex items-start space-x-3">
            <IconMapPin class="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-sageGreen flex-shrink-0" />
            <p>
              Plot No. 305 (B), Gorulewadi, Ozer Junction, Oni, Tal. - Rajapur,
              Ratnagiri, 416705
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <IconPhone class="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-sageGreen flex-shrink-0" />
            <p>+91 7719036036 <br /> +91 7719037037</p>
          </div>
          <div class="flex items-start space-x-3">
            <IconMail class="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-sageGreen flex-shrink-0" />
            <p>sales@cherilynmonta.com</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="border-t border-stormCloud pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
    >
      <p class="text-skyBlue text-xs sm:text-sm text-center sm:text-left">
        © 2024 Cherilyn Monta. All rights reserved.
      </p>
      <div
        class="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-skyBlue"
      >
        <a href="#" class="hover:text-sageGreen transition-colors"
          >Privacy Policy</a
        >
        <a href="#" class="hover:text-sageGreen transition-colors"
          >Terms of Service</a
        >
        <a href="#" class="hover:text-sageGreen transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>