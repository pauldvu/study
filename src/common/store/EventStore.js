import { create } from "zustand";

export const useEventStore = create((set, get) => ({
  event: "",
  setEvent: (event) => set((state) => ({ event: event })),
  events: {
    CHANGE_COLOR: "CHANGE_COLOR",
    DELETE: {
      id: null,
      timestamp: null
    },
    SCHEDULER: {
      start: null,
      end: null,
      task: null
    }
  },
  handlers: {
    CHANGE_COLOR: (event) => {},
    DELETE: (event) => {
      /* actions */
    },
    SCHEDULER: (event) => {
      /* actions */
    }
  },
  dispatch: (event) =>
    set((state) => ({
      ...state,
      events: { ...state.events, [event.type]: event }
    })),
  registerHandler: (eventType, handler) =>
    set((state) => ({
      ...state,
      handlers: { ...state.handlers, [eventType]: handler }
    }))
}));
