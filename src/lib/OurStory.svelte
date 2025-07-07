<section class="py-16 sm:py-20 lg:py-24 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
      <!-- Left Image - Made taller -->
      <div class="relative lg:order-1">
        <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl h-100">
          <img
            src="/gate.png"
            alt="Cherilyn Monta Resort entrance"
            class="w-full h-full object-cover"
          />
          <!-- Dark overlay for better text readability -->
          <div class="absolute inset-0 bg-black/30"></div>
        </div>
        
        <!-- Watch Video Button - positioned at bottom left of image -->
        <div class="absolute bottom-6 left-6 z-20">
          <button class="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </div>
            <span class="text-gray-900 font-medium">WATCH VIDEO</span>
          </button>
        </div>
      </div>

      <!-- Right Content - positioned at top right, overlapping the image -->
      <div class="relative lg:order-2 lg:-ml-16 lg:-mt-8 z-10">
        <div class="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
          <!-- Small heading -->
          <div class="text-sm uppercase tracking-wider text-gray-500 mb-4 font-light">
            WELCOME TO CHERILYN MONTA
          </div>
          
          <!-- Main heading -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 uppercase tracking-wide">
            EXCEPTIONAL HOSPITALITY<br />
            TIMELESS ELEGANCE
          </h2>
          
          <!-- Description -->
          <div class="text-gray-600 leading-relaxed mb-8 space-y-4">
            <p>
              Cherilyn Monta – We have established a reputation as real estate developers who have built not just homes but lifestyles. A reputation based on a track record of promoting and marketing innovative real estate projects.
            </p>
            <p>
              Since 1997 we have track record for our steadfast commitment to building Top Class Landmarks – Refined in Appearance with an emphasis on Quality and Concern for the Environment.
            </p>
          </div>

          <!-- Read More Button -->
          <button class="bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-green-700 transition-colors rounded-none font-light">
            READ MORE
          </button>
        </div>

        <!-- Statistics positioned outside the image, below the content box -->
        <div class="mt-8 lg:mt-12 grid grid-cols-2 gap-8 lg:mr-16">
          <div class="text-center lg:text-right">
            <div class="text-3xl sm:text-4xl font-light text-gray-900 mb-1">25 +</div>
            <div class="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Years of Experience</div>
          </div>
          <div class="text-center lg:text-right">
            <div class="text-3xl sm:text-4xl font-light text-gray-900 mb-1">1,250 +</div>
            <div class="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>