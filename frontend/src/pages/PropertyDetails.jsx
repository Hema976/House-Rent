import { useParams, useNavigate } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "2BHK House",
      location: "Hyderabad",
      price: "₹12,000 / month",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      description:
        "Beautiful 2BHK house with parking, WiFi, 24/7 water supply and security.",
    },
    {
      id: 2,
      title: "1BHK Apartment",
      location: "Bangalore",
      price: "₹9,000 / month",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      description:
        "Modern apartment near IT companies with lift, power backup and parking.",
    },
    {
      id: 3,
      title: "3BHK Villa",
      location: "Chennai",
      price: "₹18,000 / month",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      description:
        "Luxury villa with garden, swimming pool and spacious parking.",
    },
  ];

  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Property Not Found</h2>;
  }

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "#1e293b",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "20px" }}>
          <h2>{property.title}</h2>

          <p>📍 {property.location}</p>

          <h3 style={{ color: "#7c5cff" }}>{property.price}</h3>

          <p>{property.description}</p>

          <button
            onClick={() => navigate("/booking")}
            style={{
              width: "100%",
              padding: "12px",
              background: "#7c5cff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
