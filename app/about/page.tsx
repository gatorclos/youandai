import Nav from "@/components/Nav";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <Link href="/" style={{ fontSize: "13px", color: "var(--slate)", textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
          ← Back
        </Link>

        <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, color: "var(--off-white)", marginBottom: "32px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          What this is and why I&apos;m publishing it
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "16px", color: "var(--slate)", lineHeight: 1.8 }}>
          <p>
            Someone who uses AI tools constantly — for architecture decisions, debugging, research, writing, planning. Most of what gets published about AI is either benchmarks that don&apos;t reflect real use, or marketing that doesn&apos;t reflect real limitations.
          </p>
          <p>
            This site is neither. It&apos;s a record of actual conversations — the ones that changed how I think about a problem, revealed something unexpected about a model&apos;s capabilities, or produced a genuinely useful output I couldn&apos;t have reached alone.
          </p>
          <p>
            I publish the full transcript plus a key insight: what actually came out of the exchange that was worth keeping. The goal is to help other practitioners understand what these tools can and can&apos;t do when you push them on real problems, not toy tasks.
          </p>

          <div style={{ padding: "20px 24px", background: "rgba(91,110,245,0.06)", border: "1px solid rgba(91,110,245,0.15)", borderRadius: "10px", marginTop: "8px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--periwinkle)", textTransform: "uppercase", marginBottom: "10px" }}>What I publish</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "0", listStyle: "none" }}>
              {[
                "Real conversations, not curated prompts",
                "The model and version used, always",
                "What the conversation was actually trying to accomplish",
                "The insight that made it worth publishing",
                "Failures and limitations when they showed up",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                  <span style={{ color: "var(--periwinkle)", marginTop: "2px" }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Topics span engineering, system architecture, AI research, product strategy, and wherever real problems show up.
          </p>
        </div>

        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "10px 22px", background: "var(--periwinkle)",
            borderRadius: "8px", fontSize: "14px", fontWeight: 600,
            color: "white", textDecoration: "none",
          }}>
            Read the conversations →
          </Link>
        </div>
      </main>
    </>
  );
}
