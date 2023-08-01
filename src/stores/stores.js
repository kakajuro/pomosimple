import { writable } from "svelte/store"

// Timer stores
export const timerActive = writable(false);
export const secondsStore = writable(3);
export const secondsStoreBreak = writable(5);
export const displaySecondsStore = writable();
export const displayMinutesStore = writable();
export const actualSecondsStore = writable();

// Pomodoro state stores
export const pomodoroMode = writable(true);
export const halfCycle = writable(false);

// Stats stores
export const pomodoroCount = writable(0);