// src/routes/book/+page.js
import { browser } from "$app/environment";

/** @type {import('./$types').PageLoad} */
export function load() {
  if (browser) {
    const stored = localStorage.getItem("selectedVilla");
    if (stored) {
      return {
        villa: JSON.parse(stored),
      };
    }
  }
  return { villa: null };
}
