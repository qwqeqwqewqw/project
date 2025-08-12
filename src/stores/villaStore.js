import { writable } from "svelte/store";
import { browser } from "$app/environment";

const initialValue =
  browser && localStorage.getItem("selectedVilla")
    ? JSON.parse(localStorage.getItem("selectedVilla"))
    : null;

export const selectedVilla = writable(initialValue);

selectedVilla.subscribe((value) => {
  if (browser) {
    if (value) {
      localStorage.setItem("selectedVilla", JSON.stringify(value));
    } else {
      localStorage.removeItem("selectedVilla");
    }
  }
});
