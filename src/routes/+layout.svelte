<script>
  import "../app.css";
  import { onMount, onDestroy } from "svelte";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  let { children } = $props();
  onMount(async () => {});
</script>

<Header />
{@render children()}
<Footer />

<style>
</style>
