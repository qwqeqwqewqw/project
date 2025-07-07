<script>
  export let image = "/gate.png";
  export let subtitle = "Cherilyn Monta Resort";
  export let title = "About Us";
  export let description = "Discover our story of excellence since 1997";
</script>

<section
  class="relative h-[35vh] min-h-[200px] bg-gray-900 overflow-hidden pt-20"
>
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img src={image} alt={title} class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/50"></div>
  </div>

  <!-- Content Overlay - Off-center positioning -->
  <div class="relative z-10 flex items-center h-full">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl ml-0 lg:ml-16">
        <div class="text-white space-y-3">
          <div class="font-cursive1 text-lg sm:text-xl md:text-2xl opacity-90">
            {subtitle}
          </div>
          <h1
            class="font-wasted text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            {title}
          </h1>
          <p
            class="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl opacity-90"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
