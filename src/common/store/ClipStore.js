import { create } from "zustand";

export const useClipStore = create((set, get) => ({
  clips: [
    { id: "1", name: "Clip 1", duration: 10, layerId: null },
    { id: "2", name: "Clip 2", duration: 20, layerId: null },
    { id: "3", name: "Clip 3", duration: 15, layerId: null }
  ],
  clipOrder: [],
  setClipOrder: (dragIndex, hoverIndex) => {
    set((state) => {
      const newClipOrder = [...state.clipOrder];
      const dragClipId = newClipOrder[dragIndex];
      newClipOrder.splice(dragIndex, 1);
      newClipOrder.splice(hoverIndex, 0, dragClipId);
      return { ...state, clips: newClipOrder };
    });
  },
  updateClipDuration: (clipId, newDuration) => {
    set((state) => {
      const updatedClips = state.clips.map((c) => {
        if (c.id !== clipId) return c;
        return { ...c, duration: newDuration };
      });
      return { ...state, clips: updatedClips };
    });
  },
  moveClip: (clip, newLayerId) => {
    set((state) => {
      const updatedClips = state.clips.map((c) => {
        if (c.id !== clip.id) return c;
        return { ...c, layerId: newLayerId, resizeable: true };
      });
      return { ...state, clips: updatedClips };
    });
  }
}));

// past: [],
// future: [],

// undo: () =>
//   set((state) => {
//     const { past } = state;
//     if (!past.length) return;
//     return {
//       clips: past[past.length - 1],
//       past: past.slice(0, past.length - 1),
//       future: [state.clips, ...state.future]
//     };
//   }),
// redo: () =>
//   set((state) => {
//     const { future } = state;
//     if (!future.length) return;
//     return {
//       clips: future[0],
//       past: [...state.past, state.clips],
//       future: future.slice(1)
//     };
//   })
