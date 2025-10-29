<script>
  let count = 0
</script>

<main style="font-family: system-ui, Arial; padding:2rem;">
  <h1>SvelteKit Starter</h1>
  <p>Clicks: {count}</p>
  <button on:click={() => count++}>Click me</button>
</main>
