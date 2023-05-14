<script>
  import { showTodoModal } from "../store/modalStore";
</script>

<div class="fixed bottom-0 right-0 flex place-items-center">
  <div
    class="cursor-pointer font-bold tracking-widest mr-4 mb-2"
    on:click={() => {
      showTodoModal.set(true);
    }}
    on:keypress={() => {}}
  >
    Todo
  </div>
</div>
