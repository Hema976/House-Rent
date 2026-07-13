import { useEffect, useState } from "react";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties([
      {
        _id: 1,
        title: "2BHK House",
        location: "Hyderabad",
        price: 12000,
        image: "https://picsum.photos/400/250?1",
      },
      {
        _id: 2,
        title: "1BHK Apartment",
        location: "Bangalore",
        price: 9000,
        image: "https://picsum.photos/400/250?2",
      },
      {
        _id: 3,
        title: "3BHK Villa",
        location: "Chennai",
        price: 18000,
        image: "https://picsum.photos/400/250?3",
      },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>

      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
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
