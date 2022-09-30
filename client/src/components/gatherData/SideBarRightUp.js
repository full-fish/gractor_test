import styles from "./SideBarRightUp.module.css";
function SideBarRightUp({ title, gps, address }) {
  // console.log("gps");
  // console.log(gps);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bar_V}></div>
        <div className={styles.address_box}>
          <div>{title}</div>
          <div>{address}</div>
        </div>
        <div className={styles.bar_H}></div>
        <li>설치위치</li>
        <div className={styles.gps}>
          <div>
            <span>위도</span>
            <span></span>
            <span>{gps[0]}</span>
          </div>
          <div>
            <span>경도</span>
            <span></span>
            <span>{gps[1]}</span>
          </div>
          <div>
            <span>고도(m)</span>
            <span></span>
            <span>2.60</span>
          </div>
        </div>
        <li>디바이스 상태</li>
        <table className={styles.deviceCondition}>
          <tbody>
            <tr>
              <td>단말 명칭</td>
              <td>000정보통신</td>
            </tr>
            <tr>
              <td>설치일</td>
              <td>2018.11.25</td>
            </tr>
            <tr>
              <td>단말 운영상태</td>
              <td>정상</td>
            </tr>
            <tr>
              <td>단말 통신상태</td>
              <td>정상</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.bar_H2}></div>
        <div className={styles.bar_H3}></div>
        <div className={styles.subContainer}>
          <div>
            <div>교차로 알리미 서비스</div>
            <div>
              어린이 보호 구역과 교차로 지역에 진입하는 차량 속도를 AI/IoT 기술을 활용하여 보행자 및
              운전자 동시에 알려주는 사고예방 안전서비스 입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBarRightUp;
