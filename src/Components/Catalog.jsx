import React, { useState } from 'react';
import '../Components/Catalog.css';

function Catalog() {
    const [minValue, setMinValue] = useState(3);
    const [maxValue, setMaxValue] = useState(223);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    const products = [
        { id: 1, price: '5000 руб', imageUrl: '/path/to/image', currency: '₽' },
        { id: 2, price: '5000 руб', imageUrl: '/path/to/image', currency: '₽' },
        { id: 3, price: '5000 руб', imageUrl: '/path/to/image', currency: '₽' },
        { id: 4, price: '$500.00', imageUrl: '/path/to/image', currency: '$' },
        { id: 5, price: '$500.00', imageUrl: '/path/to/image', currency: '$' },
        { id: 6, price: '$1,000.00', imageUrl: '/path/to/image', currency: '$' },
        { id: 7, price: '5000 руб', imageUrl: '/path/to/image', currency: '₽' },
        { id: 8, price: '$500.00', imageUrl: '/path/to/image', currency: '$' },
        { id: 9, price: '$500.00', imageUrl: '/path/to/image', currency: '$' },
    ];

    return (
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
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt="Product" />
                            <p className="price">{product.price}</p>
                            <button className="buy-button">Купить</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
