import { formatInput } from "./management";
import SingleBar from "../SingleBar";

//Displays multibar component either hard-coded or api based data
const MultiBar = (props) => {
  const arrOfValues = props;
  const formatedInputArr = formatInput(arrOfValues);

  return (
    <div>
      {formatedInputArr.map((item) => {
        return (
          <SingleBar
            key={item.index}
            left={item.left}
            right={item.right}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default MultiBar;
