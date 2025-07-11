// @ts-ignore

import { create } from "zustand";
import { marked } from "marked";
import TurndownService from "turndown";

const turndownService = new TurndownService();

type StateStore = {
  mode: "html" | "markdown";
  text: string;
  resultText: string;
  switch: () => void;
  setText: (text: string) => void;
};

export const useStateStore = create<StateStore>((set, get) => ({
  mode: "markdown",
  text: "**Hello World**",
  resultText: marked.parse("**Hello World**", { async: false }) as string,
  setText: (text: string) => {
    const mode = get().mode;
    let resultText = "";
    if (mode === "markdown") {
      resultText = marked.parse(text, { async: false }) as string;
    } else {
      resultText = turndownService.turndown(text);
    }
    set({ text, resultText });
  },
  switch: () => {
    const { mode, text } = get();
    let resultText = "";
    if (mode === "markdown") {
      resultText = turndownService.turndown(text);
    } else {
      resultText = marked.parse(text, { async: false }) as string ;
    }
    set((state) => ({
      mode: state.mode === "markdown" ? "html" : "markdown",
      resultText,
    }));
  },
}));
