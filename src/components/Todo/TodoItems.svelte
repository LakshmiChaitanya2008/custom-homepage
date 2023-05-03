<script>
  import TodoItem from "./TodoItem.svelte";
  import { todoStore } from "../../store/todoStore";
</script>

<div class="mt-4">
  {#each $todoStore as todo}
    <TodoItem {...todo} />
  {/each}
</div>
