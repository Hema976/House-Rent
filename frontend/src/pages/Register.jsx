import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2>Register</h2>

      <input type="text" placeholder="Full Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Register</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
