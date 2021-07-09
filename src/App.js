import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Add from "./components/add";
import Order from "./components/order";
import Remove from "./components/remove";
import Walk from "./components/walk";
import String from "./components/string";

function App() {
  const [Action, setAction] = React.useState("");

  return (
    <div style={{ marginTop: "30px", marginLeft: "30px" }}>
      <Typography variant="h4" gutterBottom>
        <b> JavaScript Array Explorer</b>
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#FF6666" }}>
        Find the array method you need without digging through the docs
      </Typography>
      <Typography variant="body1" gutterBottom>
        I have an array, I would like to{" "}
        <Select
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
      {Action === "add" ? (
        <Add />
      ) : Action === "remove" ? (
        <Remove />
      ) : Action === "string" ? (
        <String />
      ) : Action === "order" ? (
        <Order />
      ) : Action === "walk" ? (
        <Walk />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
