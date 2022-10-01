import React, { useEffect, useState } from "react";
import SideBarLeft from "./SideBarLeft";
import SideBarRightUp from "./SideBarRightUp";
import SideBarRightDown from "./SideBarRightDown";
import TopBar from "./TopBar";
import styles from "./css/Map.module.css";
import axios from "axios";
import BottomBar from "./BottomBar";

async function getPositionInfo() {
  const res = await axios.get("http://localhost:8000/api/location", { withCredentials: true });
  return res;
}
const { kakao } = window;
function Map({}) {
  const [positions, setPositions] = useState([]);
  const [title, setTitle] = useState("그렉터");
  const [gps, setGps] = useState([37.5113945, 127.0796585]);
  const [address, setAddress] = useState("서울특별시 송파구 올림픽로 82");
  const [slideBarValue, setSlideBarValue] = useState(9);
  let map = "";
  useEffect(() => {
    getPositionInfo().then((res) => {
      let data = res.data.data;
      data.map((ele) => (ele["latlng"] = new kakao.maps.LatLng(ele.lat, ele.lng)));
      setPositions(data);
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(...gps),
      level: 15 - slideBarValue,
    };
    map = new kakao.maps.Map(container, options);
    map.setZoomable(false); // 스크롤줌 막음
    // ! 마커
    let marker = [];
    for (let i = 0; i < positions.length; i++) {
      marker.push(
        new kakao.maps.Marker({
          position: positions[i].latlng,
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          map: map,
        })
      );
    }

    //! 인포윈도우
    var content = [
      `<div style="border: 2px solid #027FC2; border-radius:17px; background:#ffffff; padding:8px 20px;">그렉터</div>`,
      `<div style="border: 2px solid #027FC2; border-radius:17px; background:#ffffff; padding:8px 20px;">종합운동장</div>`,
      `<div style="border: 2px solid #027FC2; border-radius:17px; background:#ffffff; padding:8px 20px;">롯데월드</div>`,
    ];

    for (let i = 0; i < positions.length; i++) {
      var customOverlay = new kakao.maps.CustomOverlay({
        position: positions[i].latlng,
        content: content[i],
        xAnchor: 0.5, // 컨텐츠의 x 위치
        yAnchor: 2.1, // 컨텐츠의 y 위치
        map: map,
      });
    }
    //! 마커 클릭 이벤트

    for (let i = 0; i < marker.length; i++) {
      kakao.maps.event.addListener(marker[i], "click", function () {
        setTitle(positions[i].title);
        setGps([positions[i].latlng.getLat(), positions[i].latlng.getLng()]);
        setAddress(positions[i].address);
      });
    }
  }, [slideBarValue, positions]);
  //! 슬라이드 바 관련
  function zoomIn() {
    if (slideBarValue < 14) {
      setSlideBarValue((cur) => cur + 1);
      map.setLevel(map.getLevel() - 1);
    }
  }
  function zoomOut() {
    if (slideBarValue > 1) {
      setSlideBarValue((cur) => cur - 1);
      map.setLevel(map.getLevel() + 1);
    }
  }
  const onChange = (e) => {
    setSlideBarValue(parseInt(e.target.value));
    map.setLevel(slideBarValue);
  };
  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100vw",
          height: "99vh",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <SideBarLeft />
        <SideBarRightUp title={title} gps={gps} address={address} />;
        <SideBarRightDown />
        <TopBar />
        <BottomBar />
        <div className={styles.slideBarBox}>
          <div className={styles.slideBarUp} onClick={zoomIn}>
            +
          </div>
          <div className={styles.slideBar_barH}></div>
          <input
            className={styles.slideBar}
            id="temp"
            type="range"
            step="1"
            onChange={onChange}
            value={slideBarValue}
            min="1"
            max="14"
          />
          <div className={styles.slideBar_barH} style={{ top: "164px" }}></div>
          <div className={styles.slideBarDown} onClick={zoomOut}>
            -
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
