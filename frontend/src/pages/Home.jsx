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

          <br />
          <br />

          <Link to="/owner">
            <button className="hero-btn">
              Owner Dashboard
            </button>
          </Link>

          <br />
          <br />

          <Link to="/profile">
            <button className="hero-btn">
              My Profile
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
