import styles from "./css/BottomBar.module.css";

function BottomBar2() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.title}>
            <img src="img/arrow_H.png" crossOrigin="anonymous" alt="" />
            <div>도시 서비스 선택</div>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="img/BottomBar_1.png" crossOrigin="anonymous" alt="" />
            <div>위험시설물 예·경보 알림 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_2.png" crossOrigin="anonymous" alt="" />
            <div>교차로 알리미 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_3.png" crossOrigin="anonymous" alt="" />
            <div>우회전 알리미 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_4.png" crossOrigin="anonymous" alt="" />
            <div>홀몸어르신 안심 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_5.png" crossOrigin="anonymous" alt="" />
            <div>어린이집 알림 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_6.png" crossOrigin="anonymous" alt="" />
            <div>특수학교 알림 서비스</div>
          </div>
          <div>
            <img src="img/BottomBar_7.png" crossOrigin="anonymous" alt="" />
            <div>스마트 보안등 서비스</div>
          </div>
          <div className={styles.subContainer}>
            <div>
              <img src="img/clock.png" crossOrigin="anonymous" alt="" />
              <div>재생시간</div>
              <input type="text" />
              <div style={{ left: "174px" }}>분</div>
              {/* <input type="button" value="저장" /> */}
              <button>저장</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomBar2;
