import styles from "./css/SideBarRightDown.module.css";
function SideBarRightDown() {
  return (
    <>
      <div className={styles.container}>
        <div>대상시절 및 단말 운영현황</div>
        <div className={styles.bar_H}></div>
        <div className={styles.label}>
          <div>
            <div></div>
            <div>설치</div>
          </div>
          <div>
            <div style={{ background: "#EE6F17" }}></div>
            <div>상태알림</div>
          </div>
          <div>
            <div style={{ background: "#8A3FFC" }}></div>
            <div>이벤트</div>
          </div>
        </div>
        <div className={styles.barH2}></div>
        <li>위험시설물 예경보 알림 서비스</li>
        <table>
          <tbody>
            <tr>
              <th>대상시설</th>
              <th>
                <div>320</div> <div> 개소</div>
              </th>
              <th>3</th>
              <th>5</th>
            </tr>
            <tr>
              <th>단말기</th>
              <th>
                <div>632</div> <div>개</div>
              </th>
              <th>8</th>
              <th>412</th>
            </tr>
          </tbody>
        </table>
        <div className={styles.barH2} style={{ top: "192px" }}></div>
        <li style={{ top: 207 }}>교차로 알림 서비스</li>
        <table style={{ top: "238px" }}>
          <tbody>
            <tr>
              <th>대상시설</th>
              <th>
                <div>320</div> <div> 개소</div>
              </th>
              <th>3</th>
              <th>5</th>
            </tr>
            <tr>
              <th>단말기</th>
              <th>
                <div>632</div> <div>개</div>
              </th>
              <th>8</th>
              <th>412</th>
            </tr>
          </tbody>
        </table>
        <div className={styles.barH2} style={{ top: "297px" }}></div>
        <li style={{ top: 312 }}>우회전 알리미 서비스</li>
        <table style={{ top: "343px" }}>
          <tbody>
            <tr>
              <th>대상시설</th>
              <th>
                <div>320</div> <div> 개소</div>
              </th>
              <th>3</th>
              <th>5</th>
            </tr>
            <tr>
              <th>단말기</th>
              <th>
                <div>632</div> <div>개</div>
              </th>
              <th>8</th>
              <th>412</th>
            </tr>
          </tbody>
        </table>
        <div className={styles.barH2} style={{ top: "402px" }}></div>
      </div>
    </>
  );
}
export default SideBarRightDown;
