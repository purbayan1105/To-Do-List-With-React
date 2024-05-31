import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const valueAtom = atom<string>("");
export const targetAtom = atom<string>("");
export const storeAtom = atomWithStorage<string[]>("to-do-project-key", []);
