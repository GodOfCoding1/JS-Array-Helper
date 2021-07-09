import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function String() {
  const [Action, setAction] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        I need to{" "}
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
          <MenuItem value={"elements"}>join all elements to a string</MenuItem>
          <MenuItem value={"array"}>
            return a string representing the array
          </MenuItem>
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
            <b>Array.join()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Joins all elements of an array into a string. You can join it
            together as is or with something in between, elements.join(' - ')
            gives you foo-bar
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
            <b>Array.toString()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Returns a string representing the array and its elements.
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default String;
