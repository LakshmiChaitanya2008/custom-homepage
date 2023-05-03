<script lang="ts">
  import { locationStore } from "./store/locationStore";
  import { onMount } from "svelte";
  import Search from "./components/Search.svelte";
  import Clock from "./components/Clock.svelte";
  import Shortcuts from "./components/Shortcuts.svelte";
  import Weather from "./components/Weather.svelte";
  import TodoModal from "./components/Todo/TodoModal.svelte";
  import BottomBar from "./components/BottomBar.svelte";

  onMount(() => {
    locationStore.getWeather();
  });
</script>

<main>
  <Weather />
  <div class="h-[90vh] flex flex-col justify-evenly mx-auto max-w-3xl mt-10">
    <div>
      <Clock />
    </div>
    <div>
      <Search />
      <Shortcuts />
    </div>
  </div>
  <TodoModal />

  <BottomBar />
</main>
