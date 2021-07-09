import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function Walk() {
  const [Action, setAction] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        I need to iterate by{" "}
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
          <MenuItem value={"function"}>executing a function</MenuItem>
          <MenuItem value={"map"}>
            creating a new array by modifiing each element witha function
          </MenuItem>
          <MenuItem value={"entires"}>creating an iterator object</MenuItem>
        </Select>
      </Typography>
      {Action === "function" ? (
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
            <b>Array.forEach()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            The forEach() method executes a provided function once for each
            array element.
          </Typography>
        </Container>
      ) : Action === "map" ? (
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
            <b>Array.map()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Creates a new array with the results of calling a provided function
            on every element in this array.
          </Typography>
        </Container>
      ) : Action === "entires" ? (
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
            <b>Array.entries()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Returns a new Array Iterator object that contains the key/value
            pairs for each index in the array. There are a lot of uses for
            iterators, as well as other methods used with it in conjuction, like
            values and keys
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Walk;
