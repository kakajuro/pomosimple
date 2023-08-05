import { writable } from "svelte/store"

// Timer stores
export const timerActive = writable(false);
export const displaySecondsStore = writable();
export const displayMinutesStore = writable();
export const actualSecondsStore = writable();

// Pomodoro state stores
export const pomodoroMode = writable(true);
export const halfCycle = writable(false);

// Stats stores
export const pomodoroCount = writable(0);

// Modal store
export const modalOpen = writable(false);