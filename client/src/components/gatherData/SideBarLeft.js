import styles from "./css/SideBarLeft.module.css";
import Echarts from "./Echarts";
import Echarts2 from "./Echarts2";
import axios from "axios";
import React, { useEffect, useState } from "react";
let data;

async function getchart() {
  const res = await axios.get("http://localhost:8000/api/chart", { withCredentials: true });
  return res;
}
function SideBarLeft() {
  const [chartData, setChartData] = useState({});
  const [select, setSelect] = useState("0");
  useEffect(() => {
    getchart().then((res) => {
      data = res.data.data;
      setChartData(data[0]);
    });
  }, []);
  const onClick = (e) => {
    setSelect(e.target.value);

    console.log(e.target.value);
    setChartData(data[e.target.value]);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainTitle}> 스마트 도시 서비스 주요 현황</div>
        <div className={styles.bar}></div>
        <div className={styles.boxs}>
          <div>
            <div className={styles.subTitle}>위험물 예·경보 알림 서비스</div>

            <div className={styles.EchartsBox}>
              {Object.keys(chartData).length === 0 ? null : (
                <Echarts
                  chartData={chartData.chart1}
                  text={"시설물등급"}
                  left={"23%"}
                  top={"40%"}
                  select={1}
                />
              )}
            </div>
          </div>
          <div>
            <div className={styles.subTitle}>홀몸어르신 안심 서비스</div>

            <div className={styles.EchartsBox}>
              {Object.keys(chartData).length === 0 ? null : (
                <Echarts
                  chartData={chartData.chart2}
                  text={` 어르신
위험등급`}
                  left={"26%"}
                  top={"38%"}
                  select={2}
                />
              )}
            </div>
          </div>
          <div>
            <div className={styles.subTitle}>어린이집 알림 서비스</div>
            <div className={styles.EchartsBox}>
              {Object.keys(chartData).length === 0 ? null : (
                <Echarts2
                  chartData={chartData.chart3}
                  text={`단말상태
총149개`}
                  left={"26%"}
                  top={"38%"}
                />
              )}
            </div>
          </div>
        </div>
        <button
          className={select === "0" ? styles.select : styles.nonSelect}
          onClick={onClick}
          value={0}
        ></button>
        <button
          className={select === "1" ? styles.select : styles.nonSelect}
          onClick={onClick}
          value={1}
          style={{ left: "150px" }}
        ></button>
        <button
          className={select === "2" ? styles.select : styles.nonSelect}
          onClick={onClick}
          value={2}
          style={{ left: "170px" }}
        ></button>
      </div>
    </>
  );
}
export default SideBarLeft;
