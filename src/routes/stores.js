import { writable } from "svelte/store";

export const symbol = writable('O');

export const gameOver = writable(false);

export const draw = writable(false);