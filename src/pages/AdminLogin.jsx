import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Incorrect password.");
        return;
      }

      localStorage.setItem("admin_token", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Admin login</h1>
        <p className="login-sub">Enter your password to edit the portfolio.</p>
        {error && <p className="login-error">{error}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-page);
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 300px;
          background: var(--bg-surface);
          border: 0.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
        }
        .login-form h1 { font-size: 18px; margin: 0; }
        .login-sub { color: var(--text-muted); font-size: 13px; margin: 0; }
        .login-error {
          color: #f87171;
          font-size: 13px;
          margin: 0;
          background: rgba(248,113,113,0.1);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }
        .login-form input {
          background: var(--bg-page);
          border: 0.5px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 14px;
        }
        .login-form button { border: none; }
      `}</style>
    </div>
  );
}
