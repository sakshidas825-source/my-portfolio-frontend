import { useState } from 'react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this to POST /api/auth/login once backend exists
    console.log('Login attempt with password:', password)
  }

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1>Admin login</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>

      <style>{`
        .admin-login {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 280px;
        }
        .admin-login-form h1 {
          font-size: 18px;
          margin: 0 0 6px;
        }
        .admin-login-form input {
          background: var(--bg-surface);
          border: 0.5px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 14px;
        }
        .admin-login-form button { border: none; }
      `}</style>
    </div>
  )
}
