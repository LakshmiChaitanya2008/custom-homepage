<script>
  import { createEventDispatcher } from "svelte";
  import Todo from "./Todo.svelte";
  import { showTodoModal } from "../../store/modalStore";
</script>

<div class="fixed bottom-16 right-16">
  <div class="relative">
    {#if $showTodoModal}
      <div class="fixed inset-0 z-50">
        <div
          class="absolute inset-0 bg-gray-800 opacity-50"
          on:keydown={() => {}}
          on:click={() => showTodoModal.set(false)}
        />
        <div
          class="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#14111c] bg-opacity-80 text-[#EDEDED] rounded-lg shadow-lg p-4"
        >
          <Todo />
          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
            on:click={() => showTodoModal.set(false)}>Close</button
          >
        </div>
      </div>
    {/if}
  </div>
</div>
