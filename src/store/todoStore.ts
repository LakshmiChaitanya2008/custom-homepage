import { writable } from "svelte/store";

interface Todos {
  id: number;
  name: string;
  isDone: boolean;
}

const createTodoStore = function () {
  let todos: Todos[] = JSON.parse(localStorage.getItem("todos") || "[]");

  const { subscribe, update } = writable(todos);

  return {
    subscribe,

    addTodo: (todoName: string) => {
      const id = Math.floor(Math.random() * 100000);
      const newTodo = { id, name: todoName, isDone: false };
      update((items) => [...items, newTodo]);

      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    },

    deleteTodo: (index: number) => {
      todos = todos.filter((item) => item.id !== index);

      localStorage.setItem("todos", JSON.stringify(todos));

      update((items) => items.filter((item) => item.id !== index));
    },

    updateTodo: (index: number) => {
      update((items) =>
        items.map((item, i) => {
          if (item.id === index) {
            item.isDone = !item.isDone;
          }
          return item;
        })
      );
      localStorage.setItem("todos", JSON.stringify(todos));
    },

    clearList: () => {
      update((items) => (items = []));
      localStorage.setItem("todos", JSON.stringify([]));
    },
  };
};

export const todoStore = createTodoStore();
