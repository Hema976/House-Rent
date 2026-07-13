import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login</h2>

      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
