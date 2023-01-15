import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { dispatch } from "./common/store/actions";
import { useEventStore } from "./common/store/EventStore";

export default function SelectBasic() {
  const [value, setValue] = React.useState("dog");

  const action = React.useRef(null);
  const payload = "hello world";
  const handleClick = (_, value) =>
    useEventStore.getState().setEvent({ name: "CHANGE_BLUE", payload: {} });
  return (
    <Select
      action={action}
      value={value}
      placeholder="Favorite pet…"
      onChange={handleClick}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={handleClick}
          >
            <CloseRounded />
          </IconButton>
        ),
        indicator: null
      })}
      sx={{ minWidth: 160 }}
    >
      <Option value="facebook">Facebook</Option>
      <Option value="CHANGE_BLUE">Tiktok</Option>
      <Option value="CHANGE_RED">instagram</Option>
      <Option value="youtube">youtube</Option>
    </Select>
  );
}
