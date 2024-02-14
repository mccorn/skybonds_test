import Chart from "./Chart";
import DATA from "../data";
import { useSelector } from "react-redux";

function Card() {
  const { id } = useSelector(state => state.isin);
  const data = DATA.find(node => node.id === id);

  if (!data) return null;

  return (
    <div className="card">
      <div className="flex" style={{ gap: 10 }}>
        <h4>{data.name}</h4> {data.currency}
      </div>
      <div>
        <div>{data.id}</div>
        <div>{data.description}</div>
      </div>
      <hr></hr>
      <div>
        <Chart
          data={data.data}
          fields={[
            { value: "Open", label: "Open" },
            { value: "Volume", label: "Volume" },
            { value: "Close", label: "Close" },
          ]}
        />
      </div>
    </div>
  );
}

export default Card;