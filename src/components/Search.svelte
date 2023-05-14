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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
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
