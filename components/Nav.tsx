import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid var(--border)",
      background: "rgba(10,15,30,0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "20px",
            color: "var(--off-white)",
            letterSpacing: "-0.02em",
          }}>
            you<span style={{ color: "var(--periwinkle)" }}>and</span>.ai
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--slate)", textDecoration: "none", fontWeight: 500 }}>
            Conversations
          </Link>
          <Link href="/about" style={{ fontSize: "13px", color: "var(--slate)", textDecoration: "none", fontWeight: 500 }}>
            About
          </Link>
          <a
            href="https://youand.ai/rss"
            style={{
              fontSize: "12px",
              color: "var(--periwinkle)",
              textDecoration: "none",
              fontWeight: 600,
              padding: "5px 12px",
              border: "1px solid rgba(91,110,245,0.35)",
              borderRadius: "6px",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            RSS
          </a>
        </div>
      </div>
    </nav>
  );
}
