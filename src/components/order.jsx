import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function Order() {
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
          <MenuItem value={"reverse"}>Reverse the order of the array</MenuItem>
          <MenuItem value={"sort"}>sort the items of the array</MenuItem>
        </Select>
      </Typography>
      {Action === "reverse" ? (
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
            <b>Array.reverse()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Reverses the order of the elements of an array in place the first
            becomes the last, and the last becomes the first.
          </Typography>
        </Container>
      ) : Action === "sort" ? (
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
            <b>Array.sort()</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sorts the elements of an array in place and returns the array.
            <br />
            <b>Important note:</b> If compareFunction is not supplied, elements
            are sorted by converting them to strings and comparing strings in
            Unicode code point order. For example, "Banana" comes before
            "cherry". In a numeric sort, 9 comes before 80, but because numbers
            are converted to strings, "80" comes before "9" in Unicode order.
            The docs have more information to clarify.
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Order;
