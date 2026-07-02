import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this to a backend endpoint, e.g. POST /api/contact
    console.log('Contact form submitted:', form)
    setStatus('sent')
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-heading">Contact</h2>
      <p className="contact-sub">Have a project in mind or just want to say hi? Send a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">
          {status === 'sent' ? 'Sent' : 'Send message'}
        </button>
      </form>

      <style>{`
        .contact { padding: 0 6vw 64px; }
        .contact-sub {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0 0 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 460px;
        }
        .contact-form input,
        .contact-form textarea {
          background: var(--bg-surface);
          border: 0.5px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 14px;
          resize: vertical;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: var(--text-muted);
        }
        .contact-form button {
          align-self: flex-start;
          border: none;
        }
      `}</style>
    </section>
  )
}
