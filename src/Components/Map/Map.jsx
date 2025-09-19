import React, { memo, useLayoutEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = React.memo(() => {
  useLayoutEffect(() => {
    const existingMap = L.DomUtil.get("nebras-map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }

    const map = L.map("nebras-map", {
      center: [26.30266, 50.21473],
      zoom: 15,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      minZoom: 19,
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([26.30266, 50.21473]).addTo(map).bindPopup("Nebras Location");

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => map.remove();
  }, []);

  return (
    <>
      <div
        id="location"
        className="rounded-3xl relative w-full overflow-hidden shadow-md shadow-secColor/30 border border-secColor/10 mb-16"
      >
        <div id="nebras-map" className="w-full h-[400px] rounded-3xl"></div>
      </div>
    </>
  );
});

export default memo(Map);
