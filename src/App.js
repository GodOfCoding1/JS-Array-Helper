import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import NextMenu from "./components/component";

function App() {
  const [Action, setAction] = React.useState("");
  const menu = React.useRef(null);

  return (
    <div style={{ marginTop: "30px", marginLeft: "30px" }}>
      <Typography variant="h4" gutterBottom>
        <b> JavaScript Array Explorer</b>
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#FF6666" }}>
        Find the array method you need without digging through the docs
      </Typography>
      <Typography component={"span"} variant="body1" gutterBottom>
        I have an array, I would like to{" "}
        <Select
          ref={menu}
          style={{ backgroundColor: "white", paddingInline: "10px" }}
          value={Action}
          onChange={(event) => {
            setAction(event.target.value);
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">...</MenuItem>
          <MenuItem value={"add"}>Add items</MenuItem>
          <MenuItem value={"remove"}>Remove items</MenuItem>
          <MenuItem value={"order"}>Order items</MenuItem>
          <MenuItem value={"walk"}>Walk over items</MenuItem>
          <MenuItem value={"string"}>Return a string</MenuItem>
        </Select>
      </Typography>
      <br />
      {Action !== "" ? <NextMenu action={Action} /> : ""}
    </div>
  );
}

export default App;
