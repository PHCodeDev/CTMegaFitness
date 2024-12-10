import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige o caminho dos ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const OpenStreetMap = () => {
  useEffect(() => {
    const mapElement = document.getElementById("map");
    if (mapElement._leaflet_id) return;

    const map = L.map("map").setView([-4.542029354985136, -40.71960276040862], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([-4.542029354985136, -40.71960276040862])
      .addTo(map)
      .bindPopup("CT Megafitnes")
      .openPopup();

    marker.on("click", () => {
      window.open(
        `https://www.google.com/maps?q=-4.542029354985136,-40.71960276040862`,
        "_blank"
      );
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className="flex mx-auto w-[300px] lg:w-[1000px] 2xl:w-[1200px] h-[300px] lg:h-[500px] 2xl:h-[800px] rounded-2xl border border-marrom mb-20"
    ></div>
  );
};

export default OpenStreetMap;
