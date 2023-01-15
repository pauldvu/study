import { useColorStore } from "./common/store/color";
import { dispatch } from "./common/store/actions";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Select from "./Select";
import { useEffect, useState } from "react";
import { useEventStore } from "./common/store/EventStore";

export default function Cool() {
  const { color, setColor } = useColorStore();
  const [hue, setHue] = useState("info");
  // const variant =useState

  const event = useEventStore((state) => state.event);
  useEffect(() => {
    if (event === "CHANGE_BLUE") {
      setHue("info");
    }
    if (event === "CHANGE_RED") {
      setHue("danger");
    }
  }, [event]);

  const handleClick = () => {
    dispatch("CHANGE_COLOR", "danger");
  };
  const handleClick1 = () => {
    dispatch("CHANGE_COLOR", "warning");
  };
  const handleClick2 = () => {
    dispatch("CHANGE_COLOR", "info");
  };
  return (
    <CssVarsProvider>
      <div>
        <Select />
        <button onClick={handleClick}>Press me</button>
        <button onClick={handleClick1}>Press me</button>
        <button onClick={handleClick2}>Press me</button>
        <div style={{ color }}>Button press changed the color</div>
        <Button
          variant="soft"
          color={hue}
          onClick={() => dispatch("LOG", "COOOOasdfasdfasdfasfOOOL")}
        >
          {" "}
          LOG{" "}
        </Button>
        <Button
          variant="outlined"
          color={hue}
          onClick={() => dispatch("LOG1", "COOOOOOOL")}
        >
          {" "}
          LOG{" "}
        </Button>
        <Button
          variant="solid"
          color={hue}
          // color={color}
          // sx={{ bgColor: color }}
          onClick={() => dispatch("LOG2", "COOOOOOOL")}
        >
          {" "}
          LOG{" "}
        </Button>
      </div>
    </CssVarsProvider>
  );
}
