import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f1a14", borderTop: "1px solid #1e2e22", padding: "40px 20px 20px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", marginBottom: "32px" }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: "28px", height: "28px", backgroundColor: "#4a9a5a", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>P</span>
              </div>
              <span style={{ color: "#e8f0ea", fontWeight: "bold", fontSize: "13px", letterSpacing: "2px" }}>PUNSATVA</span>
            </div>
            <p style={{ color: "#5a7a5e", fontSize: "12px", lineHeight: "1.7", fontFamily: "sans-serif" }}>
              Bridging Ayurvedic wisdom with modern medical science for men&apos;s wellness.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: "#9ab09e", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontFamily: "sans-serif" }}>Company</h4>
            {["About Us", "Our Doctors", "Clinics", "Blog"].map((item) => (
              <Link key={item} href="#" style={{ display: "block", color: "#5a7a5e", fontSize: "13px", marginBottom: "8px", textDecoration: "none", fontFamily: "sans-serif" }}>{item}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#9ab09e", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontFamily: "sans-serif" }}>Treatments</h4>
            {["Phimosis Care", "Pelvic Floor Therapy", "Ayurvedic Programs", "Vitality Management"].map((item) => (
              <Link key={item} href="#" style={{ display: "block", color: "#5a7a5e", fontSize: "13px", marginBottom: "8px", textDecoration: "none", fontFamily: "sans-serif" }}>{item}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#9ab09e", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontFamily: "sans-serif" }}>Legal</h4>
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" style={{ display: "block", color: "#5a7a5e", fontSize: "13px", marginBottom: "8px", textDecoration: "none", fontFamily: "sans-serif" }}>{item}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e2e22", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ color: "#5a7a5e", fontSize: "12px", fontFamily: "sans-serif" }}>© 2026 Punsatva. All rights reserved.</p>
          <p style={{ color: "#4a9a5a", fontSize: "12px", fontFamily: "sans-serif" }}>🔒 SSL Secured</p>
        </div>
      </div>
    </footer>
  );
}
