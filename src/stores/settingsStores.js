import { writable } from "svelte/store";

export const SETTINGSpomodoroTime = writable(25);
export const SETTINGSbreakTime = writable(5);
export const SETTINGSautoStartPomodoro = writable(false);
export const SETTINGSautoStartBreak = writable(false);