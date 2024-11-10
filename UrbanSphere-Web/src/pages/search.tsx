import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import styles from "../styles/search.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import 'react-loading-skeleton/dist/skeleton.css';

// Define the types for locality data
interface Locality {
    location: string;
    AQI: string;
    "PM2.5": number;
    PM10: number;
    Temp: number;
    Humidity: number;
    crime_level: string;
    hospitals: number;
    schools: number;
    markets: number;
    utility_rating: number;
    utility_water: number;
}

type Localities = {
    [city: string]: Locality[];
};

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [localities, setLocalities] = useState<Localities>({});

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchTerm.trim()) {
            toast.error("Search term cannot be empty!");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/data/1.json');
            const data: Localities = await response.json();

            // Filter the localities based on the search term
            const filteredLocalities: Localities = {};
            for (const [city, cityLocalities] of Object.entries(data)) {
                const matchingLocalities = cityLocalities.filter(locality =>
                    locality.location.toLowerCase().includes(searchTerm.toLowerCase())
                );
                if (matchingLocalities.length > 0) {
                    filteredLocalities[city] = matchingLocalities;
                }
            }

            setLocalities(filteredLocalities);
        } catch (error) {
            toast.error("Failed to fetch data, please try again");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClickOutside = (event: MouseEvent) => {
        console.log(event);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.page}>
            <Head>
                <title>Search Locality | UrbanSphere</title>
            </Head>
            <h1 className={styles.header}>Search Locality</h1>
            <section className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            className={styles.searchBar}
                        />
                        <button type="submit" className={styles.searchButton}>
                            {loading ? <TailSpin color="#000" height={20} width={20} /> : 'Search'}
                        </button>
                    </form>
                </div>
            </section>
            <section className={styles.resultsSection}>
                {Object.entries(localities).map(([city, cityLocalities]) => (
                    <div key={city}>
                        <h2 className={styles.cityTitle}>{city}</h2>
                        <div className={styles.gridContainer}>
                            {cityLocalities.map((locality, index) => (
                                <div key={index} className={styles.card}>
                                    <h3>{locality.location}</h3>
                                    <p><strong>AQI:</strong> {locality.AQI}</p>
                                    <p><strong>PM2.5:</strong> {locality["PM2.5"]}</p>
                                    <p><strong>PM10:</strong> {locality.PM10}</p>
                                    <p><strong>Temperature:</strong> {locality.Temp} K</p>
                                    <p><strong>Humidity:</strong> {locality.Humidity}%</p>
                                    <p><strong>Crime Level:</strong> {locality.crime_level}</p>
                                    <p><strong>Hospitals:</strong> {locality.hospitals}</p>
                                    <p><strong>Schools:</strong> {locality.schools}</p>
                                    <p><strong>Markets:</strong> {locality.markets}</p>
                                    <p><strong>Utility Rating:</strong> {locality.utility_rating}/5</p>
                                    <p><strong>Water Utility:</strong> {locality.utility_water}/5</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <ToastContainer />
        </div>
    );
};

export default SearchPage;
