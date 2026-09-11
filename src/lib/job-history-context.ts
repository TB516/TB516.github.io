import { createContext } from "svelte";

/** Layout-owned disclosure state preserved across page navigation. */
export const [getJobHistory, setJobHistory] = createContext<{ open: boolean }>();
