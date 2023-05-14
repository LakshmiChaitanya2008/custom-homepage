<script>
  import TodoItems from "./TodoItems.svelte";
  import { todoStore } from "../../store/todoStore";
  let input = "";
</script>

<div class=" w-full">
  <div class="flex justify-between">
    <h1 class="text-3xl font-bold">Todo List</h1>
    <button class="text-sm text-red-500" on:click={todoStore.clearList}
      >Clear List</button
    >
  </div>

  <form
    on:submit|preventDefault={() => {
      todoStore.addTodo(input);
      input = "";
    }}
  >
    <input
      type="text"
      placeholder="Todo Name"
      class="py-1 mt-3 px-2 w-full bg-transparent border-white focus:outline-none placeholder:text-white border rounded-md text-lg"
      bind:value={input}
    />
  </form>

  <TodoItems />
</div>
