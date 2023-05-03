<script>
  import { locationStore } from "../store/locationStore";
  let ls;
  locationStore.subscribe(() => {
    ls = $locationStore;
  });
</script>

{#if ls.city}
  <div
    class="absolute top-4 right-4 shadow-lg p-4 rounded-lg bg-gray-800 text-white"
  >
    <div class="flex items-center mb-2">
      <div class="text-md flex items-center">
        {ls.city}
      </div>
    </div>
    <div class="text-3xl font-bold">
      {Math.floor(ls.temperature - 273)}&degC
    </div>
    <div class="text-lg text-gray-400 capitalize">
      {ls.condition}
    </div>
  </div>
{/if}
