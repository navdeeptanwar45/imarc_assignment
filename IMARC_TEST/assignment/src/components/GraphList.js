import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useData } from "../Context/DataContext";

const GraphList = () => {
  const { data, deleteGraph } = useData();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {data.length>0 ?data.map((item, index) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "20px",
              padding: "20px",
            }}
            key={index}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => {
                  navigate(`/graphview/${index}`);
                }}
              >
                View
              </button>
              <button onClick={() => deleteGraph(index)}>Delete</button>
              <button onClick={()=>{navigate('/graphform', {
      state: { index:index+1 },
    })}}>Edit Graph</button>
            </div>
            <LineChart
              width={500}
              height={300}
              data={item.values}
              margin={{
                top: 5,
                right: 30,
                left: 40,
                bottom: 25,
              }}
              style={{}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"date"}>
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
              <Legend payload={[{ value:`${item.itemName}`, type:'rect'}]} verticalAlign="top" height={36}/>
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        );
      }): <div style={{height:'90vh',width:'90vw', display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}><h1> No Graph to show. Please Add a Product </h1> <button onClick={()=>{navigate('/graphform')}}> Add a product</button> </div>      }
    </div>
  );
};

export default GraphList;
