import React, { useEffect } from "react";
const { kakao } = window;
function Map() {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);
  return (
    <div
      id="myMap"
      style={{
        top: "80px",
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    ></div>
  );
}

export default Map;
