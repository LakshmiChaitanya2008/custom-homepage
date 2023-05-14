<script lang="ts">
  let input = "";
</script>

<form
  class="flex items-center"
  on:submit|preventDefault={() =>
    (window.location.href = `https://www.google.com/search?q=${input}`)}
>
  <label for="simple-search" class="sr-only">Search</label>
  <div class="relative w-full">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <img src="/src/assets/icon.png" alt="Boom" class="w-5 h-5" />
    </div>
    <div>
      <input
        type="text"
        id="simple-search"
        class="text-md focus:outline-none block w-full pl-10 p-3 bg-white text-black bg-opacity-80"
        required
        bind:value={input}
        placeholder="Search..."
      />
    </div>
  </div>
</form>

<style>
</style>
