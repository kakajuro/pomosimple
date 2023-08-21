<script>
  import { onMount } from "svelte"
  import { fade, fly, scale } from "svelte/transition"

  import Icon from "svelte-icons-pack/Icon.svelte"
  import IoSettingsOutline from "svelte-icons-pack/io/IoSettingsOutline"
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";

  import Timer from "$lib/Timer.svelte";
  import Modal from "../lib/Modal.svelte";

  export let data;

  import { 
    displaySecondsStore, 
    displayMinutesStore, 
    pomodoroMode, 
    pomodoroCount,
    modalOpen } from "../stores/mainStores";

  let settings;

  let hoveringOnSettings = false;
  let hoveringOnRepo = false;
  let repoLink = "https://github.com/swishyy/pomosimple";

  let ready = false;

  onMount(() => {
    ready = true;
  });

</script> 

<svelte:head>
  <title>{$displayMinutesStore}:{$displaySecondsStore} - {$pomodoroMode ? "Study Time!" : "Relax!"}</title>
  <meta name="An app to allow you to do pomodoro timing when studying/drawing/coding etc." content="pomostask">
</svelte:head>

{#if ready}
  <div class="w-[350px] sm:w-[500px] lg:w-[800px] flex flex-col">
    <div in:fly={{ y:20, opacity: 0, duration: 400 }}  class="flex items-center pb-4 sm:mx-6 justify-between">
      <h1 class="font-bold text-white text-4xl hover:cursor-default">pomotask</h1>
      <div class="flex flex-row w-20 sm:w-24 justify-between">
        <div>
          <button class="text-3xl pt-2 ml-auto hover:cursor-pointer hover:scale-105 transition-all" 
          on:mouseenter={() => hoveringOnRepo = true}
          on:mouseleave={() => hoveringOnRepo = false}
          >
            <a href={repoLink} target="_blank"><Icon color={ hoveringOnRepo ? "#abc5ff" : "white"} src={AiFillGithub} /></a>
          </button>
        </div>
        <div>
          <button class="text-3xl pt-2 ml-auto hover:cursor-pointer hover:scale-105 transition-all" 
            on:click={() => $modalOpen = !$modalOpen}
            on:mouseenter={() => hoveringOnSettings = true}
            on:mouseleave={() => hoveringOnSettings = false}
          >
            <Icon color={ hoveringOnSettings ? "#abc5ff" : "white" } src={IoSettingsOutline} />
          </button>
        </div>
      </div>
    </div>
    <div class="h-[2px] w-full border border-blue-700 rounded-md" />

    <div class="flex flex-row w-full justify-center pt-10">
      <Timer />
    </div>

    <div class="flex flex-col w-full items-center justify-center pt-10 text-white">

      <p>Pomodoro cycles this session: <span class="font-bold">{$pomodoroCount}</span></p>
      <p class="text-lg font-bold">{$pomodoroMode ? "Time to focus!" : "Take a break!"}</p>

      <h2 class="pt-10 font-bold text-xl">Stats</h2>

    </div>

    <Modal />

  </div>
{/if}