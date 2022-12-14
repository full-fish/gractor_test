import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import React, { useEffect, useState } from "react";
const axios = require("../../services/navBar");

function NavBar() {
  const [ip, setIp] = useState("서버 연결이 되지 않습니다.");
  useEffect(() => {
    axios.getNavBar().then((res) => {
      setIp(res.data.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <img src="img/title.png" crossOrigin="anonymous" alt=""></img>
      <div className={styles.title}>스마트 도시 사업관리 시스템</div>
      <div className={styles.navs}>
        <Link to="/dashboard">대시보드</Link>
        <Link to="/service">서비스</Link>
        <Link to="/">수집데이터</Link>
        <Link to="/event">이벤트</Link>
        <Link to="/system">시스템관리</Link>
      </div>
      <div className={styles.adminInfoBox}>
        <div>ip: {ip}</div>
        <div>관리자 홍길동</div>
      </div>
      <div className={styles.logOut}>로그아웃</div>
    </div>
  );
}
export default NavBar;
