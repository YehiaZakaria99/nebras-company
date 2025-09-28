import React, { memo, useLayoutEffect } from "react";
import L from "leaflet";
// const HTMLFlipBook = lazy(() => import("react-pageflip"));
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  useLayoutEffect(() => {
    const existingMap = L.DomUtil.get("nebras-map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }

    const map = L.map("nebras-map", {
      center: [26.30266, 50.21473],
      zoom: 17,
      scrollWheelZoom : false
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      minZoom: 3,
      maxZoom: 22,
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([26.30266, 50.21473]).addTo(map).bindPopup("Nebras Location");

    // إصلاح البكسلة / الرمادية
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => map.remove();
  }, []);

  return (
    <div
      id="location"
      className="rounded-3xl relative w-full overflow-hidden shadow-md shadow-secColor/30 border border-secColor/10 mb-16"
    >
      <div id="nebras-map" className="w-full h-[400px] rounded-3xl"></div>
    </div>
  );
};

export default memo(Map);
