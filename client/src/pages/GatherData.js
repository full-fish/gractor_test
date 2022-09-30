import styles from "./OtherPages.module.css";
import Map from "../components/gatherData/Map";
import SideBarLeft from "../components/gatherData/SideBarLeft";
import SideBarRightUp from "../components/gatherData/SideBarRightUp";
import SideBarRightDown from "../components/gatherData/SideBarRightDown";
function GatherData() {
  return (
    <div>
      <Map />
      <SideBarLeft />
      <SideBarRightDown />
    </div>
  );
}
export default GatherData;
