import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navBarBox}>
      <div className={styles.title}>스마트 도시 사업관리 시스템</div>
      <div className={styles.navs}>
        <Link className={styles.nav} to="/dashboard">
          대시보드
        </Link>
        <Link className={styles.nav} to="/service">
          서비스
        </Link>
        <Link className={styles.nav} to="/">
          수집데이터
        </Link>
        <Link className={styles.nav} to="/event">
          이벤트
        </Link>
        <Link className={styles.nav} to="/system">
          시스템관리
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
