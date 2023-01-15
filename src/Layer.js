//src/Layer.js
import React, { useState } from "react"; //v18
import { useDrop } from "react-dnd"; //v16

import { useClipStore } from "./common/store/ClipStore";
import { Clip } from "./Clip";

export const Layer = ({ id, name }) => {
  // get the clips and setClips functions from the clip store
  const { moveClip, updateClipDuration } = useClipStore();
  // const [clips, setLayerClips] = useState([]);
  const clips = useClipStore((state) =>
    state.clips.filter((clip) => clip.layerId === id)
  );
  const [, drop] = useDrop({
    accept: "clip",
    drop: (item) => {
      moveClip(item, id);
    }
  });

  const removeClip = (clip) => {
    // setLayerClips(clips.filter((c) => c !== clip));
    moveClip(clip, null);
  };

  return (
    <div
      ref={drop}
      style={{
        background: "white",
        height: "70px",
        display: "inline-block",
        border: "1px solid black"
      }}
    >
      {/* <h3>{name}</h3> */}
      {clips.map((clip) => (
        <Clip
          key={clip.id}
          clip={clip}
          updateClipDuration={() => updateClipDuration}
          onRemove={removeClip}
        />
      ))}
    </div>
  );
};
