import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
  } = useAuth();
  return (
    <>
      <section className="login">
        <div className="login-container">
          <label className="auth-label">Email</label>
          <input
            className="auth-input"
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="error-msg">{emailError}</p>

          <label className="auth-label">Password</label>
          <input
            className="auth-input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error-msg">{passwordError}</p>

          <div className="btn-container">
            {hasAccount ? (
              <>
                <Link to="/">
                  <button className="auth-btn" onClick={handleLogin}>
                    Sign in
                  </button>
                </Link>
                <p className="auth-text">
                  Don't have an account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <Link to="/">
                  <button className="auth-btn" onClick={handleSignUp}>
                    Sign up
                  </button>
                </Link>
                <p className="auth-text">
                  Have an account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
          <Link to="/">
          <p style={{ textAlign: "center", color: "#8F98A0" }}>
            Войти с помощью
            <img
              className="google-logo"
              onClick={authWithGoogle}
              src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
              alt="google"
            />
          </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
