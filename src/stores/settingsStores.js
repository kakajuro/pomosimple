import { writable } from "svelte/store";

export const SETTINGSpomodoroTime = writable(25*60);
export const SETTINGSbreakTime = writable(5*60);
export const autoStartPomodoro = writable(false);
export const autoStartBreak = writable(false);