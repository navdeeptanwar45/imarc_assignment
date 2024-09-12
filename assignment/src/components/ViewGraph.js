import React from "react";
import {
  LineChart,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useData } from "../Context/DataContext";
const ViewGraph = () => {
  const { data } = useData();
  const graph = data[0];
  const total = graph.values.reduce((totalAmount, currentAmount) => {
    return Number(currentAmount.price) + totalAmount;
  }, 0);
  return (
    <div>
      <h2>{graph.itemName}</h2>
      <div style={{ display: "flex" }}>
        <div>
          <LineChart
            width={1200}
            height={600}
            data={graph.values}
            margin={{
              top: 5,
              right: 30,
              left: 40,
              bottom: 25,
            }}
            style={{}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"date"} interval={Math.floor((graph.values)/8)}>
              <Label
                value="Date"
                offset={0}
                position="bottom"
                style={{ fontWeight: "700", fill: "black" }}
              />
            </XAxis>
            <YAxis dataKey={"price"}>
              <Label
                color="black"
                value="Price"
                offset={0}
                position="left"
                style={{ fontWeight: "700", fill: "black" }}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="date" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div>
          <h3>Total Amount:{total} </h3>
        </div>
      </div>
    </div>
  );
};

export default ViewGraph;
