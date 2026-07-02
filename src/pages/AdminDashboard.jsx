import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }
    fetch(`${BASE_URL}/api/portfolio`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setMessage("Could not load data."))
      .finally(() => setLoading(false));
  }, []);

  async function save() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/api/portfolio`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (res.status === 401) {
        navigate("/admin");
        return;
      }
      if (!res.ok) throw new Error();
      setMessage("Saved successfully!");
    } catch {
      setMessage("Save failed. Try again.");
    } finally {
      setSaving(false);
    }
  }

  function updateField(field, value) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function updateStat(index, key, value) {
    const stats = [...data.stats];
    stats[index] = { ...stats[index], [key]: value };
    updateField("stats", stats);
  }

  function updateProject(index, key, value) {
    const projects = [...data.projects];
    projects[index] = { ...projects[index], [key]: value };
    updateField("projects", projects);
  }

  function addProject() {
    updateField("projects", [
      ...data.projects,
      {
        title: "",
        description: "",
        icon: "code",
        tags: [],
        liveUrl: "",
        githubUrl: "",
      },
    ]);
  }

  function removeProject(index) {
    updateField(
      "projects",
      data.projects.filter((_, i) => i !== index),
    );
  }

  if (loading)
    return (
      <div style={{ padding: "40px", color: "var(--text-muted)" }}>
        Loading...
      </div>
    );
  if (!data)
    return (
      <div style={{ padding: "40px", color: "var(--text-muted)" }}>
        Could not load data.
      </div>
    );

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Edit portfolio</h1>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {message && (
            <span
              className={message.includes("success") ? "msg-ok" : "msg-err"}
            >
              {message}
            </span>
          )}
          <button className="btn btn-primary" onClick={save} disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              localStorage.removeItem("admin_token");
              navigate("/admin");
            }}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="admin-body">
        <section className="admin-section">
          <h2>Basic info</h2>
          <div className="field-grid">
            {[
              "name",
              "title",
              "email",
              "github",
              "linkedin",
              "photoUrl",
              "resumeUrl",
            ].map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input
                  value={data[field] || ""}
                  onChange={(e) => updateField(field, e.target.value)}
                  placeholder={field}
                />
              </label>
            ))}
            <label style={{ gridColumn: "1 / -1" }}>
              <span>bio</span>
              <textarea
                rows={4}
                value={data.bio || ""}
                onChange={(e) => updateField("bio", e.target.value)}
              />
            </label>
          </div>
        </section>

        <section className="admin-section">
          <h2>Skills</h2>
          <p className="admin-hint">Comma-separated list</p>
          <textarea
            rows={3}
            value={(data.skills || []).join(", ")}
            onChange={(e) =>
              updateField(
                "skills",
                e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
          />
        </section>

        <section className="admin-section">
          <h2>Stats</h2>
          {(data.stats || []).map((stat, i) => (
            <div className="stat-row" key={i}>
              <label>
                <span>Value</span>
                <input
                  value={stat.value}
                  onChange={(e) => updateStat(i, "value", e.target.value)}
                  placeholder="e.g. 12+"
                />
              </label>
              <label>
                <span>Label</span>
                <input
                  value={stat.label}
                  onChange={(e) => updateStat(i, "label", e.target.value)}
                  placeholder="e.g. Projects shipped"
                />
              </label>
            </div>
          ))}
        </section>

        <section className="admin-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ margin: 0 }}>Projects</h2>
            <button className="btn btn-secondary" onClick={addProject}>
              + Add project
            </button>
          </div>
          {(data.projects || []).map((project, i) => (
            <div className="project-editor" key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <strong
                  style={{ color: "var(--text-primary)", fontSize: "14px" }}
                >
                  Project {i + 1}
                </strong>
                <button className="btn-delete" onClick={() => removeProject(i)}>
                  Remove
                </button>
              </div>
              <div className="field-grid">
                <label>
                  <span>Title</span>
                  <input
                    value={project.title}
                    onChange={(e) => updateProject(i, "title", e.target.value)}
                  />
                </label>
                <label>
                  <span>Tags (comma-separated)</span>
                  <input
                    value={(project.tags || []).join(", ")}
                    onChange={(e) =>
                      updateProject(
                        i,
                        "tags",
                        e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      )
                    }
                  />
                </label>
                <label>
                  <span>GitHub URL</span>
                  <input
                    value={project.githubUrl || ""}
                    onChange={(e) =>
                      updateProject(i, "githubUrl", e.target.value)
                    }
                  />
                </label>
                <label>
                  <span>Live URL</span>
                  <input
                    value={project.liveUrl || ""}
                    onChange={(e) =>
                      updateProject(i, "liveUrl", e.target.value)
                    }
                  />
                </label>
                <label style={{ gridColumn: "1 / -1" }}>
                  <span>Description</span>
                  <textarea
                    rows={3}
                    value={project.description}
                    onChange={(e) =>
                      updateProject(i, "description", e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </section>
      </div>

      <style>{`
        .admin { min-height: 100vh; background: var(--bg-page); }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 6vw;
          border-bottom: 0.5px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(11,14,20,0.9);
          backdrop-filter: blur(8px);
          z-index: 10;
        }
        .admin-header h1 { font-size: 18px; margin: 0; }
        .admin-body { padding: 32px 6vw; max-width: 900px; }
        .admin-section { margin-bottom: 40px; }
        .admin-section h2 { font-size: 15px; font-weight: 600; margin: 0 0 16px; color: var(--accent); }
        .admin-hint { color: var(--text-muted); font-size: 12px; margin: -10px 0 10px; }
        .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        label { display: flex; flex-direction: column; gap: 6px; }
        label span { font-size: 11px; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase; }
        input, textarea {
          background: var(--bg-surface);
          border: 0.5px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          color: var(--text-primary);
          font-size: 13px;
          font-family: inherit;
          resize: vertical;
        }
        .stat-row { display: grid; grid-template-columns: 1fr 2fr; gap: 12px; margin-bottom: 12px; }
        .project-editor {
          background: var(--bg-surface);
          border: 0.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 16px;
          margin-bottom: 14px;
        }
        .btn-delete {
          background: rgba(248,113,113,0.1);
          color: #f87171;
          border: 0.5px solid rgba(248,113,113,0.3);
          font-size: 12px;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          cursor: pointer;
        }
        .msg-ok { color: #4ade80; font-size: 13px; }
        .msg-err { color: #f87171; font-size: 13px; }
        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 0.5px solid var(--border-strong);
        }
        @media (max-width: 600px) {
          .field-grid { grid-template-columns: 1fr; }
          .field-grid label[style] { grid-column: 1; }
        }
      `}</style>
    </div>
  );
}
