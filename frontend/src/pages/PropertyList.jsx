import { useEffect, useState } from "react";
import API from "../services/api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/api/properties");
      setProperties(res.data);
    } catch (err) {
      console.log(err);

      // Temporary Dummy Data
      setProperties([
        {
          _id: 1,
          title: "2BHK House",
          location: "Hyderabad",
          price: 12000,
          image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
        },
        {
          _id: 2,
          title: "1BHK Apartment",
          location: "Bangalore",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
        },
      ]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>

      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h3>{property.title}</h3>

          <p>📍 {property.location}</p>

          <p>💰 ₹{property.price}</p>

          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
