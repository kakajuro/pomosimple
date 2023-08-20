import { writable } from "svelte/store";
import { persisted } from 'svelte-local-storage-store'

export const SETTINGS = persisted('SETTINGS', {
  pomodoroTime: 25,
  breakTime: 5,
  autoStartPomodoro: true,
  autoStartBreak: true
});

export const SETTINGSpomodoroTime = writable(25);
export const SETTINGSbreakTime = writable(5);
export const SETTINGSautoStartPomodoro = writable(true);
export const SETTINGSautoStartBreak = writable(true);

export const SETTINGSpomodoroTimeDefault = writable(25);
export const SETTINGSbreakTimeDefault = writable(5);
export const SETTINGSautoStartPomodoroDefault = writable(true);
export const SETTINGSautoStartBreaDefault = writable(true);