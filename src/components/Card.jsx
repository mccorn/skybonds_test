import Chart from "./Chart";
import DATA, { list_1, list_2 } from "../data";

function Card() {
  const data = DATA[0];

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
          data={list_1.concat(list_2)}
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