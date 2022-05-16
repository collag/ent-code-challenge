import useFetch from "../../services/useFetch";
import MultiBar from "../../components/MultiBar";
import SingleBar from "../../components/SingleBar";
import { values } from "./management";

//Parent component to SingleBar and MultiBar
const Home = () => {
  const url =
    "https://gist.githubusercontent.com/gargrave/e2fd3d07d44862a094dabb36137a9187/raw/30d126f95eefa84895c1f5608eea69cd92629e2a/mock-api.json";

  const [data] = useFetch(url);
  const multibarValues = values;

  return (
    <>
      <div style={{ marginBottom: "3rem" }}>
        <h2>SingleBar Component</h2>
        <SingleBar
          left={{ color: "#007cff", value: 48 }}
          right={{ color: "#ffe944", value: 272 }}
          title="Tasks Completed"
        />
      </div>
      <div style={{ marginBottom: "3rem" }}>
        {multibarValues && (
          <div>
            <h2>MultiBar Component</h2>
            <MultiBar values={multibarValues} />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "3rem" }}>
        {data && data.length >= 1 ? (
          <div>
            <h2>AsyncMultiBar Component</h2>
            <MultiBar values={data} />
          </div>
        ) : (
          <>
            <h2>AsyncMultiBar Component</h2>
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
