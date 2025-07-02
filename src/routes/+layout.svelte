<script>
  import "../app.css";
  import { onMount, onDestroy } from "svelte";

  let { children } = $props();
  onMount(async () => {});
</script>

{@render children()}

<div></div>

<style>
</style>