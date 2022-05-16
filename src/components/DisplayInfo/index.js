
//Displays details of data from moused over color bar
const DisplayBox = (props) => {
  const { total, title, percent, value } = props;

  return (
    <div style={{ backgroundColor: "#C8C8C8", display: "flex"}}>
      <span style={{ marginRight: "1.5rem" }}>{title}</span>
      <span style={{ marginRight: "1.5rem" }}>{`Value: ${value}`}</span>
      <span
        style={{ marginRight: "1.5rem" }}
      >{`${percent}% of total ${total}`}</span>
    </div>
  );
};

export default DisplayBox;
