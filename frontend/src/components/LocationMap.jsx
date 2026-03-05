import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const LocationMap = () => {
  const position = [6.3350, 5.6037]; // Benin City coordinates

  return (
    // <section className="my-16 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-6">
    <section className="my-16 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
            <span className="text-[var(--primary-neon)]">Our</span> Location
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto">
            Visit us at our Benin City office for solar consultations
          </p>
          <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto">
          No:27 first east circular road opposite salvation army before esigie junction
          </p>
        </div>

        <div className="h-[400px] rounded-xl overflow-hidden border border-[var(--border)]">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-[var(--text)]">
                  <h3 className="font-bold text-[var(--primary-neon)]">Sun Peak Energy</h3>
                  <p className="text-sm mt-2">
                    27 First East Circular Road<br/>
                    Benin City, Edo State
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;