import { useEffect, useState } from "react";
import "./PropertyList.css";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties([
      {
        _id: 1,
        title: "2BHK House",
        location: "Hyderabad",
        price: 12000,
        image: "https://picsum.photos/500/300?1",
      },
      {
        _id: 2,
        title: "1BHK Apartment",
        location: "Bangalore",
        price: 9000,
        image: "https://picsum.photos/500/300?2",
      },
      {
        _id: 3,
        title: "3BHK Villa",
        location: "Chennai",
        price: 18000,
        image: "https://picsum.photos/500/300?3",
      },
    ]);
  }, []);

  return (
    <div className="property-page">
      <h2>Available Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property._id}>
            <img src={property.image} alt={property.title} />

            <div className="property-content">
              <h3>{property.title}</h3>

              <p>📍 {property.location}</p>

              <p>💰 ₹{property.price}</p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
