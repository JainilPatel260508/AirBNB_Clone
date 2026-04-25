// ================================================
// dummyData.js
// This file contains all the fake/dummy data for
// our Airbnb clone app.
// In a real app, this data would come from a
// database and a backend server.
// For now, we are just using hardcoded fake data
// so we can build and test our frontend easily.
// ================================================

export const categories = [
  "Beach",
  "Cabin",
  "Modern Apartment",
  "Villa",
  "Unique"
];

const allListings = [];
const allReviews = [];

// ----- BEACH PROPERTIES (6 listings) -----
allListings.push({
  "id": 1,
  "title": "Beautiful Beach in Maldives",
  "location": "Maldives",
  "country": "Maldives",
  "category": "Beach",
  "pricePerNight": 5398,
  "currency": "\u20b9",
  "rating": 4.8,
  "reviewsCount": 204,
  "image": "https://images.pexels.com/photos/14747926/pexels-photo-14747926.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33685855/pexels-photo-33685855.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8768014/pexels-photo-8768014.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 2,
  "bathrooms": 1,
  "maxGuests": 8,
  "isSuperhost": false,
  "amenities": [
    "Mountain View",
    "Kitchen",
    "Hot Tub",
    "Air Conditioning",
    "Free Parking",
    "Gym"
  ],
  "description": "Experience the best of Maldives in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 101,
    "name": "John Smith",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 2,
  "title": "Beautiful Beach in Udaipur",
  "location": "Udaipur, Rajasthan, India",
  "country": "India",
  "category": "Beach",
  "pricePerNight": 14755,
  "currency": "\u20b9",
  "rating": 4.0,
  "reviewsCount": 16,
  "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
  ],
  "bedrooms": 4,
  "bathrooms": 4,
  "maxGuests": 6,
  "isSuperhost": true,
  "amenities": [
    "TV",
    "Air Conditioning",
    "Mountain View",
    "Free Parking",
    "Hot Tub",
    "Breakfast"
  ],
  "description": "Experience the best of Udaipur in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 102,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 3,
  "title": "Beautiful Beach in Coorg",
  "location": "Coorg, Karnataka, India",
  "country": "India",
  "category": "Beach",
  "pricePerNight": 8187,
  "currency": "\u20b9",
  "rating": 4.7,
  "reviewsCount": 82,
  "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/29517894/pexels-photo-29517894.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6021895/pexels-photo-6021895.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/19042783/pexels-photo-19042783.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 3,
  "maxGuests": 3,
  "isSuperhost": false,
  "amenities": [
    "Breakfast",
    "Gym",
    "Washer",
    "Air Conditioning",
    "Hot Tub",
    "Ocean View"
  ],
  "description": "Experience the best of Coorg in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 103,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 4,
  "title": "Beautiful Beach in Barcelona",
  "location": "Barcelona, Spain",
  "country": "Spain",
  "category": "Beach",
  "pricePerNight": 3485,
  "currency": "\u20b9",
  "rating": 4.1,
  "reviewsCount": 61,
  "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
  ],
  "bedrooms": 5,
  "bathrooms": 4,
  "maxGuests": 7,
  "isSuperhost": false,
  "amenities": [
    "Ocean View",
    "Washer",
    "Breakfast",
    "Hot Tub",
    "Gym",
    "WiFi"
  ],
  "description": "Experience the best of Barcelona in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 104,
    "name": "Michael Brown",
    "image": "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2020,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 5,
  "title": "Beautiful Beach in Jaipur",
  "location": "Jaipur, Rajasthan, India",
  "country": "India",
  "category": "Beach",
  "pricePerNight": 2094,
  "currency": "\u20b9",
  "rating": 4.3,
  "reviewsCount": 228,
  "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/37178184/pexels-photo-37178184.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/32706203/pexels-photo-32706203.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/12379606/pexels-photo-12379606.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/13110270/pexels-photo-13110270.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 4,
  "maxGuests": 3,
  "isSuperhost": false,
  "amenities": [
    "Ocean View",
    "Washer",
    "Mountain View",
    "Swimming Pool",
    "Free Parking",
    "Hot Tub"
  ],
  "description": "Experience the best of Jaipur in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 105,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2021,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 6,
  "title": "Beautiful Beach in Jaipur",
  "location": "Jaipur, Rajasthan, India",
  "country": "India",
  "category": "Beach",
  "pricePerNight": 14752,
  "currency": "\u20b9",
  "rating": 4.4,
  "reviewsCount": 121,
  "image": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/32704161/pexels-photo-32704161.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/37178188/pexels-photo-37178188.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8134781/pexels-photo-8134781.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/28456459/pexels-photo-28456459.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 1,
  "maxGuests": 5,
  "isSuperhost": false,
  "amenities": [
    "Kitchen",
    "Swimming Pool",
    "Air Conditioning",
    "Gym",
    "Ocean View",
    "Free Parking"
  ],
  "description": "Experience the best of Jaipur in this stunning beach. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 106,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2020,
    "isSuperhost": false
  }
});

// ----- MOUNTAIN / CABIN PROPERTIES (6 listings) -----
allListings.push({
  "id": 7,
  "title": "Beautiful Cabin in Rishikesh",
  "location": "Rishikesh, Uttarakhand, India",
  "country": "India",
  "category": "Cabin",
  "pricePerNight": 5284,
  "currency": "\u20b9",
  "rating": 4.4,
  "reviewsCount": 54,
  "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/36767278/pexels-photo-36767278.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/19811476/pexels-photo-19811476.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5461565/pexels-photo-5461565.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34252328/pexels-photo-34252328.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 1,
  "maxGuests": 9,
  "isSuperhost": false,
  "amenities": [
    "Breakfast",
    "Swimming Pool",
    "Hot Tub",
    "Kitchen",
    "Gym",
    "TV"
  ],
  "description": "Experience the best of Rishikesh in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 107,
    "name": "Vikram Singh",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2018,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 8,
  "title": "Beautiful Cabin in Manali",
  "location": "Manali, Himachal Pradesh, India",
  "country": "India",
  "category": "Cabin",
  "pricePerNight": 6374,
  "currency": "\u20b9",
  "rating": 4.7,
  "reviewsCount": 103,
  "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/37148748/pexels-photo-37148748.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/14215115/pexels-photo-14215115.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 5,
  "bathrooms": 4,
  "maxGuests": 10,
  "isSuperhost": false,
  "amenities": [
    "Air Conditioning",
    "Mountain View",
    "Free Parking",
    "Kitchen",
    "Breakfast",
    "WiFi"
  ],
  "description": "Experience the best of Manali in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 108,
    "name": "Anjali Deshmukh",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2015,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 9,
  "title": "Beautiful Cabin in Tuscany",
  "location": "Tuscany, Italy",
  "country": "Italy",
  "category": "Cabin",
  "pricePerNight": 11266,
  "currency": "\u20b9",
  "rating": 4.3,
  "reviewsCount": 102,
  "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80"
  ],
  "bedrooms": 1,
  "bathrooms": 3,
  "maxGuests": 4,
  "isSuperhost": true,
  "amenities": [
    "Gym",
    "Ocean View",
    "Washer",
    "Air Conditioning",
    "Mountain View",
    "TV"
  ],
  "description": "Experience the best of Tuscany in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 109,
    "name": "Emma Johnson",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 10,
  "title": "Beautiful Cabin in Coorg",
  "location": "Coorg, Karnataka, India",
  "country": "India",
  "category": "Cabin",
  "pricePerNight": 12649,
  "currency": "\u20b9",
  "rating": 5.0,
  "reviewsCount": 166,
  "image": "https://images.pexels.com/photos/34832403/pexels-photo-34832403.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/35419439/pexels-photo-35419439.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4067525/pexels-photo-4067525.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35931049/pexels-photo-35931049.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 3,
  "maxGuests": 3,
  "isSuperhost": false,
  "amenities": [
    "Hot Tub",
    "Swimming Pool",
    "Kitchen",
    "Breakfast",
    "Gym",
    "Ocean View"
  ],
  "description": "Experience the best of Coorg in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 110,
    "name": "Rahul Verma",
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2022,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 11,
  "title": "Beautiful Cabin in Tokyo",
  "location": "Tokyo, Japan",
  "country": "Japan",
  "category": "Cabin",
  "pricePerNight": 10652,
  "currency": "\u20b9",
  "rating": 4.9,
  "reviewsCount": 146,
  "image": "https://images.pexels.com/photos/10577713/pexels-photo-10577713.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/33385147/pexels-photo-33385147.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/31513716/pexels-photo-31513716.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/31602326/pexels-photo-31602326.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34010690/pexels-photo-34010690.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 1,
  "maxGuests": 4,
  "isSuperhost": false,
  "amenities": [
    "Hot Tub",
    "WiFi",
    "Gym",
    "TV",
    "Air Conditioning",
    "Mountain View"
  ],
  "description": "Experience the best of Tokyo in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 111,
    "name": "Emma Johnson",
    "image": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2018,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 12,
  "title": "Beautiful Cabin in Manali",
  "location": "Manali, Himachal Pradesh, India",
  "country": "India",
  "category": "Cabin",
  "pricePerNight": 10538,
  "currency": "\u20b9",
  "rating": 4.0,
  "reviewsCount": 28,
  "image": "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/12788395/pexels-photo-12788395.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/30652918/pexels-photo-30652918.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8962334/pexels-photo-8962334.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 1,
  "maxGuests": 6,
  "isSuperhost": false,
  "amenities": [
    "Washer",
    "Hot Tub",
    "Ocean View",
    "Air Conditioning",
    "Free Parking",
    "Swimming Pool"
  ],
  "description": "Experience the best of Manali in this stunning cabin. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 112,
    "name": "Neha Patel",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2021,
    "isSuperhost": true
  }
});

// ----- CITY APARTMENT PROPERTIES (6 listings) -----
allListings.push({
  "id": 13,
  "title": "Beautiful Modern Apartment in Bali",
  "location": "Bali, Indonesia",
  "country": "Indonesia",
  "category": "Modern Apartment",
  "pricePerNight": 11089,
  "currency": "\u20b9",
  "rating": 4.5,
  "reviewsCount": 29,
  "image": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/19265460/pexels-photo-19265460.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34287844/pexels-photo-34287844.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17924970/pexels-photo-17924970.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/23458269/pexels-photo-23458269.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 4,
  "bathrooms": 1,
  "maxGuests": 5,
  "isSuperhost": false,
  "amenities": [
    "Kitchen",
    "Hot Tub",
    "Ocean View",
    "Free Parking",
    "WiFi",
    "Washer"
  ],
  "description": "Experience the best of Bali in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 113,
    "name": "David Garcia",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2019,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 14,
  "title": "Beautiful Modern Apartment in Goa",
  "location": "Goa, India",
  "country": "India",
  "category": "Modern Apartment",
  "pricePerNight": 8505,
  "currency": "\u20b9",
  "rating": 4.2,
  "reviewsCount": 107,
  "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/16252709/pexels-photo-16252709.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/30707539/pexels-photo-30707539.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33536851/pexels-photo-33536851.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34134108/pexels-photo-34134108.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 5,
  "bathrooms": 1,
  "maxGuests": 4,
  "isSuperhost": false,
  "amenities": [
    "Hot Tub",
    "Gym",
    "Mountain View",
    "Kitchen",
    "Free Parking",
    "WiFi"
  ],
  "description": "Experience the best of Goa in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 114,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2019,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 15,
  "title": "Beautiful Modern Apartment in Paris",
  "location": "Paris, France",
  "country": "France",
  "category": "Modern Apartment",
  "pricePerNight": 4792,
  "currency": "\u20b9",
  "rating": 4.2,
  "reviewsCount": 58,
  "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.pexels.com/photos/33522714/pexels-photo-33522714.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/31924226/pexels-photo-31924226.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34130994/pexels-photo-34130994.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2455398/pexels-photo-2455398.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 5,
  "bathrooms": 3,
  "maxGuests": 9,
  "isSuperhost": false,
  "amenities": [
    "Ocean View",
    "WiFi",
    "Kitchen",
    "Hot Tub",
    "Gym",
    "Swimming Pool"
  ],
  "description": "Experience the best of Paris in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 115,
    "name": "Michael Brown",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2022,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 16,
  "title": "Beautiful Modern Apartment in Tokyo",
  "location": "Tokyo, Japan",
  "country": "Japan",
  "category": "Modern Apartment",
  "pricePerNight": 2596,
  "currency": "\u20b9",
  "rating": 4.0,
  "reviewsCount": 40,
  "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  ],
  "bedrooms": 1,
  "bathrooms": 4,
  "maxGuests": 9,
  "isSuperhost": true,
  "amenities": [
    "WiFi",
    "Kitchen",
    "Free Parking",
    "Breakfast",
    "Ocean View",
    "Swimming Pool"
  ],
  "description": "Experience the best of Tokyo in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 116,
    "name": "David Garcia",
    "image": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2015,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 17,
  "title": "Beautiful Modern Apartment in New York",
  "location": "New York, USA",
  "country": "USA",
  "category": "Modern Apartment",
  "pricePerNight": 14216,
  "currency": "\u20b9",
  "rating": 4.9,
  "reviewsCount": 233,
  "image": "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/15413617/pexels-photo-15413617.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/20858565/pexels-photo-20858565.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17650740/pexels-photo-17650740.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 3,
  "maxGuests": 4,
  "isSuperhost": true,
  "amenities": [
    "Washer",
    "Gym",
    "TV",
    "Kitchen",
    "Free Parking",
    "Air Conditioning"
  ],
  "description": "Experience the best of New York in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 117,
    "name": "David Garcia",
    "image": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2022,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 18,
  "title": "Beautiful Modern Apartment in Coorg",
  "location": "Coorg, Karnataka, India",
  "country": "India",
  "category": "Modern Apartment",
  "pricePerNight": 14877,
  "currency": "\u20b9",
  "rating": 4.6,
  "reviewsCount": 296,
  "image": "https://images.pexels.com/photos/18262241/pexels-photo-18262241.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/32242996/pexels-photo-32242996.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33711023/pexels-photo-33711023.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/26599231/pexels-photo-26599231.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/30503925/pexels-photo-30503925.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 3,
  "bathrooms": 2,
  "maxGuests": 3,
  "isSuperhost": true,
  "amenities": [
    "Ocean View",
    "Breakfast",
    "Mountain View",
    "Gym",
    "Hot Tub",
    "TV"
  ],
  "description": "Experience the best of Coorg in this stunning modern apartment. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 118,
    "name": "Vikram Singh",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2015,
    "isSuperhost": false
  }
});

// ----- VILLA PROPERTIES (6 listings) -----
allListings.push({
  "id": 19,
  "title": "Beautiful Villa in Maldives",
  "location": "Maldives",
  "country": "Maldives",
  "category": "Villa",
  "pricePerNight": 9816,
  "currency": "\u20b9",
  "rating": 4.6,
  "reviewsCount": 137,
  "image": "https://images.pexels.com/photos/34689686/pexels-photo-34689686.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/33350018/pexels-photo-33350018.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/10397023/pexels-photo-10397023.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/10586745/pexels-photo-10586745.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/31444161/pexels-photo-31444161.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 2,
  "maxGuests": 5,
  "isSuperhost": true,
  "amenities": [
    "Air Conditioning",
    "Free Parking",
    "WiFi",
    "Ocean View",
    "Swimming Pool",
    "Mountain View"
  ],
  "description": "Experience the best of Maldives in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 119,
    "name": "Sarah Davis",
    "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2018,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 20,
  "title": "Beautiful Villa in Barcelona",
  "location": "Barcelona, Spain",
  "country": "Spain",
  "category": "Villa",
  "pricePerNight": 3471,
  "currency": "\u20b9",
  "rating": 4.4,
  "reviewsCount": 72,
  "image": "https://images.pexels.com/photos/8134773/pexels-photo-8134773.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/8963085/pexels-photo-8963085.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/36729999/pexels-photo-36729999.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/20989631/pexels-photo-20989631.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/12969222/pexels-photo-12969222.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 3,
  "maxGuests": 6,
  "isSuperhost": true,
  "amenities": [
    "Free Parking",
    "WiFi",
    "TV",
    "Gym",
    "Air Conditioning",
    "Washer"
  ],
  "description": "Experience the best of Barcelona in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 120,
    "name": "Laura Martinez",
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2020,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 21,
  "title": "Beautiful Villa in Tuscany",
  "location": "Tuscany, Italy",
  "country": "Italy",
  "category": "Villa",
  "pricePerNight": 14711,
  "currency": "\u20b9",
  "rating": 4.8,
  "reviewsCount": 114,
  "image": "https://images.pexels.com/photos/31737858/pexels-photo-31737858.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/9060608/pexels-photo-9060608.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7740317/pexels-photo-7740317.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/15303808/pexels-photo-15303808.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 2,
  "bathrooms": 1,
  "maxGuests": 9,
  "isSuperhost": false,
  "amenities": [
    "Gym",
    "Washer",
    "Ocean View",
    "Breakfast",
    "Free Parking",
    "Swimming Pool"
  ],
  "description": "Experience the best of Tuscany in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 121,
    "name": "Michael Brown",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2022,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 22,
  "title": "Beautiful Villa in Andaman Islands",
  "location": "Andaman Islands, India",
  "country": "India",
  "category": "Villa",
  "pricePerNight": 6213,
  "currency": "\u20b9",
  "rating": 4.5,
  "reviewsCount": 172,
  "image": "https://images.pexels.com/photos/34160050/pexels-photo-34160050.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/5629707/pexels-photo-5629707.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/36682058/pexels-photo-36682058.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33607464/pexels-photo-33607464.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17888747/pexels-photo-17888747.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 5,
  "bathrooms": 3,
  "maxGuests": 2,
  "isSuperhost": false,
  "amenities": [
    "WiFi",
    "Kitchen",
    "Washer",
    "Gym",
    "Free Parking",
    "Mountain View"
  ],
  "description": "Experience the best of Andaman Islands in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 122,
    "name": "Kavita Reddy",
    "image": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2018,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 23,
  "title": "Beautiful Villa in Santorini",
  "location": "Santorini, Greece",
  "country": "Greece",
  "category": "Villa",
  "pricePerNight": 11933,
  "currency": "\u20b9",
  "rating": 4.2,
  "reviewsCount": 264,
  "image": "https://images.pexels.com/photos/32695403/pexels-photo-32695403.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/4469146/pexels-photo-4469146.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/11523964/pexels-photo-11523964.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/20296321/pexels-photo-20296321.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3935344/pexels-photo-3935344.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 2,
  "bathrooms": 2,
  "maxGuests": 7,
  "isSuperhost": false,
  "amenities": [
    "Air Conditioning",
    "Kitchen",
    "Hot Tub",
    "Washer",
    "TV",
    "Mountain View"
  ],
  "description": "Experience the best of Santorini in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 123,
    "name": "James Wilson",
    "image": "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 24,
  "title": "Beautiful Villa in Munnar",
  "location": "Munnar, Kerala, India",
  "country": "India",
  "category": "Villa",
  "pricePerNight": 4066,
  "currency": "\u20b9",
  "rating": 4.2,
  "reviewsCount": 100,
  "image": "https://images.pexels.com/photos/34731164/pexels-photo-34731164.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/30679985/pexels-photo-30679985.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/11011624/pexels-photo-11011624.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6957221/pexels-photo-6957221.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 4,
  "bathrooms": 3,
  "maxGuests": 3,
  "isSuperhost": false,
  "amenities": [
    "Kitchen",
    "WiFi",
    "Free Parking",
    "Air Conditioning",
    "Gym",
    "Hot Tub"
  ],
  "description": "Experience the best of Munnar in this stunning villa. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 124,
    "name": "Amit Kumar",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2019,
    "isSuperhost": true
  }
});

// ----- UNIQUE / TINY HOME PROPERTIES (6 listings) -----
allListings.push({
  "id": 25,
  "title": "Beautiful Unique in Munnar",
  "location": "Munnar, Kerala, India",
  "country": "India",
  "category": "Unique",
  "pricePerNight": 12115,
  "currency": "\u20b9",
  "rating": 4.0,
  "reviewsCount": 56,
  "image": "https://images.pexels.com/photos/4258277/pexels-photo-4258277.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/20737557/pexels-photo-20737557.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/12600536/pexels-photo-12600536.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/37008088/pexels-photo-37008088.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/32695405/pexels-photo-32695405.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 2,
  "bathrooms": 1,
  "maxGuests": 8,
  "isSuperhost": true,
  "amenities": [
    "Breakfast",
    "Kitchen",
    "Gym",
    "Air Conditioning",
    "Mountain View",
    "Hot Tub"
  ],
  "description": "Experience the best of Munnar in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 125,
    "name": "Vikram Singh",
    "image": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 26,
  "title": "Beautiful Unique in Jaipur",
  "location": "Jaipur, Rajasthan, India",
  "country": "India",
  "category": "Unique",
  "pricePerNight": 11736,
  "currency": "\u20b9",
  "rating": 4.3,
  "reviewsCount": 132,
  "image": "https://images.pexels.com/photos/6189886/pexels-photo-6189886.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/15576515/pexels-photo-15576515.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34993898/pexels-photo-34993898.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/27322157/pexels-photo-27322157.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/33327689/pexels-photo-33327689.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 1,
  "maxGuests": 7,
  "isSuperhost": false,
  "amenities": [
    "Air Conditioning",
    "Kitchen",
    "Ocean View",
    "Mountain View",
    "Swimming Pool",
    "TV"
  ],
  "description": "Experience the best of Jaipur in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 126,
    "name": "Rahul Verma",
    "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2017,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 27,
  "title": "Beautiful Unique in Maldives",
  "location": "Maldives",
  "country": "Maldives",
  "category": "Unique",
  "pricePerNight": 9059,
  "currency": "\u20b9",
  "rating": 4.6,
  "reviewsCount": 37,
  "image": "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/18719312/pexels-photo-18719312.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7428043/pexels-photo-7428043.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35069531/pexels-photo-35069531.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 3,
  "maxGuests": 6,
  "isSuperhost": false,
  "amenities": [
    "Washer",
    "Ocean View",
    "TV",
    "Gym",
    "Free Parking",
    "Air Conditioning"
  ],
  "description": "Experience the best of Maldives in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 127,
    "name": "David Garcia",
    "image": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2016,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 28,
  "title": "Beautiful Unique in Barcelona",
  "location": "Barcelona, Spain",
  "country": "Spain",
  "category": "Unique",
  "pricePerNight": 11855,
  "currency": "\u20b9",
  "rating": 4.0,
  "reviewsCount": 144,
  "image": "https://images.pexels.com/photos/30445143/pexels-photo-30445143.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/17606618/pexels-photo-17606618.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35069534/pexels-photo-35069534.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35808145/pexels-photo-35808145.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/19075389/pexels-photo-19075389.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 4,
  "bathrooms": 2,
  "maxGuests": 4,
  "isSuperhost": false,
  "amenities": [
    "Ocean View",
    "TV",
    "Breakfast",
    "Hot Tub",
    "Kitchen",
    "Gym"
  ],
  "description": "Experience the best of Barcelona in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 128,
    "name": "Sarah Davis",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2023,
    "isSuperhost": true
  }
});
allListings.push({
  "id": 29,
  "title": "Beautiful Unique in Santorini",
  "location": "Santorini, Greece",
  "country": "Greece",
  "category": "Unique",
  "pricePerNight": 2979,
  "currency": "\u20b9",
  "rating": 4.7,
  "reviewsCount": 13,
  "image": "https://images.pexels.com/photos/33685860/pexels-photo-33685860.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/19075387/pexels-photo-19075387.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35418211/pexels-photo-35418211.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/29851234/pexels-photo-29851234.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/26656081/pexels-photo-26656081.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 1,
  "bathrooms": 3,
  "maxGuests": 3,
  "isSuperhost": true,
  "amenities": [
    "Breakfast",
    "Gym",
    "Hot Tub",
    "WiFi",
    "Air Conditioning",
    "Washer"
  ],
  "description": "Experience the best of Santorini in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 129,
    "name": "Laura Martinez",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2018,
    "isSuperhost": false
  }
});
allListings.push({
  "id": 30,
  "title": "Beautiful Unique in Bali",
  "location": "Bali, Indonesia",
  "country": "Indonesia",
  "category": "Unique",
  "pricePerNight": 5898,
  "currency": "\u20b9",
  "rating": 4.1,
  "reviewsCount": 295,
  "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
  ],
  "bedrooms": 1,
  "bathrooms": 1,
  "maxGuests": 7,
  "isSuperhost": true,
  "amenities": [
    "Hot Tub",
    "Free Parking",
    "Swimming Pool",
    "Breakfast",
    "TV",
    "Gym"
  ],
  "description": "Experience the best of Bali in this stunning unique. Perfectly situated for a memorable trip with great amenities and comfortable living spaces.",
  "host": {
    "id": 130,
    "name": "Laura Martinez",
    "image": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2020,
    "isSuperhost": true
  }
});

allListings.push({
  "id": 31,
  "title": "Beautiful Farm in Countryside",
  "location": "Kerala, India",
  "country": "India",
  "category": "Cabin",
  "pricePerNight": 6500,
  "currency": "₹",
  "rating": 4.8,
  "reviewsCount": 12,
  "image": "https://images.pexels.com/photos/5461644/pexels-photo-5461644.jpeg?auto=compress&cs=tinysrgb&w=800",
  "images": [
    "https://images.pexels.com/photos/32364330/pexels-photo-32364330.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/28460175/pexels-photo-28460175.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/32380684/pexels-photo-32380684.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/35069535/pexels-photo-35069535.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  "bedrooms": 2,
  "bathrooms": 1,
  "maxGuests": 4,
  "isSuperhost": true,
  "amenities": [
    "Kitchen",
    "Free Parking",
    "WiFi"
  ],
  "description": "Experience the quiet countryside in this beautiful farm listing.",
  "host": {
    "id": 131,
    "name": "Ravi Kumar",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "joinedYear": 2021,
    "isSuperhost": true
  }
});

// ----- REVIEWS (150 reviews) -----
allReviews.push({
  "id": 1,
  "listingId": 1,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 2,
  "listingId": 1,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 3,
  "listingId": 1,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "May 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 4,
  "listingId": 1,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 5,
  "listingId": 1,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Mar 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 6,
  "listingId": 2,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 7,
  "listingId": 2,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 8,
  "listingId": 2,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 9,
  "listingId": 2,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 10,
  "listingId": 2,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Feb 2024",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 11,
  "listingId": 3,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 12,
  "listingId": 3,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Feb 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 13,
  "listingId": 3,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 14,
  "listingId": 3,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 15,
  "listingId": 3,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jul 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 16,
  "listingId": 4,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 17,
  "listingId": 4,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 18,
  "listingId": 4,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 19,
  "listingId": 4,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 20,
  "listingId": 4,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 21,
  "listingId": 5,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 22,
  "listingId": 5,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 23,
  "listingId": 5,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 24,
  "listingId": 5,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Feb 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 25,
  "listingId": 5,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 26,
  "listingId": 6,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 27,
  "listingId": 6,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Feb 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 28,
  "listingId": 6,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 29,
  "listingId": 6,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 30,
  "listingId": 6,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Mar 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 31,
  "listingId": 7,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jul 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 32,
  "listingId": 7,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 33,
  "listingId": 7,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 34,
  "listingId": 7,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Oct 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 35,
  "listingId": 7,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 36,
  "listingId": 8,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 37,
  "listingId": 8,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 38,
  "listingId": 8,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 39,
  "listingId": 8,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 40,
  "listingId": 8,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 41,
  "listingId": 9,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 42,
  "listingId": 9,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 43,
  "listingId": 9,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 44,
  "listingId": 9,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 45,
  "listingId": 9,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 46,
  "listingId": 10,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "May 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 47,
  "listingId": 10,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 48,
  "listingId": 10,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 49,
  "listingId": 10,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Oct 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 50,
  "listingId": 10,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 51,
  "listingId": 11,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 52,
  "listingId": 11,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 53,
  "listingId": 11,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 54,
  "listingId": 11,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 55,
  "listingId": 11,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jun 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 56,
  "listingId": 12,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 57,
  "listingId": 12,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jun 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 58,
  "listingId": 12,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jun 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 59,
  "listingId": 12,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Oct 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 60,
  "listingId": 12,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "May 2024",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 61,
  "listingId": 13,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Mar 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 62,
  "listingId": 13,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 63,
  "listingId": 13,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 64,
  "listingId": 13,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 65,
  "listingId": 13,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jun 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 66,
  "listingId": 14,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 67,
  "listingId": 14,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 68,
  "listingId": 14,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 69,
  "listingId": 14,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 70,
  "listingId": 14,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 71,
  "listingId": 15,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 72,
  "listingId": 15,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 73,
  "listingId": 15,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 74,
  "listingId": 15,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 75,
  "listingId": 15,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Feb 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 76,
  "listingId": 16,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 77,
  "listingId": 16,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 78,
  "listingId": 16,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 79,
  "listingId": 16,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "May 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 80,
  "listingId": 16,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 81,
  "listingId": 17,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 82,
  "listingId": 17,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 83,
  "listingId": 17,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 84,
  "listingId": 17,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 85,
  "listingId": 17,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2024",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 86,
  "listingId": 18,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 87,
  "listingId": 18,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 88,
  "listingId": 18,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 89,
  "listingId": 18,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 90,
  "listingId": 18,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 91,
  "listingId": 19,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 92,
  "listingId": 19,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 93,
  "listingId": 19,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 94,
  "listingId": 19,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 95,
  "listingId": 19,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 96,
  "listingId": 20,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 97,
  "listingId": 20,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 98,
  "listingId": 20,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 99,
  "listingId": 20,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jul 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 100,
  "listingId": 20,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 101,
  "listingId": 21,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "May 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 102,
  "listingId": 21,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 103,
  "listingId": 21,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "May 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 104,
  "listingId": 21,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Feb 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 105,
  "listingId": 21,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 106,
  "listingId": 22,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jul 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 107,
  "listingId": 22,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 108,
  "listingId": 22,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Aug 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 109,
  "listingId": 22,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 110,
  "listingId": 22,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 111,
  "listingId": 23,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2022",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 112,
  "listingId": 23,
  "userName": "David Garcia",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 113,
  "listingId": 23,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 114,
  "listingId": 23,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Apr 2024",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 115,
  "listingId": 23,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 116,
  "listingId": 24,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 117,
  "listingId": 24,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "May 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 118,
  "listingId": 24,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Dec 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 119,
  "listingId": 24,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Dec 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 120,
  "listingId": 24,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 121,
  "listingId": 25,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 122,
  "listingId": 25,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Feb 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 123,
  "listingId": 25,
  "userName": "Sarah Davis",
  "userImage": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jan 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 124,
  "listingId": 25,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jul 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 125,
  "listingId": 25,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Apr 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 126,
  "listingId": 26,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jun 2024",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 127,
  "listingId": 26,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Dec 2022",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 128,
  "listingId": 26,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 129,
  "listingId": 26,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 130,
  "listingId": 26,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 131,
  "listingId": 27,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 132,
  "listingId": 27,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2023",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 133,
  "listingId": 27,
  "userName": "Rahul Verma",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Mar 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 134,
  "listingId": 27,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2022",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 135,
  "listingId": 27,
  "userName": "John Smith",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Aug 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 136,
  "listingId": 28,
  "userName": "Laura Martinez",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 137,
  "listingId": 28,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jan 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 138,
  "listingId": 28,
  "userName": "Michael Brown",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2023",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 139,
  "listingId": 28,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Nov 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 140,
  "listingId": 28,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Oct 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 141,
  "listingId": 29,
  "userName": "Emma Johnson",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Jul 2024",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 142,
  "listingId": 29,
  "userName": "Anjali Deshmukh",
  "userImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2022",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 143,
  "listingId": 29,
  "userName": "Priya Sharma",
  "userImage": "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Feb 2023",
  "comment": "Great location and wonderful host."
});
allReviews.push({
  "id": 144,
  "listingId": 29,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Sep 2023",
  "comment": "We had a fantastic time here."
});
allReviews.push({
  "id": 145,
  "listingId": 29,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Dec 2024",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 146,
  "listingId": 30,
  "userName": "James Wilson",
  "userImage": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Oct 2022",
  "comment": "Amazing stay, highly recommend it!"
});
allReviews.push({
  "id": 147,
  "listingId": 30,
  "userName": "Kavita Reddy",
  "userImage": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Mar 2024",
  "comment": "Very clean and comfortable."
});
allReviews.push({
  "id": 148,
  "listingId": 30,
  "userName": "Amit Kumar",
  "userImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Jun 2024",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 149,
  "listingId": 30,
  "userName": "Neha Patel",
  "userImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "rating": 4,
  "date": "Sep 2023",
  "comment": "Beautiful place, looks exactly like the pictures."
});
allReviews.push({
  "id": 150,
  "listingId": 30,
  "userName": "Vikram Singh",
  "userImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "rating": 5,
  "date": "Nov 2024",
  "comment": "Very clean and comfortable."
});

// We export listings so any component can import
// and use this data anywhere in the app
export const listings = allListings;
export const properties = allListings; // Exporting as properties as well for compatibility with older code

// We export reviews so the listing detail page
// can show reviews for each property
export const reviews = allReviews;
