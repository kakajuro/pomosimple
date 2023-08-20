<script>
  import { fade } from "svelte/transition"

  import Icon from "svelte-icons-pack/Icon.svelte"
  import RiMediaSkipForwardLine from "svelte-icons-pack/ri/RiMediaSkipForwardLine"

  import { timerActive, 
            actualSecondsStore, 
            displayMinutesStore, 
            displaySecondsStore, 
            halfCycle,
            pomodoroMode,
            pomodoroCount } from "../stores/mainStores"

  import { SETTINGS } from "../stores/settingsStores";

  import {
    STATSglobalreps,
    STATStotalTime
  } from "../stores/statsStores";

	import { onMount } from "svelte";

  let skipButtonActive = false;
  let whichTimer;

  $: whichTimer = $pomodoroMode ? ($SETTINGS.pomodoroTime*60) : ($SETTINGS.breakTime*60);

  $: displayMinutes = Math.floor(whichTimer / 60);
  $: actualSeconds = whichTimer - (displayMinutes * 60)
  $: displaySeconds = (actualSeconds < 10) ? (actualSeconds).toString().padStart(2, '0') : actualSeconds

  $: {
    $displaySecondsStore = displaySeconds;
    $displayMinutesStore = displayMinutes;
    $actualSecondsStore = actualSeconds;
  }

  $: if (whichTimer == 0) {

    if ($pomodoroMode) {
      $halfCycle = true;
      whichTimer = $SETTINGS.breakTime;
    } else if (!$pomodoroMode && $halfCycle) {
      $pomodoroCount += 1
      whichTimer = $SETTINGS.pomodoroTime;
    } else {
      whichTimer = $SETTINGS.pomodoroTime;
    } 

    changePomodoroMode(!$pomodoroMode);
    $timerActive = false;
    
    // Check if autoStart breaks is here
  }

  setInterval(() => {
    if ($timerActive) {
      whichTimer--;
    }
  }, 1000);

  function startTimer() {
    timerActive.update(currentValue => !currentValue);
    skipButtonActive = true;
  }

  function changePomodoroMode(mode) {
    $pomodoroMode = mode;
  }

  function handleSkipButton() {
    changePomodoroMode(!$pomodoroMode);
    $timerActive = false;
  }

  onMount(() => {
    // settings = $ls.get("settings").settings;
  });

</script>

<div class="
  flex flex-col items-center justify-center
  bg-blue-700 w-[90%] h-[22rem] text-white rounded-md"
>
  <div class="flex flex-row justify-around w-full h-[15%]">
    <button
      class={$pomodoroMode ? `h-8 w-24 rounded-md font-bold bg-white text-blue-700` : `h-8 w-24 rounded-md font-bold`} 
      transition:fade={{ delay: 300 }}
      on:click={() => changePomodoroMode(true)}>Pomodoro</button>
    <button 
      class={!$pomodoroMode ? `h-8 w-24 rounded-md font-bold bg-white text-blue-700` : `h-8 w-24 rounded-md font-bold`}
      transition:fade={{ delay: 600 }}
      on:click={() => changePomodoroMode(false)}>Break</button>
  </div>

  <h1 class="font-bold text-8xl sm:text-9xl pb-10 cursor-default hover:select-none" transition:fade>{displayMinutes}:{displaySeconds}</h1>
  
  <div class={skipButtonActive ? `flex flex-col sm:flex-row items-center justify-center sm:pl-[4.3rem]` : `flex flex-row items-center justify-center`}>
    <button class="text-blue-700 bg-white h-12 w-48 rounded-lg text-xl font-bold uppercase shadow-xl hover:shadow-2xl hover:text-blue-500" 
    on:click={startTimer}
    transition:fade
    >{$timerActive ? "Pause" : "Start"}</button>
    {#if $timerActive}
      <button 
      class="pl-8 pr-6 sm:pr-0 text-4xl hover:cursor-pointer pt-4 sm:pt-0" 
      transition:fade={{ duration:100 }} 
      on:outroend={() => skipButtonActive = false}
      on:click={() => handleSkipButton()}
      >
        <Icon src={RiMediaSkipForwardLine} color="white" />
      </button>
    {/if}
  </div>
</div>