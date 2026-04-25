import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Award, Fan, DoorOpen, Flag, Share, Heart } from 'lucide-react';
import { properties, reviews } from '../data/dummyData';
import './ListingDetail.css';

// -----------------------------------------------
// The complex SVG icons for the Guest Favourite badge
// We put them here so they don't make the main code messy.
// -----------------------------------------------
const leftLaurelSVG = (
  <svg viewBox="0 0 32 32" className="laurel-svg">
    <path d="M12.6 4.9c-.8.8-1.5 2.1-1.6 3.6-.1 1.4.3 2.6.9 3.4l1.3 1.8c-1.2-1.1-2.6-1.5-4-1.2-1.3.3-2.4 1.3-3.1 2.5l-.8 1.4c1.1-.9 2.5-1.2 3.9-.9 1.4.3 2.5 1.2 3.1 2.3l1.1 2.2c-1.3-.9-2.8-1.2-4.2-.7-1.4.4-2.5 1.5-3 2.8l-.6 1.4c1-1 2.4-1.4 3.8-1.2 1.4.2 2.6 1 3.2 2.2l.9 2-2.1-1c-1.4-.7-3-1-4.4-.7l-1.3.3c.7-1.4 1.8-2.5 3.1-3.1 1.4-.7 2.9-.8 4.4-.5l1.6.4c-.8-1.3-1.3-2.8-1.2-4.2.1-1.4.7-2.8 1.6-3.8l1.3-1.5c-1-1.2-1.8-2.7-2.1-4.2-.3-1.6-.2-3.2.4-4.6l.8-1.7zm11.7 4.1c1.5-1 3.3-1.2 5-.6l1 2.2c-1.5-.7-3.2-.8-4.8-.2-1.6.6-2.9 1.7-3.7 3.2v.2c1.3.2 2.7-.2 3.7-1 1.1-.9 1.7-2.1 2-3.4l.6-1.5c-.3 1.5-.9 2.8-1.9 3.8-1 1-2.3 1.4-3.7 1.4-1.4 0-2.8-.5-3.8-1.5l-1-1c.8 1.2 1.2 2.5 1.1 3.9-.1 1.4-.7 2.6-1.6 3.5l-1.2 1.2c1.1-1 2.3-1.5 3.7-1.5 1.5 0 2.9.5 4 1.5l1.3 1.2c-.9-1.2-2.1-2-3.5-2.3-1.4-.3-2.9 0-4.1.8l-1.6 1c.6-1.3 1.5-2.4 2.7-3 1.2-.6 2.6-.8 3.9-.6l2 .3c-1.3-1-2.9-1.3-4.5-1-1.6.3-3 1.2-4 2.4l-1.2 1.5c.3-1.6.9-3 1.9-4 1-1.1 2.3-1.7 3.7-1.9z" />
  </svg>
);

const rightLaurelSVG = (
  <svg viewBox="0 0 32 32" className="laurel-svg right-laurel">
    <path d="M12.6 4.9c-.8.8-1.5 2.1-1.6 3.6-.1 1.4.3 2.6.9 3.4l1.3 1.8c-1.2-1.1-2.6-1.5-4-1.2-1.3.3-2.4 1.3-3.1 2.5l-.8 1.4c1.1-.9 2.5-1.2 3.9-.9 1.4.3 2.5 1.2 3.1 2.3l1.1 2.2c-1.3-.9-2.8-1.2-4.2-.7-1.4.4-2.5 1.5-3 2.8l-.6 1.4c1-1 2.4-1.4 3.8-1.2 1.4.2 2.6 1 3.2 2.2l.9 2-2.1-1c-1.4-.7-3-1-4.4-.7l-1.3.3c.7-1.4 1.8-2.5 3.1-3.1 1.4-.7 2.9-.8 4.4-.5l1.6.4c-.8-1.3-1.3-2.8-1.2-4.2.1-1.4.7-2.8 1.6-3.8l1.3-1.5c-1-1.2-1.8-2.7-2.1-4.2-.3-1.6-.2-3.2.4-4.6l.8-1.7zm11.7 4.1c1.5-1 3.3-1.2 5-.6l1 2.2c-1.5-.7-3.2-.8-4.8-.2-1.6.6-2.9 1.7-3.7 3.2v.2c1.3.2 2.7-.2 3.7-1 1.1-.9 1.7-2.1 2-3.4l.6-1.5c-.3 1.5-.9 2.8-1.9 3.8-1 1-2.3 1.4-3.7 1.4-1.4 0-2.8-.5-3.8-1.5l-1-1c.8 1.2 1.2 2.5 1.1 3.9-.1 1.4-.7 2.6-1.6 3.5l-1.2 1.2c1.1-1 2.3-1.5 3.7-1.5 1.5 0 2.9.5 4 1.5l1.3 1.2c-.9-1.2-2.1-2-3.5-2.3-1.4-.3-2.9 0-4.1.8l-1.6 1c.6-1.3 1.5-2.4 2.7-3 1.2-.6 2.6-.8 3.9-.6l2 .3c-1.3-1-2.9-1.3-4.5-1-1.6.3-3 1.2-4 2.4l-1.2 1.5c.3-1.6.9-3 1.9-4 1-1.1 2.3-1.7 3.7-1.9z" />
  </svg>
);


// -----------------------------------------------
// ListingDetail Component
// Shows a highly detailed, modern Airbnb UI for a single place.
// -----------------------------------------------
function ListingDetail() {
  // 1. Get the ID from the website URL
  const urlParams = useParams();
  const stringId = urlParams.id;
  const listingId = parseInt(stringId); // Convert string to a real number

  // 2. Setup all our state variables
  const [property, setProperty] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [checkInDate, setCheckInDate] = useState('2026-05-08');
  const [checkOutDate, setCheckOutDate] = useState('2026-05-10');
  const [guestCount, setGuestCount] = useState(1);
  const [isReported, setIsReported] = useState(false);
  
  // This array will hold the IDs of reviews that the user wants to read fully
  const [expandedReviews, setExpandedReviews] = useState([]);

  // 3. When the page loads, find the property data that matches the ID
  useEffect(function() {
    let foundProperty = null;
    
    // We loop through all dummy properties to find the one we need
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].id === listingId) {
        foundProperty = properties[i];
        break;
      }
    }
    
    setProperty(foundProperty);
  }, [listingId]);

  // 4. If we haven't found the property yet, show a loading/error message
  if (property === null) {
    return (
      <div className="listing-not-found">
        <h2>Sorry, we couldn't find this property!</h2>
        <Link to="/" className="back-home-btn">Go back to Home</Link>
      </div>
    );
  }

  // 5. Setup data for the page
  const galleryImages = [property.image, ...property.images];

  // We filter the reviews to only show ones for this property
  const propertyReviews = reviews.filter(function(review) {
    return review.listingId === property.id;
  });

  const getNightsCount = function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const oneDayMs = 1000 * 60 * 60 * 24;
    const diffDays = Math.ceil(diffTime / oneDayMs);
    if (isNaN(diffDays) || diffDays <= 0) {
      return 0;
    }
    return diffDays;
  };

  const nightsCount = getNightsCount(checkInDate, checkOutDate);
  const bookingTotalPrice = property.pricePerNight * nightsCount;
  const isBookingValid = nightsCount > 0 && guestCount <= property.maxGuests;

  // 6. All our helper functions for buttons
  const handleScrollToPart = function(event, sectionId) {
    event.preventDefault(); // Don't let the link jump suddenly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll down smoothly
    }
  };

  const handleClickShare = async function() {
    const pageUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(pageUrl);
      setInfoMessage('Link copied. You can share it now.');
    } catch (error) {
      setInfoMessage(`Copy this link: ${pageUrl}`);
    }
  };

  const handleClickSave = function() {
    setIsSaved(!isSaved); // Toggle true/false silently
  };

  const handleClickReserve = function() {
    if (isBookingValid === false) {
      setInfoMessage('Please choose valid dates. Checkout should be after check-in.');
      return;
    }

    setInfoMessage(
      `Reserved ${property.title} for ${guestCount} guest(s), ${nightsCount} night(s). Total ${property.currency}${bookingTotalPrice.toLocaleString('en-IN')}.`
    );
  };

  const handleClickReport = function() {
    if (isReported) {
      setIsReported(false);
      setInfoMessage('Report removed for this listing.');
    } else {
      setIsReported(true);
      setInfoMessage('Thanks. This listing has been reported.');
    }
  };

  const handleToggleDescription = function() {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleToggleReview = function(reviewId) {
    // If the review is already expanded, we remove it from the array
    if (expandedReviews.includes(reviewId)) {
      const newArray = expandedReviews.filter(function(id) {
        return id !== reviewId;
      });
      setExpandedReviews(newArray);
    } else {
      // If it's not expanded, we add it to the array
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  const handleCheckInChange = function(event) {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = function(event) {
    setCheckOutDate(event.target.value);
  };

  const handleGuestChange = function(event) {
    setGuestCount(Number(event.target.value));
  };

  // Determine what text to show on the save button
  let saveButtonText = 'Save';
  if (isSaved === true) {
    saveButtonText = 'Saved';
  }

  // Determine what text to show on the description button
  let descriptionButtonText = 'Show more';
  if (isDescriptionOpen === true) {
    descriptionButtonText = 'Show less';
  }

  // 7. Render the actual page HTML
  return (
    <div className="listing-detail-page">
      
      {/* --- TOP SECTION: TITLE AND PHOTOS --- */}
      <div className="listing-container" style={{ paddingTop: '24px' }}>
        {infoMessage !== '' && (
          <div className="action-message">
            {infoMessage}
          </div>
        )}
        
        <div className="listing-header" id="photos">
          <h1 className="listing-title">{property.title}</h1>
          
          <div className="listing-actions">
            <button className="action-btn" onClick={handleClickShare} type="button">
              <Share size={16} />
              <u>Share</u>
            </button>
            <button className="action-btn" onClick={handleClickSave} type="button">
              <Heart size={16} fill={isSaved ? "black" : "none"} />
              <u>{saveButtonText}</u>
            </button>
          </div>
        </div>

        {/* The 5-Image Gallery */}
        <div className="photo-gallery">
          {/* Main big image on the left */}
          <div className="gallery-main-img">
            <img
              src={galleryImages[0]}
              alt="Main view"
              className="gallery-img"
            />
          </div>
          
          {/* 4 small images on the right in 2x2 grid */}
          <div className="gallery-sub-imgs">
            <img src={galleryImages[1]} alt="View 2" className="gallery-img" />
            <img src={galleryImages[2]} alt="View 3" className="gallery-img radius-top-right" />
            <img src={galleryImages[3]} alt="View 4" className="gallery-img" />
            <div className="bottom-right-img-container">
              <img src={galleryImages[4]} alt="View 5" className="gallery-img radius-bottom-right" />
            </div>
          </div>
        </div>
      </div>

      {/* --- SECONDARY NAVIGATION BAR (Sticky) --- */}
      <div className="secondary-nav-container">
        <div className="secondary-nav-inner">
          <div className="secondary-nav">
            <a href="#photos" onClick={function(e) { handleScrollToPart(e, 'photos'); }}>Photos</a>
            <a href="#amenities" onClick={function(e) { handleScrollToPart(e, 'amenities'); }}>Amenities</a>
            <a href="#reviews" onClick={function(e) { handleScrollToPart(e, 'reviews'); }}>Reviews</a>
            <a href="#location" onClick={function(e) { handleScrollToPart(e, 'location'); }}>Location</a>
          </div>
          <div className="secondary-nav-booking">
            <div className="nav-price-block">
              <span className="nav-price-bold">{property.currency}{bookingTotalPrice.toLocaleString('en-IN')}</span>
              <span className="nav-price-text"> for {nightsCount} night{nightsCount === 1 ? '' : 's'}</span>
              <div className="nav-rating">
                <Star size={10} fill="black" />
                <span className="nav-rating-number">{property.rating}</span>
                <span className="nav-reviews-count">· {property.reviewsCount} reviews</span>
              </div>
            </div>
            <button
              className="nav-reserve-btn"
              onClick={handleClickReserve}
              type="button"
              disabled={isBookingValid === false}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT SPLIT (Left side text, Right side booking box) --- */}
      <div className="listing-container content-container" style={{ paddingTop: '32px' }}>
        <div className="listing-content-split">
          
          {/* LEFT SIDE: Everything about the home */}
          <div className="listing-info-side">
            
            <div className="listing-subtitle-section">
              <h2 className="subtitle-heading">Entire {property.category.toLowerCase()} in {property.location}</h2>
              <p className="subtitle-meta">
                {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.bedrooms} beds · {property.bathrooms} bathrooms
              </p>
            </div>

            {/* Guest Favourite Banner */}
            <div className="guest-favorite-banner">
              <div className="gfb-left">
                {leftLaurelSVG}
                <div className="gfb-title-column">
                  <span className="gfb-title">Guest</span>
                  <span className="gfb-title">favourite</span>
                </div>
                {rightLaurelSVG}
              </div>

              <div className="gfb-divider"></div>

              <div className="gfb-middle">
                One of the most loved homes on <br />Airbnb, according to guests
              </div>
              
              <div className="gfb-divider"></div>

              <div className="gfb-right-stats">
                <div className="gfb-stat">
                  <span className="gfb-number">{property.rating}</span>
                  <div className="gfb-stars">
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                    <Star size={10} fill="black" />
                  </div>
                </div>
                <div className="gfb-divider-small"></div>
                <div className="gfb-stat">
                  <span className="gfb-number">{property.reviewsCount}</span>
                  <span className="gfb-label">Reviews</span>
                </div>
              </div>
            </div>

            {/* Host info block */}
            <div className="host-section">
              <div className="host-avatar-wrapper">
                <img src={property.host.image} alt={property.host.name} className="host-avatar-img" />
                <div className="superhost-badge-small">
                  <Award size={10} color="white" fill="white" />
                </div>
              </div>
              <div className="host-text">
                <h2>Hosted by {property.host.name}</h2>
                <p>7 years hosting</p>
              </div>
            </div>

            {/* Features block */}
            <div className="features-section" id="amenities">
              <div className="feature-item">
                <Fan className="feature-icon" size={26} />
                <div className="feature-text">
                  <h4>Designed for staying cool</h4>
                  <p>Beat the heat with the A/C and ceiling fan.</p>
                </div>
              </div>
              <div className="feature-item">
                <DoorOpen className="feature-icon" size={26} />
                <div className="feature-text">
                  <h4>Exceptional check-in experience</h4>
                  <p>Recent guests gave the check-in process a 5-star rating.</p>
                </div>
              </div>
              <div className="feature-item">
                <MapPin className="feature-icon" size={26} />
                <div className="feature-text">
                  <h4>Unbeatable location</h4>
                  <p>100% of guests in the past year gave this location a 5-star rating.</p>
                </div>
              </div>
            </div>

            {/* Description block */}
            <div className="description-section">
              <p style={{ marginBottom: '16px' }}>Check out our IG for more photos and videos: @osiapartments</p>
              <p style={{ marginBottom: '16px' }}>
                You'll feel it the moment you walk in—the calm, the glow, the sense that this newly 
                renovated space was designed just for you. This sun-lit 2BHK wraps you in warmth, with 
                vibrant art and thoughtful details at every turn. Perfect for a peaceful city escape.
              </p>
              <p>
                ✔ 2 stylish bedrooms, 2 modern bathrooms<br/>
                ✔ Dedicated workspace + Fast Wi-Fi...
              </p>
              
              {/* Show extra description if the user clicked "Show more" */}
              {isDescriptionOpen === true && (
                <p style={{ marginTop: '16px' }}>
                  This home has self check-in, easy parking, and peaceful surroundings. It is good for families and work trips.
                </p>
              )}
              
              <button className="show-more-btn" style={{ marginTop: '16px', fontWeight: '600', textDecoration: 'underline' }} onClick={handleToggleDescription} type="button">
                {descriptionButtonText}
              </button>
            </div>

            {/* Location block */}
            <div className="description-section" id="location" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
              <h3 style={{ marginBottom: '12px' }}>Location</h3>
              <p>
                <MapPin size={16} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} />
                {property.location}, {property.country}
              </p>
            </div>
            
          </div>
          
          {/* RIGHT SIDE: The booking sidebar */}
          <div className="listing-booking-side">
            
            <div className="booking-promo-banner">
              <span className="gem-icon">💎</span> Prices include all fees
            </div>

            <div className="booking-widget">
              
              <div className="booking-price-header">
                <span className="booking-price-bold">{property.currency}{bookingTotalPrice.toLocaleString('en-IN')}</span>
                <span className="booking-price-text"> for {nightsCount} night{nightsCount === 1 ? '' : 's'}</span>
              </div>
              
              <div className="booking-inputs-container">
                <div className="booking-dates">
                  <div className="input-box border-right border-bottom">
                    <label>CHECK-IN</label>
                    <input type="date" value={checkInDate} onChange={handleCheckInChange} />
                  </div>
                  <div className="input-box border-bottom input-box-active">
                    <label>CHECKOUT</label>
                    <input type="date" value={checkOutDate} onChange={handleCheckOutChange} />
                  </div>
                </div>
                <div className="input-box guests-box">
                  <label>GUESTS</label>
                  <select value={guestCount} onChange={handleGuestChange}>
                    {Array.from({ length: property.maxGuests }, function(_, index) {
                      const number = index + 1;
                      return (
                        <option key={number} value={number}>
                          {number} guest{number === 1 ? '' : 's'}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="free-cancel-banner">
                {isBookingValid ? (
                  <>
                    Free cancellation before <strong>3 May</strong>
                  </>
                ) : (
                  <>
                    Please select valid dates to continue.
                  </>
                )}
              </div>

              <button
                className="reserve-button"
                onClick={handleClickReserve}
                type="button"
                disabled={isBookingValid === false}
              >
                Reserve
              </button>
              
              <p className="no-charge-text">You won't be charged yet</p>
              
            </div>

            <button className="report-listing" onClick={handleClickReport} type="button">
              <Flag size={14} /> <span>{isReported ? 'Undo report' : 'Report this listing'}</span>
            </button>

          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        {propertyReviews.length > 0 && (
          <div className="reviews-section" id="reviews">
            <h2 className="reviews-main-heading">Customer reviews</h2>
            <div className="reviews-grid">
              
              {/* We loop through all the reviews for this property */}
              {propertyReviews.map(function(review) {
                
                // Check if this specific review is in our expanded list
                let isReviewExpanded = false;
                if (expandedReviews.includes(review.id)) {
                  isReviewExpanded = true;
                }

                return (
                  <div key={review.id} className="review-card">
                    
                    <div className="review-header">
                      <img src={review.userImage || "https://ui-avatars.com/api/?name=" + review.userName} alt={review.userName} className="review-avatar-img" />
                      <div className="review-header-text">
                        <h4 className="reviewer-name">{review.userName}</h4>
                        <p className="reviewer-meta">5 years on Airbnb</p>
                      </div>
                    </div>
                    
                    <div className="review-body">
                      <div className="review-stars-date">
                        <div className="review-stars">
                          <Star size={10} fill="black" />
                          <Star size={10} fill="black" />
                          <Star size={10} fill="black" />
                          <Star size={10} fill="black" />
                          <Star size={10} fill="black" />
                        </div>
                        <span className="dot-divider">·</span>
                        <span className="review-date-text">{review.date}</span>
                      </div>
                      
                      <p className="review-text" style={isReviewExpanded ? { WebkitLineClamp: 'unset', lineClamp: 'unset', overflow: 'visible' } : {}}>
                        {review.comment}
                      </p>
                      
                      <button className="show-more-btn" onClick={function() { handleToggleReview(review.id); }} type="button">
                        <u>{isReviewExpanded ? 'Show less' : 'Show more'}</u>
                      </button>
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListingDetail;
