import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function Remove() {
  const [Action, setAction] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        I need to remove{" "}
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
          <MenuItem value={"elements"}>element/s from array</MenuItem>
          <MenuItem value={"end"}>the last element</MenuItem>
          <MenuItem value={"front"}>the first element</MenuItem>
          <MenuItem value={"array"}>one or more array for use</MenuItem>
        </Select>
      </Typography>
      {Action === "elements" ? (
        <Container
          maxWidth="sm"
          style={{
            background: "white",
            borderRadius: "5px",
            border: "1px solid #d1d1d1",
            paddingTop: "10px",
            paddingBottom: "10px",
            float: "left",
            marginTop: "10px",
          }}
        >
          <Typography style={{ color: "#c23838" }} variant="h4" gutterBottom>
            <b>Array.splice()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Adds and/or removes elements from an array.
          </Typography>
        </Container>
      ) : Action === "end" ? (
        <Container
          maxWidth="sm"
          style={{
            background: "white",
            borderRadius: "5px",
            border: "1px solid #d1d1d1",
            paddingTop: "10px",
            paddingBottom: "10px",
            float: "left",
            marginTop: "10px",
          }}
        >
          <Typography style={{ color: "#c23838" }} variant="h4" gutterBottom>
            <b>Array.pop()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Removes the last element from an array and returns that element.
          </Typography>
        </Container>
      ) : Action === "front" ? (
        <Container
          maxWidth="sm"
          style={{
            background: "white",
            borderRadius: "5px",
            border: "1px solid #d1d1d1",
            paddingTop: "10px",
            paddingBottom: "10px",
            float: "left",
            marginTop: "10px",
          }}
        >
          <Typography style={{ color: "#c23838" }} variant="h4" gutterBottom>
            <b>Array.shift()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Removes the first element from an array and returns that element.
          </Typography>
        </Container>
      ) : Action === "array" ? (
        <Container
          maxWidth="sm"
          style={{
            background: "white",
            borderRadius: "5px",
            border: "1px solid #d1d1d1",
            paddingTop: "10px",
            paddingBottom: "10px",
            float: "left",
            marginTop: "10px",
          }}
        >
          <Typography style={{ color: "#c23838" }} variant="h4" gutterBottom>
            <b>Array.slice()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            The slice() method returns a shallow copy of a portion of an array
            into a new array object. You can specify either just the beginning
            element (where end will default to the arrays length) or both the
            beginning and the end, comma-separated. The original array will not
            be modified.
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Remove;
