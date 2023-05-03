<script>
  import Shortcut from "./Shortcut.svelte";
  const shortcuts = [
    {
      name: "Github",
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      url: "https://www.github.com/",
    },
    {
      name: "Youtube",
      img: "https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg",
      url: "https://www.youtube.com/",
    },
    {
      name: "Zoro",
      img: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/83/b8/2f/83b82f8c-ad4f-7d13-ded1-430060c1a80f/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/1024x1024bb.png",
      url: "https://www.zoro.to/",
    },
    {
      name: "IG",
      img: "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg",
      url: "https://www.instagram.com",
    },
    {
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      url: "https://tailwindcss.com/",
    },
  ];
</script>

<div class="mt-5 flex justify-center items-center">
  {#each shortcuts as shortcut}
    <Shortcut {...shortcut} />
  {/each}
</div>
