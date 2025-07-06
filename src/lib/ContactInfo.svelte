<script>
  import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-svelte';
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-cloudWhite">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Address Section -->
    <div class="text-center mb-16">
      <div class="max-w-2xl mx-auto">
        <div class="text-sm uppercase tracking-wider text-stormCloud mb-4">
          LOCATION
        </div>
        <h2 class="text-2xl sm:text-3xl font-light text-midnight mb-6">
          Plot No. 305(B), Gorulewadi, Ozer Junction, Oni,<br />
          Tal. - Rajapur, Ratnagiri 416705,<br />
          MAHARASHTRA, INDIA.
        </h2>
        <button class="bg-midnight text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-forestGreen transition-colors">
          FIND US ON MAP
        </button>
      </div>
    </div>

    <!-- Contact Methods -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <!-- Make a Call -->
      <div class="text-center">
        <div class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconPhone class="w-6 h-6 text-forestGreen" />
        </div>
        <h3 class="text-xl font-semibold text-midnight mb-2">Make a Call</h3>
        <p class="text-stormCloud text-sm mb-4">Make a call for your general inquiries</p>
        <a href="tel:+918181824242" class="text-forestGreen hover:text-sageGreen transition-colors">
          +91 8181 82 4242
        </a>
      </div>

      <!-- Send a Mail -->
      <div class="text-center">
        <div class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconMail class="w-6 h-6 text-forestGreen" />
        </div>
        <h3 class="text-xl font-semibold text-midnight mb-2">Send a Mail</h3>
        <p class="text-stormCloud text-sm mb-4">Send your mail for general inquiries</p>
        <a href="mailto:Rosaalba@cherilynmonta.com" class="text-forestGreen hover:text-sageGreen transition-colors">
          Rosaalba@cherilynmonta.com
        </a>
      </div>

      <!-- Toll Free -->
      <div class="text-center">
        <div class="w-16 h-16 bg-forestGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconPhone class="w-6 h-6 text-forestGreen" />
        </div>
        <h3 class="text-xl font-semibold text-midnight mb-2">Toll Free</h3>
        <p class="text-stormCloud text-sm mb-4">Toll free number for sharing greets</p>
        <a href="tel:+918181825252" class="text-forestGreen hover:text-sageGreen transition-colors">
          +91 8181 82 5252
        </a>
      </div>
    </div>
  </div>
</section>