import "./login.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className="form-container">
      <h2>Login</h2>

      <div className="input-box">
        <input type="numerik" placeholder="NIK" required />
        <span>NIK</span>
      </div>

      <div className="input-box">
        <input type="text" placeholder="Username" required />
        <span>Username</span>
      </div>

      <div className="input-box">
        <input type="password" placeholder="Password" required />
        <span>Password</span>
      </div>

      <Link href="/" className="submit-btn">
        Login
      </Link>
    </div>
  );
}