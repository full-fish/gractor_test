import styles from "./css/TopBar.module.css";
import React, { useState } from "react";

function TopBar() {
  const [dt, setDt] = useState(new Date());
  setInterval(() => setDt(new Date()), 1000);
  const year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let date = dt.getDate();
  let hour = dt.getHours();
  let min = dt.getMinutes();
  let second = dt.getSeconds();
  month = month < 10 ? (month = "0" + month) : month;
  date = date < 10 ? (date = "0" + date) : date;
  hour = hour < 10 ? (hour = "0" + hour) : hour;
  min = min < 10 ? (min = "0" + min) : min;
  second = second < 10 ? (second = "0" + second) : second;

  return (
    <div className={styles.container}>
      <div>현재시각</div>
      <div>
        {hour}:{min}:{second}
      </div>
      <div>
        {year}.{month}.{date}
      </div>
      <div className={styles.bar_V}></div>
      <div>날씨</div>
      <div>21</div>
      <div>℃</div>
      <img src="img/cloud.png" crossOrigin="anonymous" alt="" />
      <div className={styles.bar_V} style={{ left: "348px" }}></div>
      <div>PM2.5</div>
      <div>27</div>
      <div>좋음</div>
      <div className={styles.bar_V} style={{ left: "452px" }}></div>
      <img src="img/T.png" crossOrigin="anonymous" alt="" />
    </div>
  );
}
export default TopBar;
