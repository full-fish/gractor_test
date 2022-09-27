import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <>
      <div className={styles.container_left}>
        <div className={styles.mainTitle_left}> 스마트 도시 서비스 주요 현황</div>
        <div className={styles.bar_left}></div>
        <div className={styles.boxs_left}>
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>

      <div className={styles.container_rightUp}>
        <div className={styles.bar_V_rightUp}></div>
        <div className={styles.address_box_rightUp}>
          <div>고척중학교 교차로</div>
          <div>서울특별시 구로구 고척동 76-224</div>
        </div>
        <div className={styles.bar_H_rightUp}></div>
        <li>설치위치</li>
        <div className={styles.gps_rightUp}>
          <div>
            <span>위도</span>
            <span></span>
            <span>37.44564645606</span>
          </div>
          <div>
            <span>경도</span>
            <span></span>
            <span>123.54435645606</span>
          </div>
          <div>
            <span>고도(m)</span>
            <span></span>
            <span>2.60</span>
          </div>
        </div>
        <li>디바이스 상태</li>
      </div>

      <div className={styles.container_rightDown}></div>
    </>
  );
}
export default SideBar;
