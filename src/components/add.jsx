import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function Add() {
  const [Action, setAction] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        I need to add{" "}
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
          <MenuItem value={"elements"}>elements to array</MenuItem>
          <MenuItem value={"end"}>elements to end array</MenuItem>
          <MenuItem value={"front"}>elements to front array</MenuItem>
          <MenuItem value={"array"}>this array to another array</MenuItem>
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
            <b>Array.push()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Adds one or more elements to the end of an array and returns the new
            length of the array.
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
            <b>Array.unshift()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Adds one or more elements to the front of an array and returns the
            new length of the array.
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
            <b>Array.concat()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Returns a new array comprised of this array joined with other
            array(s) and/or value(s).
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Add;
