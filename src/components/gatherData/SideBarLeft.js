import styles from "./SideBarLeft.module.css";
function SideBarLeft() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainTitle}> 스마트 도시 서비스 주요 현황</div>
        <div className={styles.bar}></div>
        <div className={styles.boxs}>
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>

      
    </>
  );
}
export default SideBarLeft;
