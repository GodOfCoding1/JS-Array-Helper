import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

const mainData = {
  add: {
    actionText: " I need to add",
    components: [
      {
        menuItem: "elements to array",
        title: "Array.splice()",
        explanation: "Adds and/or removes elements from an array.",
      },
      {
        menuItem: "elements to end array",
        title: "Array.push()",
        explanation:
          "Adds one or more elements to the end of an array and returns the new length of the array.",
      },
      {
        menuItem: "elements to front array",
        title: "Array.unshift()",
        explanation:
          "Adds one or more elements to the front of an array and returns the new length of the array.",
      },
      {
        menuItem: "this array to another array",
        title: "Array.concat()",
        explanation:
          "Returns a new array comprised of this array joined with other array(s) and/or value(s).",
      },
    ],
  },
  order: {
    actionText: " I need to",
    components: [
      {
        menuItem: "Reverse the order of the array",
        title: "Array.reverse()",
        explanation:
          "Reverses the order of the elements of an array in place the first becomes the last, and the last becomes the first.",
      },
      {
        menuItem: "sort the items of the array",
        title: "Array.sort()",
        explanation:
          'Sorts the elements of an array in place and returns the array. If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. The docs have more information to clarify.',
      },
    ],
  },
  remove: {
    actionText: "I need to remove",
    components: [
      {
        menuItem: "element/s from array",
        title: "Array.splice()",
        explanation: "Adds and/or removes elements from an array.",
      },
      {
        menuItem: "the last element",
        title: "Array.pop()",
        explanation:
          "Removes the last element from an array and returns that element.",
      },
      {
        menuItem: "the first element",
        title: "Array.shift()",
        explanation:
          "Removes the first element from an array and returns that element.",
      },
      {
        menuItem: "one or more array for use",
        title: "Array.slice()",
        explanation: `The slice() method returns a shallow copy of a portion of an array
              into a new array object. You can specify either just the beginning
              element (where end will default to the arrays length) or both the
              beginning and the end, comma-separated. The original array will not
              be modified.`,
      },
    ],
  },
  string: {
    actionText: " I need to",
    components: [
      {
        menuItem: "join all elements to a string",
        title: "Array.join()",
        explanation: `Joins all elements of an array into a string. You can join it
          together as is or with something in between, elements.join(' - ')
          gives you foo-bar`,
      },
      {
        menuItem: "return a string representing the array",
        title: "Array.toString()",
        explanation: `Returns a string representing the array and its elements.`,
      },
    ],
  },
  walk: {
    actionText: "I need to iterate by",
    components: [
      {
        menuItem: "executing a function",
        title: "Array.forEach()",
        explanation: `The forEach() method executes a provided function once for each
          array element.`,
      },
      {
        menuItem:
          "creating a new array by modifiing each element with a function",
        title: "Array.map()",
        explanation: ` Creates a new array with the results of calling a provided function
          on every element in this array.`,
      },
      {
        menuItem: "creating an iterator object",
        title: "Array.entries()",
        explanation: `Returns a new Array Iterator object that contains the key/value
          pairs for each index in the array. There are a lot of uses for
          iterators, as well as other methods used with it in conjuction, like
          values and keys`,
      },
    ],
  },
};

function NextMenu({ action }) {
  const [data, setData] = React.useState(mainData[action]);
  const [index, setIndex] = React.useState("");
  React.useEffect(() => {
    setIndex("");
    setData(mainData[action]);
  }, [action]);

  return (
    <div>
      <Typography component={"span"} variant="body1" gutterBottom>
        {data.actionText}{" "}
        <Select
          style={{ backgroundColor: "white", paddingInline: "10px" }}
          value={index}
          onChange={(event) => {
            setIndex(event.target.value);
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">...</MenuItem>
          {data.components.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item.menuItem}
            </MenuItem>
          ))}
        </Select>
      </Typography>
      <br />
      {index !== "" ? (
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
            <b>{data.components[index].title}</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {data.components[index].explanation}
          </Typography>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
}

export default NextMenu;
