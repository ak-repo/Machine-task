import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="page">
      <h1>Login Page</h1>
      <form className="regi">
        <input type="text" name="Username" placeholder="UserName" />
        <input type="password" name="Password" placeholder="Password" />
        <Link to="/home">
          <button>Login</button>
        </Link>
        <Link to="/">
          <small>don't have a account? Register</small>
        </Link>
      </form>
    </div>
  );
}

export default Login;
