import React from 'react'

const LAWYER_NAME = 'Bhupinderjit Singh Gill'
const FIRM = 'Gill Legal Consulting Inc.'
const LICENSE = 'Enrolled Advocate — Bar Council of Punjab & Haryana (P/1679/2018)'
const ADDRESS = 'Edmonton (Canada) & Chandigarh (India)'
const EMAIL = 'advbjsgill3164@gmail.com'
const PHONE = '+91-7973593609'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', padding: 24 }}>
      <header style={{ background: '#0f172a', color: '#fff', padding: 24, borderRadius: 8 }}>
        <h1 style={{ margin: 0 }}>{FIRM}</h1>
        <p style={{ marginTop: 8 }}>
          International immigration consultancy and legal drafting — provided by an Indian Advocate.
        </p>
        <div style={{ marginTop: 8, color: '#94a3b8' }}>
          <strong>{LAWYER_NAME}</strong> • {LICENSE}
        </div>
      </header>

      <main style={{ marginTop: 20, maxWidth: 980 }}>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Immigration Documentation — SOP / LOE drafting, document review</li>
            <li>Points Assessment — Canada / Australia / NZ</li>
            <li>Application Drafting Support — advisory only</li>
            <li>Legal Research and Compliance Notes</li>
          </ul>
        </section>

        <section style={{ marginTop: 18 }}>
          <h3>Downloads</h3>
          <ul>
            <li><a href="/dl/brochure">Professional Brochure (PDF)</a></li>
            <li><a href="/dl/disclaimer">Disclaimer (PDF)</a></li>
          </ul>
        </section>

        <section style={{ marginTop: 18 }}>
          <h3>Contact</h3>
          <p>Email: <a href={"mailto:" + EMAIL}>{EMAIL}</a></p>
          <p>Phone: <a href={"tel:" + PHONE}>{PHONE}</a></p>
          <p>Address: {ADDRESS}</p>
        </section>
      </main>

      <footer style={{ marginTop: 28, color: '#667' }}>
        <div>{FIRM} — {LICENSE}</div>
      </footer>
    </div>
  )
}
