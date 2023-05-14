<script>
  import { createEventDispatcher } from "svelte";
  import Todo from "./Todo.svelte";
  import { showTodoModal } from "../../store/modalStore";
  import { fade } from "svelte/transition";
</script>

<div class="fixed bottom-16 right-16">
  <div class="relative">
    {#if $showTodoModal}
      <div class="fixed inset-0 z-50" transition:fade>
        <div
          class="absolute inset-0 bg-gray-800 opacity-50"
          on:keydown={() => {}}
          on:click={() => showTodoModal.set(false)}
        />
        <div
          class="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-lg shadow-lg p-4"
        >
          <Todo />
        </div>
      </div>
    {/if}
  </div>
</div>
