import React, { useState, useEffect } from 'react';
import '../Components/Catalog.css';
import axios from 'axios';
import Header from '../Components/Header';

function Catalog() {
    const [filteredData, setFilteredData] = useState(null);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    const filterByPrice = () => {
        if (!data) return;
        const filtered = data.filter(item => item.price >= minValue && item.price <= maxValue);
        setFilteredData(filtered);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://6072-94-141-124-60.ngrok-free.app/api/detail/all', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                setData(response.data);
                setFilteredData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        filterByPrice();
    }, [minValue, maxValue, data]);
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header></Header>
            <div className='glivn'>
                <div className="container-catalog">
                    <nav>
                        <ul>
                            <li>Популярные товары</li>
                            <li>АвтоХимия</li>
                            <li>Шины</li>
                            <li>Аксессуары и инструменты</li>
                        </ul>
                    </nav>
                </div>
                <div className="container-common">
                    <div className="sidebar">
                        <div className="filter-section">
                            <h4>Price Range</h4>
                            <div className="range-container">
                                <input
                                    type="number"
                                    className="range-input"
                                    value={minValue}
                                    onChange={handleMinChange}
                                    min="0"
                                    max="10000"
                                />
                                <span>:</span>
                                <input
                                    type="number"
                                    className="range-input"
                                    value={maxValue}
                                    onChange={handleMaxChange}
                                    min="0"
                                    max="10000"
                                />
                                <div className="slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        value={minValue}
                                        onChange={handleMinChange}
                                        className="slider"
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        value={maxValue}
                                        onChange={handleMaxChange}
                                        className="slider"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="filter-section">
                            <h4>Color</h4>
                            <label><input type="checkbox" value="blue" /> Blue <span>(1)</span></label>
                            <label><input type="checkbox" value="green" /> Green <span>(1)</span></label>
                            <label><input type="checkbox" value="purple" /> Purple <span>(1)</span></label>
                            <label><input type="checkbox" value="yellow" /> Yellow <span>(1)</span></label>
                        </div>
                        <div className="filter-section">
                            <h4>Categories</h4>
                            <label><input type="checkbox" value="uncategorised" /> Uncategorised <span>(1)</span></label>
                            <label><input type="checkbox" value="shop" /> Shop <span>(1)</span></label>
                        </div>
                    </div>
                    <div className="product-grid">
                        {filteredData && filteredData.map((item) => (
                            <div key={item.detail_id} className="product-card">
                                <img src={`data:image/png;base64,${item.img}`} />
                                <h2>{item.name}</h2>
                                <div className="info">
                                    <p className="price">Price: {item.price}</p>
                                    <button className="buy-button">Купить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;
