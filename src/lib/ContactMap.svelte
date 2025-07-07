<script>
  import { IconMapPin, IconMail, IconPhoneDone } from "@tabler/icons-svelte";
</script>

<section class="bg-gray-100 py-8 px-4">
  <div class="max-w-5xl mx-auto space-y-6">
    <!-- Contact Info Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Phone -->
      <div class="bg-white shadow rounded-md p-4 flex items-center space-x-3">
        <div class="bg-blue-500 text-white p-2 rounded-full">
          <IconPhoneDone size={24} stroke={2} class="text-black" />
        </div>
        <div>
          <p class="text-xs text-gray-500">Phone</p>
          <p class="text-sm font-medium text-black">(+91) 98765-43210</p>
        </div>
      </div>

      <!-- Email -->
      <div class="bg-white shadow rounded-md p-4 flex items-center space-x-3">
        <div class="bg-blue-500 text-white p-2 rounded-full">
          <IconMail size={24} stroke={2} class="text-black" />
        </div>
        <div>
          <p class="text-xs text-gray-500">Email</p>
          <p class="text-sm font-medium text-black">info@cherilynmonta.com</p>
        </div>
      </div>

      <!-- Location -->
      <div class="bg-white shadow rounded-md p-4 flex items-center space-x-3">
        <div class="bg-blue-500 text-black p-2 rounded-full">
          <IconMapPin size={24} stroke={2} class="text-black" />
        </div>
        <div>
          <p class="text-xs text-gray-500">Location</p>
          <p class="text-sm font-medium text-black">
            Plot No. 305 (B), Gorulewadi, Ozer Junction Oni, Tal, Rajapur,
            Maharashtra 440067
          </p>
        </div>
      </div>
    </div>

    <!-- Map Embed -->
    <div class="flex justify-center">
      <div
        class="rounded-lg overflow-hidden shadow-md border border-gray-200 h-100 w-full max-w-5xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0351381233963!2d73.60054247491905!3d16.72509848405352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1d16c8830a7f3%3A0x2230e0789082408a!2sCherilyn%20Monta%20Resort!5e0!3m2!1sen!2sin!4v1751878706873!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Cherilyn Monta Resort Location"
          class="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  </div>
</section>
