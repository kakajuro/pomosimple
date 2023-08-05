<script>
  import ModalTemplate from "./ModalTemplate.svelte";
  import ToggleWrapper from "./ToggleWrapper.svelte";
  import Toggle from "svelte-toggle/src/Toggle.svelte";

  let pomodoroMins, breakMins;
  let autoStartPomodorosToggled = true;
  
</script>

<ModalTemplate>
  <h1 class="font-2xl pb-2">Settings</h1>
  <hr class="border-y-[1] bg-slate-300" />
  <div class="pt-6">
    <h1 class="pb-2 font-bold underline">Timer (minutes)</h1>
    <div class="flex flex-row justify-between pb-3">
      <p class="font-semibold">Pomodoro length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10" type="number" min={1} bind:value={pomodoroMins} />
    </div>
    <div class="flex flex-row justify-between pb-2">
      <p class="font-semibold">Break length</p>
      <input class="bg-slate-200 border rounded-md w-16 mr-10" type="number" min={1} bind:value={breakMins} />
    </div> 
  </div>
    
  <div class="flex flex-row justify-between pb-2">
    <p class="font-semibold">Autostart pomodoros?</p>
    <ToggleWrapper>
      <Toggle bind:autoStartPomodorosToggled on:toggle={(e) => (autoStartPomodorosToggled = e.detail)} hideLabel label="Pomodoro start time" small={false} />
    </ToggleWrapper>
  </div>
</ModalTemplate>