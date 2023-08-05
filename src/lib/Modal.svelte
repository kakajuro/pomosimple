<script>
  import ModalTemplate from "./ModalTemplate.svelte";
  import SwitchWrapper from "./SwitchWrapper.svelte";
  import Switch from "svelte-switch";

  import {
    SETTINGSpomodoroTime,
    SETTINGSbreakTime,
    SETTINGSautoStartPomodoro,
    SETTINGSautoStartBreak
  } from "../stores/settingsStores"

  let pomodoroMins, breakMins;
  let autoStartPomodoros = false;
  let autoStartBreaks = false;

  function handlePomodoroSwitch(e) {
    const { checked } = e.detail;
    autoStartPomodoros = checked;
  }

  function handleBreakSwitch(e) {
    const { checked } = e.detail;
    autoStartBreaks = checked;
  }
   
</script>

<ModalTemplate>
  <h1 class="text-xl pb-2">Settings</h1>
  <hr class="border-y-[1] bg-slate-300" />
  <div class="pt-6">
    <h1 class="pb-2 font-bold underline">Timer (minutes)</h1>
    <div class="flex flex-row justify-between pb-3">
      <p class="font-semibold">Pomodoro length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10" type="number" min={1} bind:value={pomodoroMins} />
    </div>
    <div class="flex flex-row justify-between pb-4">
      <p class="font-semibold">Break length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10" type="number" min={1} bind:value={breakMins} />
    </div> 
  </div>
  <div class="flex flex-row justify-between pb-4">
    <p class="font-semibold">Auto Start pomodoros?</p>
    <SwitchWrapper>
      <Switch 
        on:change={handlePomodoroSwitch} 
        checked={autoStartPomodoros}
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
        checked={autoStartBreaks}
        handleDiameter={20}
        onColor={"#243ed1"}
        height={24}
        width={48}
      />
    </SwitchWrapper>
  </div>
</ModalTemplate>