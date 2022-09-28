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
      data: [
        "등원",
        "미등원",
        "등원승차",
        "등원미승차",
        "하원",
        "미하원",
        "하원승차",
        "하원미승차",
      ],
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
        roseType: "area",
        radius: ["30%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
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
          { value: 1, name: "미등원", itemStyle: { color: "rgba(238, 85, 150, 0.5)" } },
          { value: 1, name: "등원미승차", itemStyle: { color: "rgba(36, 161, 72, 0.5)" } },
          { value: 1, name: "미하원", itemStyle: { color: "rgba(165, 110, 255, 0.5)" } },
          { value: 1, name: "하원미승차", itemStyle: { color: "rgba(51, 177, 255, 0.5)" } },
        ],
      },
      {
        left: "-30px",
        width: "265px",
        height: "265px",
        name: "Access From",
        type: "pie",
        selectedMode: "single",
        radius: ["30%", "68%"],
        label: {
          show: false,
          position: "inner",
          fontSize: 14,
          formatter: "{d}",
        },
        roseType: "area",
        labelLine: {
          show: false,
        },
        data: [
          { value: 134 / 15, name: "등원", itemStyle: { color: "rgba(238, 85, 150, 1)" } },
          { value: 136 / 14, name: "등원승차", itemStyle: { color: "rgba(36, 161, 72, 1)" } },
          { value: 131 / 18, name: "하원", itemStyle: { color: "rgba(165, 110, 255, 1)" } },
          { value: 143 / 15, name: "하원승차", itemStyle: { color: "rgba(51, 177, 255, 1)" } },
        ],
      },
      {
        left: "-30px",
        width: "265px",
        height: "265px",
        name: "Access From",
        type: "pie",
        selectedMode: "single",
        radius: ["30%", "68%"],
        label: {
          position: "inner",
          fontSize: 14,
          color: "white",
          formatter: "{b}",
        },
        roseType: "area",
        labelLine: {
          show: false,
        },
        data: [
          { value: 134 / 15, name: "134/15", itemStyle: { color: "rgba(238, 85, 150, 0)" } },
          { value: 136 / 14, name: "136/14", itemStyle: { color: "rgba(36, 161, 72, 0)" } },
          { value: 131 / 18, name: "131/18", itemStyle: { color: "rgba(165, 110, 255, 0)" } },
          { value: 143 / 15, name: "143/15", itemStyle: { color: "rgba(51, 177, 255, 0)" } },
        ],
      },
    ],
  });

  return <ECharts option={options} />;
}
export default Echarts;
