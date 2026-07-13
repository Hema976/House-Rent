import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <nav className="navbar">
          <h2 className="logo">RentEase</h2>

          <div className="menu">
            <Link to="/">Home</Link>

            <Link to="/login">Login</Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>

            <button
              onClick={() => {
                localStorage.clear();
                alert("Logged Out Successfully");
                window.location.href = "/";
              }}
              className="logout-btn"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Find Your Dream Rental Property</h1>

          <p>Comfort, Convenience & Affordable Homes</p>

          <Link to="/properties">
            <button className="hero-btn">
              Explore Our Premium Properties
            </button>
          </Link>

          <div className="dashboard-grid">
            <Link to="/owner" className="card-link">
              <div className="dashboard-card">
                <h3>🏠 Owner Dashboard</h3>
                <p>Add & Manage Properties</p>
              </div>
            </Link>

            <Link to="/admin" className="card-link">
              <div className="dashboard-card">
                <h3>🛡️ Admin Dashboard</h3>
                <p>Manage Properties & Bookings</p>
              </div>
            </Link>

            <Link to="/renter" className="card-link">
              <div className="dashboard-card">
                <h3>🔑 Renter Dashboard</h3>
                <p>Browse & Book Houses</p>
              </div>
            </Link>

            <Link to="/profile" className="card-link">
              <div className="dashboard-card">
                <h3>👤 My Profile</h3>
                <p>View & Edit Profile</p>
              </div>
            </Link>

            <Link to="/about" className="card-link">
              <div className="dashboard-card">
                <h3>ℹ️ About Us</h3>
                <p>Know more about RentEase</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;;
