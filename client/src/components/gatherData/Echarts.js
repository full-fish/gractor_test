import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
function Echarts({ text, left, top }) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },
    title: {
      top: `${top}`,
      left: `${left}`,
      text: `${text}`,
      textStyle: { fontSize: "14", color: "#4D5358" },
    },
    legend: {
      orient: "vertical",
      top: "22%",
      left: "72%",
      icon: "circle",
    },
    series: [
      {
        left: "-30px",
        width: "265px",
        height: "265px",
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inner",
          formatter: "{c}",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "A등급" },
          { value: 735, name: "B등급" },
          { value: 580, name: "C등급" },
          { value: 484, name: "D등급" },
          { value: 300, name: "E등급" },
        ],
      },
    ],
  });

  return <ECharts option={options} />;
}
export default Echarts;
