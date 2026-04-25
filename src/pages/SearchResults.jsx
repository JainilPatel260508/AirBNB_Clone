import React, { useMemo, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/dummyData';
import './SearchResults.css';

// -----------------------------------------------
// SearchResults Component
// Shows a list of properties with a sidebar for filters
// -----------------------------------------------
function SearchResults() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [searchText, setSearchText] = useState('');

  const increaseBedrooms = () => {
    setBedrooms(bedrooms + 1);
  };

  const decreaseBedrooms = () => {
    if (bedrooms > 0) {
      setBedrooms(bedrooms - 1);
    }
  };

  const filteredProperties = useMemo(() => {
    const min = minPrice === '' ? 0 : Number(minPrice);
    const max = maxPrice === '' ? Infinity : Number(maxPrice);
    const text = searchText.toLowerCase().trim();

    return properties.filter((prop) => {
      const isPriceOk = prop.pricePerNight >= min && prop.pricePerNight <= max;
      const isBedroomsOk = bedrooms === 0 || prop.bedrooms >= bedrooms;
      const isTextOk =
        text === '' ||
        prop.location.toLowerCase().includes(text) ||
        prop.category.toLowerCase().includes(text) ||
        prop.title.toLowerCase().includes(text);

      return isPriceOk && isBedroomsOk && isTextOk;
    });
  }, [minPrice, maxPrice, bedrooms, searchText]);

  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setBedrooms(0);
    setSearchText('');
  };

  return (
    <div className="search-results-page">
      <div className="search-container">
        
        {/* Left Sidebar for Filters */}
        <div className="filters-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Search by place or category</h4>
            <input
              type="text"
              className="search-filter-input"
              value={searchText}
              placeholder="Try Jaipur, Beach, Cabin..."
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
          
          <div className="filter-group">
            <h4>Price range</h4>
            <p className="filter-desc">The average nightly price is ₹12,000</p>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="min ₹"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="max ₹"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-group border-top">
            <h4>Rooms and beds</h4>
            <div className="counter-row">
              <span>Bedrooms</span>
              <div className="counter-buttons">
                <button onClick={decreaseBedrooms} type="button">-</button>
                <span>{bedrooms === 0 ? 'Any' : bedrooms}</span>
                <button onClick={increaseBedrooms} type="button">+</button>
              </div>
            </div>
          </div>

          <button className="reset-filters-btn" onClick={resetFilters} type="button">
            Clear all filters
          </button>
          
        </div>

        {/* Right Side: Property List Grid */}
        <div className="results-list">
          <h2>{filteredProperties.length} places found</h2>
          <div className="results-grid">
            {filteredProperties.map((prop) => {
              return <PropertyCard key={prop.id} data={prop} />;
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SearchResults;
