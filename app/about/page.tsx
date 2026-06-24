import Nav from "@/components/Nav";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ maxWidth: "680px", margin: "0 auto", padding: "56px 24px 96px" }}>
        <Link href="/" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", display: "inline-block", marginBottom: "44px" }}>
          ← Back
        </Link>

        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: "var(--text-primary)", marginBottom: "36px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
          What this is and why it&apos;s published
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {[
            "Someone who uses AI tools constantly — for architecture decisions, debugging, research, writing, planning. Most of what gets published about AI is either benchmarks that don't reflect real use, or marketing that doesn't reflect real limitations.",
            "This site is neither. It's a record of actual conversations — the ones that changed how I think about a problem, revealed something unexpected about a model's capabilities, or produced a genuinely useful output I couldn't have reached alone.",
            "I publish the full transcript plus a key insight: what actually came out of the exchange that was worth keeping. The goal is to help practitioners understand what these tools can and can't do when you push them on real problems, not toy tasks.",
          ].map((para, i) => (
            <p key={i} style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.8 }}>{para}</p>
          ))}
        </div>

        <aside aria-label="What gets published" style={{
          margin: "40px 0",
          padding: "24px 28px",
          background: "var(--blue-dim)",
          border: "1px solid rgba(79,107,245,0.18)",
          borderLeft: "3px solid var(--blue)",
          borderRadius: "0 10px 10px 0",
        }}>
          <p className="font-mono" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--blue)", textTransform: "uppercase", marginBottom: "14px" }}>
            What gets published
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Real conversations, not curated prompts",
              "The model and version used, always",
              "What the conversation was actually trying to accomplish",
              "The insight that made it worth keeping",
              "Failures and limitations when they showed up",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text-body)" }}>
                <span style={{ color: "var(--blue)", marginTop: "1px", flexShrink: 0 }} aria-hidden="true">→</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "44px" }}>
          Topics span engineering, system architecture, AI research, and product strategy — wherever real problems show up.
        </p>

        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "12px 24px", background: "var(--blue)", borderRadius: "8px",
          fontSize: "14px", fontWeight: 600, color: "white", textDecoration: "none",
        }}>
          Read the conversations →
        </Link>
      </main>
    </>
  );
}
