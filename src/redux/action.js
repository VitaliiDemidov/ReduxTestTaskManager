import { ADD_TASK } from "./types";

export function createTask(task) {
  return { type: ADD_TASK, payload: task };
}
