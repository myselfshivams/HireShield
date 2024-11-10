// components/LocalityCard.tsx

import React from 'react';

type LocalityProps = {
  location: string;
  AQI: string;
  PM25: number;
  PM10: number;
  Temp: number;
  Humidity: number;
  crime_level: string;
  hospitals: number;
  schools: number;
  markets: number;
  utility_rating: number;
  utility_water: number;
};

const LocalityCard: React.FC<LocalityProps> = ({
  location,
  AQI,
  PM25,
  PM10,
  Temp,
  Humidity,
  crime_level,
  hospitals,
  schools,
  markets,
  utility_rating,
  utility_water,
}) => (
  <div className="card">
    <h3>{location}</h3>
    <p>AQI: {AQI}</p>
    <p>PM2.5: {PM25}</p>
    <p>PM10: {PM10}</p>
    <p>Temperature: {Temp}°C</p>
    <p>Humidity: {Humidity}%</p>
    <p>Crime Level: {crime_level}</p>
    <p>Hospitals: {hospitals}</p>
    <p>Schools: {schools}</p>
    <p>Markets: {markets}</p>
    <p>Utility Rating: {utility_rating}/5</p>
    <p>Water Utility: {utility_water}/5</p>
  </div>
);

export default LocalityCard;
