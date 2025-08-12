<script>
  import { IconCheck } from "@tabler/icons-svelte";

  let { room } = $props();
</script>

<div class="bg-white rounded-2xl p-6 shadow-lg">
  <h3 class="text-2xl font-bold text-gray-900 mb-2">Overview</h3>
  <p class="text-gray-600 leading-relaxed mb-6">
    {room.description}
  </p>
</div>
