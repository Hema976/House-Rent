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
      console.log(res.data);

      // Temporary dummy data until backend returns actual properties
      setProperties([
        {
          _id: 1,
          title: "2BHK House",
          address: "Hyderabad",
          rent: 12000,
        },
        {
          _id: 2,
          title: "1BHK Apartment",
          address: "Bangalore",
          rent: 9000,
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Available Properties</h2>

      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            border: "1px solid gray",
            margin: "15px",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{property.title}</h3>
          <p>📍 {property.address}</p>
          <p>💰 ₹{property.rent}</p>

          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
