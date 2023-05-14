<script lang="ts">
  import { onMount } from "svelte";
  import Search from "./components/Search.svelte";
  import TodoModal from "./components/Todo/TodoModal.svelte";
  import BottomBar from "./components/BottomBar.svelte";
</script>

<main class="mx-auto max-w-2xl mt-64">
  <video
    autoplay
    muted
    loop
    id="myVideo"
    class="absolute -translate-x-2/4 -translate-y-2/4 min-w-[100vw] min-h-screen z-[-1] left-2/4 top-2/4"
  >
    <source src="/3.mp4" type="video/mp4" />
  </video>
  <Search />

  <TodoModal />

  <BottomBar />
</main>
