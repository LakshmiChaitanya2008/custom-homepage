<script>
  import {
    dateNum,
    day,
    month,
    time,
    year,
    setClockType,
  } from "../store/clockStore";
</script>

<div class="font-bold text-center cursor-pointer">
  <span
    class="bg-gradient-to-r text-6xl from-purple-500 to-indigo-500 text-transparent bg-clip-text"
    on:click={setClockType}
    on:keydown={() => {}}>{$time.hour}:{$time.min} {$time.m}</span
  >
  <p class="text-4xl mt-5">{$day}, {$dateNum}/{$month}/{$year}</p>
</div>
