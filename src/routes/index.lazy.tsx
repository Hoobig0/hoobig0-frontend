import { useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import cctvImage from "/cctv.svg";
import { cctv_list } from "../libs/data";
export const Route = createLazyFileRoute("/")({
  component: Index,
});
declare global {
  interface Window {
    kakao: any;
  }
}
function Index() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.279248, 127.044517),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container as HTMLElement, options);
    const imageSrc = cctvImage;
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    cctv_list.map((cctv) => {
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(cctv.cctv_x, cctv.cctv_y),
        image: markerImage,
      });
    });
  }, []);

  return (
    <>
      <h1>아주대 맛집이지만 CCTV인척</h1>
      <div
        id="map"
        style={{
          width: "800px",
          height: "800px",
          border: "1px solid black",
        }}></div>
    </>
  );
}

export default Index;
