import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="page">
      <h1>Registration Form</h1>
      <form className="regi">
        <input type="text" name="Fullname" placeholder="Full Name" />
        <input type="text" name="Username" placeholder="UserName" />
        <input type="email" name="Email" placeholder="E-mail Address" />
        <input type="password" name="Password" placeholder="Password" />
        <Link to="/login">
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
}

export default Registration;
