import React from "react";
import ECharts from "echarts-for-react";
function Echarts({ chartData, text, left, top }) {
  return (
    <ECharts
      option={{
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
          top: "13%",
          left: "70%",
          icon: "circle",
        },
        series: [
          {
            left: "-30px",
            width: "265px",
            height: "265px",
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
              {
                value: chartData[0] / chartData[1],
                name: "등원",
                itemStyle: { color: "rgba(238, 85, 150, 1)" },
              },
              {
                value: chartData[2] / chartData[3],
                name: "등원승차",
                itemStyle: { color: "rgba(36, 161, 72, 1)" },
              },
              {
                value: chartData[4] / chartData[5],
                name: "하원",
                itemStyle: { color: "rgba(165, 110, 255, 1)" },
              },
              {
                value: chartData[6] / chartData[7],
                name: "하원승차",
                itemStyle: { color: "rgba(51, 177, 255, 1)" },
              },
            ],
          },
          {
            left: "-30px",
            width: "265px",
            height: "265px",
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
              {
                value: chartData[0] / chartData[1],
                name: `${chartData[0]} / ${chartData[1]}`,
                itemStyle: { color: "rgba(238, 85, 150, 0)" },
              },
              {
                value: chartData[2] / chartData[3],
                name: `${chartData[2]} / ${chartData[3]}`,
                itemStyle: { color: "rgba(36, 161, 72, 0)" },
              },
              {
                value: chartData[4] / chartData[5],
                name: `${chartData[4]} / ${chartData[5]}`,
                itemStyle: { color: "rgba(165, 110, 255, 0)" },
              },
              {
                value: chartData[6] / chartData[7],
                name: `${chartData[6]} / ${chartData[7]}`,
                itemStyle: { color: "rgba(51, 177, 255, 0)" },
              },
            ],
          },
        ],
      }}
    />
  );
}
export default Echarts;
