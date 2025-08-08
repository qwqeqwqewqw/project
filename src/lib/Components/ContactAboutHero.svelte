<script>
  export let image = "/gate.png";
  export let subtitle = "Cherilyn Monta Resort";
  export let title = "About Us";
  export let description = "Discover our story of excellence since 1997";
</script>

<section class="relative h-[25vh] min-h-[200px] bg-gray-900 overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img src={image} alt={title} class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/50"></div>
  </div>

  <!-- Content Overlay - Truly Centered -->
  <div class="relative z-10 flex items-center justify-center h-full pt-15">
    <div class="text-white text-center px-4 space-y-3">
      <h1
        class="font-wasted text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        {title}
      </h1>
      <p class="text-sm sm:text-base">{subtitle}</p>
      <p class="text-xs sm:text-sm opacity-80">{description}</p>
    </div>
  </div>
</section>
