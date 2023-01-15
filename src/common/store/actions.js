import { useColorStore } from "./color";
import { useEventStore } from "./EventStore";
const LOG2 = () => console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

const actionsHash = {
  CHANGE_COLOR: (newColor) => useColorStore.getState().setColor(newColor)
  // LOG: (paylod) => console.log(JSON.stringify(paylod)),
  // LOG2,
  // PLATFORM_SELECT: (value) => console.log(value)
  // SET_EVENT = (eventKey) => useEventStore.getState().setState("CHANGE")
};

export function dispatch(action, payload) {
  if (!actionsHash[action]) {
    console.error(`Invalid action: ${action}`);
    return;
  }
  actionsHash[action](payload);
}
