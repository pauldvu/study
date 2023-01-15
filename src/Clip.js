//from src/clip.js
import { useDrag, useDrop } from "react-dnd"; //v16
import { useState } from "react"; //v18
import { useClipStore } from "./common/store/ClipStore";
export const Clip = ({ clip, onRemove }) => {
  const { setClipOrder, clipOrder } = useClipStore();
  const [clipWidth, setClipWidth] = useState(100);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "clip",
    item: { ...clip },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));
  const [, drop] = useDrop({
    accept: "clip",
    drop: (item) =>
      setClipOrder(clipOrder.indexOf(item.id), clipOrder.indexOf(clip.id)),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        height: "50px",
        padding: "10px",
        overflow: "auto",
        resize: "horizontal",
        display: "inline-block",
        border: isDragging ? "1px solid red" : "1px solid black",
        cursor: isDragging ? "move" : "grab",
        width: clipWidth
      }}
    >
      <button onClick={() => onRemove(clip)}>Remove</button>
      {clip?.name} ({Math.round(clip?.duration)}s)
    </div>
  );
};
