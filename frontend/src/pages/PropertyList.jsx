import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyList.css";

function PropertyList() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const defaultProperties = [
      {
        _id: 1,
        title: "2BHK House",
        location: "Hyderabad",
        price: 12000,
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      },
      {
        _id: 2,
        title: "1BHK Apartment",
        location: "Bangalore",
        price: 9000,
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      },
      {
        _id: 3,
        title: "3BHK Villa",
        location: "Chennai",
        price: 18000,
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      },
    ];

    const addedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    setProperties([...defaultProperties, ...addedProperties]);
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="property-page">
      <h2>Available Properties</h2>

      <input
        type="text"
        placeholder="🔍 Search by Location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "320px",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          margin: "20px auto",
          display: "block",
          fontSize: "16px",
        }}
      />

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <div className="property-card" key={property._id}>
            <img src={property.image} alt={property.title} />

            <div className="property-content">
              <h3>{property.title}</h3>

              <p>📍 {property.location}</p>

              <p>💰 ₹{property.price}</p>

              <button
                onClick={() =>
                  navigate(`/property/${property._id}`)
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
