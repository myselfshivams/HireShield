
import { NextApiRequest, NextApiResponse } from 'next';

type LocationData = {
  location: string;
  AQI: string;
  'PM2.5': number;
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

type CityData = {
  [city: string]: LocationData[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let response = await fetch('https://urban-sphere.studex.tech/data/1.json'); 
    if (!response.ok) {
      response = await fetch('http://localhost:3000/data/1.json');
      // return res.status(500).json({ error: 'Failed to fetch JSON file' });
    }
    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch JSON file' });
    }
    // const data = await response.json(); // Parse the JSON data from the response
  // console.log('Fetched data:', data); 

    const data: CityData = await response.json();

    console.log('data', data);

    res.status(200).json(data);
  } catch (error) {
    console.error(error); 
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(500).json({ error: 'Failed to fetch or parse JSON file', details: errorMessage });
  }
}
