<script>
  import { onMount } from "svelte";

  let { room } = $props();
  let showModal = $state(false);

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function containsBunglow() {
    return room.name.toLowerCase().includes("bungalow");
  }
  console.log(containsBunglow());
</script>

<section class="bg-off-white px-8 shadow-md pt-18 pb-2">
  <div class="grid grid-cols-3 gap-4">
    <!-- Left Large Image -->
    <div class="col-span-2">
      <img
        src={room.images[0]}
        alt={room.name}
        class="w-full object-cover rounded-lg"
        style="height: 44vh;"
      />
    </div>

    <!-- Right Side: Three Stacked Images -->
    <div class="flex flex-col gap-4">
      {#each room.images.slice(1, 4) as img, i}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="relative"
          class:cursor-pointer={i === 2}
          onclick={() => {
            if (i === 2) openModal();
          }}
        >
          <img
            src={img}
            alt={`Preview ${i + 1}`}
            class="w-full object-cover rounded-lg"
            style="height: 13.33vh;"
          />
          {#if i === 2 && room.images.length > 4}
            <div
              class="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg"
            >
              <span
                class="text-white md:text-lg text-sm font-semibold md:pl-0 pl-3"
              >
                View More Photos
              </span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Modal -->
{#if showModal}
  <div class="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg max-h-[90vh] overflow-y-auto w-[80vw]">
      <!-- Section 1 Header -->
      <div class="relative mb-4 text-white bg-almaris-gold">
        <h2 class="text-lg font-semibold text-center">
          {containsBunglow() ? "2bhk Bungalow" : ""}
        </h2>
        <button
          class="absolute right-0 top-0 text-white hover:text-gray-700 text-xl font-bold pr-3"
          onclick={closeModal}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      <!-- Section 1 Images -->
      <div class="md:grid md:grid-cols-3 gap-4 mb-6">
        {#each room.images as img}
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img
            src={img}
            alt="Room image"
            class="object-cover w-full rounded max-h-[40vh] pb-3 md:pb-0"
          />
        {/each}
      </div>

      {#if containsBunglow()}
        <!-- Section 2 -->
        {#if room.images2?.length}
          <h2
            class="text-lg font-semibold mb-4 text-white bg-almaris-gold px-3 text-center"
          >
            3 BHK
          </h2>
          <div class="md:grid md:grid-cols-3 gap-4 mb-6">
            {#each room.images2 as img}
              <!-- svelte-ignore a11y_img_redundant_alt -->
              <img
                src={img}
                alt="Room image set 2"
                class="object-cover w-full rounded max-h-[40vh] pb-3 md:pb-0"
              />
            {/each}
          </div>
        {/if}

        <!-- Section 3 -->
        {#if room.images3?.length}
          <h2
            class="text-lg font-semibold mb-4 text-white bg-almaris-gold px-3 text-center"
          >
            4 BHK
          </h2>
          <div class="md:grid md:grid-cols-3 gap-4">
            {#each room.images3 as img}
              <!-- svelte-ignore a11y_img_redundant_alt -->
              <img
                src={img}
                alt="Room image set 3"
                class="object-cover w-full rounded max-h-[40vh] pb-3 md:pb-0"
              />
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </div>
{/if}
