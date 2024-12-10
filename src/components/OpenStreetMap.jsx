import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = () => {
  useEffect(() => {
    const mapElement = document.getElementById('map');
    if (mapElement._leaflet_id) return; 

    const map = L.map('map').setView([-4.542029354985136, -40.71960276040862], 17); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([-4.542029354985136, -40.71960276040862]).addTo(map)
      .bindPopup('CT Megafitnes')
      .openPopup();

    marker.on('click', () => {
      window.open(
        `https://www.google.com/maps?q=-4.542029354985136, -40.71960276040862`,
        '_blank'
      );
    });

    return () => {
      map.remove(); 
    };
  }, []);

  return (
    <div 
      id="map" 
      className="flex mx-auto w-[300px] lg:w-[1000px] h-[300px] lg:h-[500px] rounded-2xl border border-marrom mb-20"
    ></div>
  );
};

export default OpenStreetMap;
