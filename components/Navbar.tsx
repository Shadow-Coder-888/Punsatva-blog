"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#0f1a14", borderBottom: "1px solid #1e2e22", padding: "12px 20px", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", backgroundColor: "#4a9a5a", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>P</span>
          </div>
          <div>
            <p style={{ color: "#e8f0ea", fontWeight: "bold", fontSize: "14px", letterSpacing: "2px" }}>PUNSATVA</p>
            <p style={{ color: "#5a7a5e", fontSize: "10px", fontFamily: "sans-serif" }}>Male Wellness Platform</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }} className="hidden md:flex">
          <Link href="#" style={{ color: "#9ab09e", fontSize: "13px", textDecoration: "none", fontFamily: "sans-serif" }}>Clinics</Link>
          <Link href="#" style={{ color: "#9ab09e", fontSize: "13px", textDecoration: "none", fontFamily: "sans-serif" }}>Treatments</Link>
          <Link href="#" style={{ color: "#9ab09e", fontSize: "13px", textDecoration: "none", fontFamily: "sans-serif" }}>Knowledge Hub</Link>
          <Link href="#" style={{ color: "#9ab09e", fontSize: "13px", textDecoration: "none", fontFamily: "sans-serif" }}>Ayurveda</Link>
          <Link
            href="#assessment"
            style={{ backgroundColor: "#4a9a5a", color: "white", padding: "8px 16px", borderRadius: "5px", fontSize: "12px", fontWeight: "bold", textDecoration: "none", fontFamily: "sans-serif" }}
          >
            Free Assessment
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#9ab09e", display: "none" }}
          className="md:hidden block"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#111a15", padding: "16px 20px", borderTop: "1px solid #1e2e22" }}>
          {["Clinics", "Treatments", "Knowledge Hub", "Ayurveda"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{ display: "block", color: "#9ab09e", fontSize: "14px", padding: "10px 0", borderBottom: "1px solid #1e2e22", textDecoration: "none", fontFamily: "sans-serif" }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#assessment"
            style={{ display: "block", backgroundColor: "#4a9a5a", color: "white", padding: "10px 16px", borderRadius: "5px", fontSize: "13px", fontWeight: "bold", textDecoration: "none", fontFamily: "sans-serif", textAlign: "center", marginTop: "12px" }}
          >
            Free Assessment
          </Link>
        </div>
      )}
    </nav>
  );
}
