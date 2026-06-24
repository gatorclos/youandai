import Link from "next/link";

export default function Nav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "rgba(8,12,24,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div style={{
        maxWidth: "1120px", margin: "0 auto", padding: "0 24px",
        height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none" }} aria-label="you and .ai — home">
          <span className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", letterSpacing: "-0.03em", fontWeight: 400 }}>
            you<span style={{ color: "var(--blue)" }}>and</span>.ai
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link href="/" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", fontWeight: 500 }}>
            Conversations
          </Link>
          <Link href="/about" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", fontWeight: 500 }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
