<script>
  import { IconMapPin, IconPhone, IconMail, IconClock } from '@tabler/icons-svelte';
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-freshCream">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h2
            class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-midnight mb-6"
          >
            Get In Touch
          </h2>
          <p class="text-lg text-midnight leading-relaxed mb-8">
            We're here to help you plan your perfect stay or event. Reach out to us through any of the following channels.
          </p>
        </div>

        <!-- Contact Cards -->
        <div class="space-y-6">
          <!-- Address -->
          <div class="bg-cloudWhite p-6 rounded-xl shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <IconMapPin class="w-6 h-6 text-forestGreen mt-1" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-midnight mb-2">Head Office Address</h3>
                <p class="text-midnight leading-relaxed">
                  Plot No. 305(B), Gorulewadi,<br />
                  Ozer Junction, Oni,<br />
                  Tal. - Rajapur, Ratnagiri 416705<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          <!-- Phone -->
          <div class="bg-cloudWhite p-6 rounded-xl shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <IconPhone class="w-6 h-6 text-forestGreen mt-1" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-midnight mb-2">Phone Numbers</h3>
                <div class="space-y-1 text-midnight">
                  <p>+91 8181 82 4242</p>
                  <p>+91 8181 82 5252</p>
                  <p>+91 8181 82 6262</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="bg-cloudWhite p-6 rounded-xl shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <IconMail class="w-6 h-6 text-forestGreen mt-1" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-midnight mb-2">Email</h3>
                <p class="text-midnight">Rosaalba@cherilynmonta.com</p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-cloudWhite p-6 rounded-xl shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <IconClock class="w-6 h-6 text-forestGreen mt-1" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-midnight mb-2">Office Hours</h3>
                <div class="text-midnight">
                  <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
                  <p class="text-sm text-stormCloud mt-1">24/7 support available for resort guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-cloudWhite p-8 rounded-2xl shadow-lg">
        <h3 class="text-2xl font-bold text-midnight mb-6">Send us a Message</h3>
        
        <form class="space-y-6">
          <!-- Name -->
          <div class="form-control">
            <label class="label" for="contact-name">
              <span class="label-text font-medium text-midnight">Full Name *</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your full name"
              class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
              required
            />
          </div>

          <!-- Email -->
          <div class="form-control">
            <label class="label" for="contact-email">
              <span class="label-text font-medium text-midnight">Email Address *</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Enter your email address"
              class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
              required
            />
          </div>

          <!-- Phone -->
          <div class="form-control">
            <label class="label" for="contact-phone">
              <span class="label-text font-medium text-midnight">Phone Number</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="Enter your phone number"
              class="input input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
            />
          </div>

          <!-- Subject -->
          <div class="form-control">
            <label class="label" for="contact-subject">
              <span class="label-text font-medium text-midnight">Subject *</span>
            </label>
            <select
              id="contact-subject"
              class="select input-bordered w-full bg-freshCream border-skyBlue/30 focus:border-forestGreen"
              required
            >
              <option value="">Select a subject</option>
              <option value="booking">Room Booking Inquiry</option>
              <option value="events">Event Planning</option>
              <option value="corporate">Corporate Bookings</option>
              <option value="general">General Information</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Message -->
          <div class="form-control">
            <label class="label" for="contact-message">
              <span class="label-text font-medium text-midnight">Message *</span>
            </label>
            <textarea
              id="contact-message"
              placeholder="Tell us how we can help you..."
              class="textarea textarea-bordered w-full h-32 bg-freshCream border-skyBlue/30 focus:border-forestGreen resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn w-full bg-forestGreen text-white border-0 hover:bg-sageGreen transition-all duration-300 py-3 text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>