const actionsHash = {
  CHANGE_COLOR: (newColor) => colorStore.setColor(newColor)
};

export function dispatch(action, payload) {
  if (!actionsHash[action]) {
    console.error(`Invalid action: ${action}`);
    return;
  }
  actionsHash[action](payload);
}
