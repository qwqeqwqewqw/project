<script lang="ts">
  export let images: string[] = []; // props from parent
  let currentIndex = 0;

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }
</script>

<div class="relative w-full h-full overflow-hidden">
  {#each images as img, i (img)}
    <div
      class="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
      class:opacity-100={i === currentIndex}
      class:opacity-0={i !== currentIndex}
    >
      <img
        src={img}
        alt={`Room image ${i + 1}`}
        class="w-full h-full object-cover"
      />
    </div>
  {/each}

  <div
    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-10"
  >
    <button
      on:click={prev}
      class="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100"
    >
      ❮
    </button>
    <button
      on:click={next}
      class="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100"
    >
      ❯
    </button>
  </div>
</div>
