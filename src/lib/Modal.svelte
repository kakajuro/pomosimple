<script>
  import { onMount } from "svelte";
  import ModalTemplate from "./ModalTemplate.svelte";
  import SwitchWrapper from "./SwitchWrapper.svelte";
  import Switch from "svelte-switch";

  let settings;

  import {
    SETTINGS,
    SETTINGSpomodoroTime,
    SETTINGSbreakTime,
    SETTINGSautoStartPomodoro,
    SETTINGSautoStartBreak,
  } from "../stores/settingsStores"

  function handlePomodoroTime(e) { 
    $SETTINGSpomodoroTime = e.target.value;

    writeToSettings();
  }

  function handleBreakTime(e) {
    $SETTINGSbreakTime = e.target.value;

    writeToSettings();
  }

  function handlePomodoroSwitch(e) {
    const { checked } = e.detail;
    $SETTINGSautoStartPomodoro = checked;

    writeToSettings();
  }

  function handleBreakSwitch(e) {
    const { checked } = e.detail;
    $SETTINGSautoStartBreak = checked;

    writeToSettings();
  }

  function writeToSettings() {
    settings = {
      pomodoroTime: $SETTINGSpomodoroTime,
      breakTime: $SETTINGSbreakTime,
      autoStartPomodoro: $SETTINGSautoStartPomodoro,
      autoStartBreak: $SETTINGSautoStartBreak
    }

    $SETTINGS = settings;
  }

  onMount(() => {

    $SETTINGSpomodoroTime = parseInt($SETTINGS.pomodoroTime)
    $SETTINGSbreakTime = parseInt($SETTINGS.breakTime)
    $SETTINGSautoStartPomodoro = $SETTINGS.autoStartPomodoro
    $SETTINGSautoStartBreak = $SETTINGS.autoStartBreak

  });
   
</script>

<ModalTemplate>
  <h1 class="text-xl pb-2">Settings</h1>
  <hr class="border-y-[1] bg-slate-300" />
  <div class="pt-6">
    <h1 class="pb-2 font-bold underline">Timer (minutes)</h1>
    <div class="flex flex-row justify-between pb-3">
      <p class="font-semibold">Pomodoro length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10" type="number" min={1} on:input={e => handlePomodoroTime(e)} bind:value={$SETTINGSpomodoroTime} />
    </div>
    <div class="flex flex-row justify-between pb-4">
      <p class="font-semibold">Break length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10 p-" type="number" min={1} on:input={e => handleBreakTime(e)} bind:value={$SETTINGSbreakTime} />
    </div> 
  </div>
  <div class="flex flex-row justify-between pb-4">
    <p class="font-semibold">Auto Start pomodoros?</p>
    <SwitchWrapper>
      <Switch 
        on:change={handlePomodoroSwitch} 
        checked={$SETTINGSautoStartPomodoro}
        handleDiameter={20}
        onColor={"#243ed1"}
        height={24}
        width={48}
      />
    </SwitchWrapper>
  </div>
  <div class="flex flex-row justify-between pb-4">
    <p class="font-semibold">Auto Start breaks?</p>
    <SwitchWrapper>
      <Switch 
        on:change={handleBreakSwitch} 
        checked={$SETTINGSautoStartBreak}
        handleDiameter={20}
        onColor={"#243ed1"}
        height={24}
        width={48}
      />
    </SwitchWrapper>
  </div>
</ModalTemplate>