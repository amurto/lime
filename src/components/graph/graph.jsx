import React from "react";
import graph from "../../graphs/ins1.png";
import "./graph.css";
// import Plot from "react-plotly.js";

const Graph = () => {
  return (
    // <Plot
    //   data={[
    //     {
    //       x: [1, 2, 3],
    //       y: [2, 6, 3],
    //       type: "scatter",
    //       mode: "lines+points",
    //       marker: { color: "red" }
    //     },
    //     { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
    //   ]}
    //   layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
    // />
    <div className="graph-container">
      <img className="graph" src={graph} />
    </div>
  );
};

export default Graph;
