import { useEffect, useState } from "react";
import DisplayBox from "../DisplayInfo";

//Displays a singlebar with data 
const SingleBar = (props) => {
  const { left, right, title } = props;

  const [total, setTotal] = useState(0);
  const [incompletePercent, setIncompletePercent] = useState(0);
  const [completePercent, setCompletePercent] = useState(0);
  const [displayInfoLeft, setDisplayInfoLeft] = useState(false);
  const [displayInfoRight, setDisplayInfoRight] = useState(false);

  const findValues = (value1, value2) => {
    const total = value1 + value2;
    const incomPer = Math.round((value1 / total) * 100);
    const complPer = Math.round((value2 / total) * 100);
    setTotal(total);
    setIncompletePercent(incomPer);
    setCompletePercent(complPer);
  };

  const handleMouseOverLeft = () => {
    setDisplayInfoLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setDisplayInfoLeft(false);
  };

  const handleMouseOverRight = () => {
    setDisplayInfoRight(true);
  };

  const handleMouseLeaveRight = () => {
    setDisplayInfoRight(false);
  };

  useEffect(() => {
    findValues(left.value, right.value);
  }, [left.value, right.value]);

  return (
    <div style={{ minHeight: '4.25rem'}}>
      <h4 style={{ marginBottom: ".4rem" }}>
        {title}
        <span style={{ float: "right" }}>{`Total: ${total}`}</span>
      </h4>
      {displayInfoLeft ? (
        <DisplayBox
          total={total}
          title={title}
          percent={incompletePercent}
          value={left.value}
        />
      ) : displayInfoRight ? (
        <DisplayBox
          total={total}
          title={title}
          percent={completePercent}
          value={right.value}
        />
      ) : (
        <br/>
      )}
      <div style={{ display: "flex" }}>
        <span
          style={{
            backgroundColor: left.color,
            width: `${incompletePercent}%`,
            display: "flex",
            border: displayInfoLeft ? "2px solid black" : "none",
          }}
          onMouseEnter={handleMouseOverLeft}
          onMouseOut={handleMouseLeaveLeft}
        >
          {incompletePercent + "%"}
        </span>
        <span
          style={{
            backgroundColor: right.color,
            width: `${completePercent}%`,
            display: "flex",
            border: displayInfoRight ? "2px solid black" : "none",
          }}
          onMouseOver={handleMouseOverRight}
          onMouseOut={handleMouseLeaveRight}
        >
          {completePercent + "%"}
        </span>
      </div>
    </div>
  );
};

export default SingleBar;
