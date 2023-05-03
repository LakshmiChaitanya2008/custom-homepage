<script>
  export let name;
  export let url;
  export let img;
</script>

<div
  class="px-4 py-2 hover:bg-gray-100/50 hover:text-black rounded-lg mx-2 cursor-pointer w-[100px] text-center"
  on:click={() => (window.location.href = url)}
  on:keyup={() => {}}
>
  <img src={img} alt="Github logo" class="w-[50px] rounded-full mx-auto" />
  <p class="mt-1">{name}</p>
</div>
