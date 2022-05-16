
//Formats the hard-coded and api values to be same object
export const formatInput = (input) => {
  if (!input.values[0].title) {
    const newArr = input.values.map((item) => {
      return {
        title: item.name,
        left: { color: "#9ACD32", value: item.incomplete },
        right: { color: "#ff5349", value: item.complete },
      };
    });
    return newArr;
  } else {
    const newArr = input.values.map((item) => {
      return {
        title: item.title,
        left: { color: "#007cff", value: item.left.value },
        right: { color: "#ffe944", value: item.right.value },
      };
    });
    return newArr;
  }
};
