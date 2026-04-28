//riki
"use client";
import "./login.css";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && (
        <>
          <div className="input-box">
            <input type="text" placeholder="Nama Lengkap" required />
            <span>Nama Lengkap</span>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <span>Username</span>
          </div>

          <div className="input-box">
            <input type="text" placeholder="No HP" required />
            <span>No HP</span>
          </div>
        </>
      )}

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
        {isLogin ? "Login" : "Register"}
      </Link>
      <p>
        {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
        <span
          onClick={() => setIsLogin}
          >
          {isLogin ? "Register" : "Login"}
         </span>
      </p>
    </div>
  );
}