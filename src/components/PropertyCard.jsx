import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './PropertyCard.css';

// -----------------------------------------------
// PropertyCard Component
// This component displays a single property in a box.
// It receives the property details as 'data' prop.
// -----------------------------------------------
function PropertyCard(props) {
  // We extract the data passed from the parent component
  const property = props.data;

  // We show all images in the card using a carousel
  const allImages = [property.image, ...property.images];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [localSaved, setLocalSaved] = useState(false);

  const isSaved = typeof props.isSaved === 'boolean' ? props.isSaved : localSaved;

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const openImageFromDot = (e, index) => {
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  const toggleSave = (e) => {
    e.preventDefault();
    if (props.onToggleSave) {
      props.onToggleSave(property.id);
    } else {
      setLocalSaved(!localSaved);
    }
  };

  return (
    // Link makes the whole card clickable, taking the user to the details page
    <Link to={`/listing/${property.id}`} className="property-card">
      
      {/* Property Image Container */}
      <div className="card-image-container">
        <img 
          src={allImages[currentImageIndex]} 
          alt={property.title} 
          className="card-image"
        />
        
        {allImages.length > 1 && (
          <>
            <button className="carousel-btn prev-btn" onClick={prevImage}>
              <ChevronLeft size={16} />
            </button>
            <button className="carousel-btn next-btn" onClick={nextImage}>
              <ChevronRight size={16} />
            </button>
            
            <div className="carousel-dots">
              {allImages.map((_, index) => (
                <button
                  key={index} 
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => openImageFromDot(e, index)}
                  type="button"
                  aria-label={`Open image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Show a little badge if the rating is high! */}
        {property.rating >= 4.7 && (
          <div className="guest-favorite-badge">Guest favourite</div>
        )}
        {/* Heart icon for favorites (just visual for now) */}
        <button className="favorite-icon" onClick={toggleSave} type="button">
          {isSaved ? '♥' : '♡'}
        </button>
      </div>
      
      {/* Property Details Container */}
      <div className="card-details">
        <div className="card-header">
          <h3 className="property-location">{property.location}</h3>
          
          {/* Rating area */}
          <div className="property-rating">
            <Star size={14} fill="currentColor" color="currentColor" />
            <span>{property.rating}</span>
          </div>
        </div>
        
        {/* Title and host info */}
        <p className="property-title-text">{property.title}</p>
        <p className="property-host">Hosted by {property.host.name}</p>
        
        {/* Price information */}
        <div className="property-price-container">
          <span className="price-bold">{property.currency}{property.pricePerNight}</span>
          <span className="price-text"> night</span>
        </div>
      </div>
      
    </Link>
  );
}

export default PropertyCard;
