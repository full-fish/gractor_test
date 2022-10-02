import ECharts from "echarts-for-react";
function Echarts({ chartData, text, left, top, select }) {
  let data = [];
  if (select === 1) {
    data = [
      { value: chartData[0], name: "A등급" },
      { value: chartData[1], name: "B등급" },
      { value: chartData[2], name: "C등급" },
      { value: chartData[3], name: "D등급" },
      { value: chartData[4], name: "E등급", itemStyle: { color: "#C2352B" } },
    ];
  } else {
    data = [
      { value: chartData[0], name: "정상" },
      { value: chartData[1], name: "보통" },
      { value: chartData[2], name: "주의" },
      { value: chartData[3], name: "위험" },
      { value: chartData[4], name: "고독사예지", itemStyle: { color: "#C2352B" } },
    ];
  }

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
            data: data,
          },
        ],
      }}
    />
  );
}
export default Echarts;
