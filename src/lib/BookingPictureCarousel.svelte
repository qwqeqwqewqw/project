<script>
  let { images } = $props();
</script>

<div class="carousel w-full h-full">
  {#each images as img, i (img)}
    <div id={`slide${i + 1}`} class="carousel-item relative w-full h-full">
      <img
        src={img}
        alt={`Room image ${i + 1}`}
        class="w-full h-full object-cover"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href={`#slide${i === 0 ? images.length : i}`} class="btn btn-circle">
          ❮
        </a>
        <a
          href={`#slide${i === images.length - 1 ? 1 : i + 2}`}
          class="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  {/each}
</div>
