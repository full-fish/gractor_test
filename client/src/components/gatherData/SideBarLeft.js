import styles from "./SideBarLeft.module.css";
import Echarts from "./Echarts";
import Echarts2 from "./Echarts2";
function SideBarLeft() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainTitle}> 스마트 도시 서비스 주요 현황</div>
        <div className={styles.bar}></div>
        <div className={styles.boxs}>
          <div>
            <div className={styles.subTitle}>위험물 예·경보 알림 서비스</div>

            <div className={styles.EchartsBox}>
              <Echarts text={"시설물등급"} left={"23%"} top={"40%"} />
            </div>
          </div>
          <div>
            <div className={styles.subTitle}>홀몸어르신 안심 서비스</div>

            <div className={styles.EchartsBox}>
              <Echarts
                text={` 어르신
위험등급`}
                left={"26%"}
                top={"38%"}
              />
            </div>
          </div>
          <div>
            <div className={styles.subTitle}>어린이집 알림 서비스</div>
            <div className={styles.EchartsBox}>
              <Echarts2
                text={`단말상태
총149개`}
                left={"26%"}
                top={"38%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBarLeft;
