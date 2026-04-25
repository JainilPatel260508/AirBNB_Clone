import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/dummyData';
import { Compass, Umbrella, Trees, Building2, Sparkles, Bed, Waves } from 'lucide-react';
import './Home.css';

// -----------------------------------------------
// Home Component
// This is the main page that users see first.
// It shows a list of categories at the top and a 
// grid of all available properties below it.
// -----------------------------------------------
function Home() {
  // We use this state to know which category button the user clicked
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedPropertyIds, setSavedPropertyIds] = useState([]);

  // These are the simple categories we want to show
  const categories = ['All', 'Beach', 'Cabin', 'Modern Apartment', 'Unique', 'Rooms', 'Pools'];
  const categoryIcons = {
    All: Compass,
    Beach: Umbrella,
    Cabin: Trees,
    'Modern Apartment': Building2,
    Unique: Sparkles,
    Rooms: Bed,
    Pools: Waves
  };

  // This function runs when a user clicks a category button
  const handleCategoryClick = function(categoryName) {
    setActiveCategory(categoryName);
  };

  useEffect(function() {
    const savedData = localStorage.getItem('saved-property-ids');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed)) {
          setSavedPropertyIds(parsed);
        }
      } catch (error) {
        setSavedPropertyIds([]);
      }
    }
  }, []);

  const handleToggleSave = function(propertyId) {
    setSavedPropertyIds(function(previousIds) {
      let nextIds = [];

      if (previousIds.includes(propertyId)) {
        nextIds = previousIds.filter(function(id) {
          return id !== propertyId;
        });
      } else {
        nextIds = [...previousIds, propertyId];
      }

      localStorage.setItem('saved-property-ids', JSON.stringify(nextIds));
      return nextIds;
    });
  };

  // We filter the properties based on what category is active
  let propertiesToShow = [];
  
  if (activeCategory === 'All') {
    // If 'All' is selected, we show everything
    propertiesToShow = properties;
  } else {
    // Otherwise, we only show properties that match the chosen category
    // We use a simple filter loop
    propertiesToShow = properties.filter(function(property) {
      return property.category === activeCategory;
    });
  }

  return (
    <div className="home-page">
      
      {/* 
        1. Category Filter Bar 
        This row shows the different icons/buttons to filter properties
      */}
      <div className="category-bar">
        {categories.map(function(categoryName, index) {
          const CategoryIcon = categoryIcons[categoryName];

          // We check if this button is the active one to give it a darker color
          let buttonClass = "category-button";
          if (activeCategory === categoryName) {
            buttonClass = "category-button active-category";
          }

          return (
            <button 
              key={index} 
              className={buttonClass} 
              onClick={function() { handleCategoryClick(categoryName); }}
              type="button"
            >
              <span className="category-icon">
                <CategoryIcon size={20} strokeWidth={1.9} />
              </span>
              
              <span className="category-name">{categoryName}</span>
            </button>
          );
        })}
      </div>

      {/* 
        2. Properties Grid
        This is where all the property cards are displayed.
      */}
      <div className="properties-grid-container">
        {propertiesToShow.map(function(property) {
          const isCardSaved = savedPropertyIds.includes(property.id);
          return (
            <PropertyCard
              key={property.id}
              data={property}
              isSaved={isCardSaved}
              onToggleSave={handleToggleSave}
            />
          );
        })}
      </div>

      {/* If there are no properties found, show a simple message */}
      {propertiesToShow.length === 0 && (
        <div className="no-properties-message">
          <h3>No properties found for this category!</h3>
        </div>
      )}

    </div>
  );
}

export default Home;
