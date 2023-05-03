import { onMount, onDestroy } from "svelte";
import { readable, derived } from "svelte/store";

export let hr24 = false;

let date = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  onDestroy(() => clearInterval(interval));
});

export const setClockType = () => {
  hr24 = !hr24;
};

export const time = derived(date, ($date) => {
  const hour = $date.getHours();
  const min = $date.getMinutes();
  const m = hour >= 12 ? "PM" : "AM";
  return {
    hour: hr24 ? hour : hour % 12 || 12,
    min: min > 10 ? min : `0${min}`,
    m,
  };
});

const daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const day = derived(date, ($date) => daysArr[$date.getDay()]);
export const dateNum = derived(date, ($date) => $date.getDate());
export const month = derived(date, ($date) => $date.getMonth());
export const year = derived(date, ($date) => $date.getFullYear());
