import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <div style={{ maxWidth: "400px", width: "100%", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "48px" }}> MARN </h1>
        
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              backgroundColor: "#333",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "10px",
              backgroundColor: "#333",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
          <hr style={{ flex: 1, borderColor: "#444" }} />
          <span style={{ margin: "0 10px", fontSize: "14px" }}>or continue with</span>
          <hr style={{ flex: 1, borderColor: "#444" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <FaGoogle />
            Log in
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <FaFacebook />
            Log in
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", marginTop: "20px", color: "#888" }}>
          By signing up, you agree to our{" "}
          <a href="/terms" style={{ color: "#fff", textDecoration: "underline" }}>Terms</a>,{" "}
          <a href="/privacy" style={{ color: "#fff", textDecoration: "underline" }}>Data Policy</a>, and{" "}
          <a href="/cookies" style={{ color: "#fff", textDecoration: "underline" }}>Cookies Policy</a>.
        </p>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#fff", textDecoration: "underline" }}>Sign-Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
