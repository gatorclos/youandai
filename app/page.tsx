import Nav from "@/components/Nav";
import ConversationCard from "@/components/ConversationCard";
import { conversations } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px 96px" }}>

        {/* ── Hero ── */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid var(--border)" }} aria-label="Introduction">
          <div style={{ maxWidth: "700px" }}>

            {/* Live indicator */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "4px 12px", borderRadius: "999px",
              background: "rgba(79,107,245,0.1)", border: "1px solid rgba(79,107,245,0.2)",
              marginBottom: "32px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", display: "inline-block", animation: "pulse 2.2s ease-in-out infinite" }} aria-hidden="true"/>
              <span className="font-mono" style={{ fontSize: "11px", color: "var(--blue)", fontWeight: 600, letterSpacing: "0.08em" }}>
                PUBLISHING IN PUBLIC
              </span>
            </div>

            <h1 className="font-display" style={{
              fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 400,
              lineHeight: 1.08, letterSpacing: "-0.03em",
              color: "var(--text-primary)", marginBottom: "24px",
            }}>
              What actually happens{" "}
              <em style={{ color: "var(--blue)", fontStyle: "italic" }}>when you push</em>
              {" "}AI past the surface
            </h1>

            <p style={{
              fontSize: "18px", color: "var(--text-body)", lineHeight: 1.75,
              marginBottom: "48px", maxWidth: "580px",
            }}>
              Real transcripts from real tasks — engineering decisions, research
              frameworks, product strategy. Published with the insight that made
              each conversation worth keeping.
            </p>

            {/* Animated dialogue preview — the signature element */}
            <div
              role="presentation"
              aria-hidden="true"
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "14px", padding: "20px 22px", maxWidth: "520px",
              }}
            >
              <p className="font-mono" style={{ fontSize: "10px", color: "var(--text-faint)", marginBottom: "14px", letterSpacing: "0.06em" }}>
                FROM: AI DETECTION RESEARCH
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Human turn */}
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                    background: "var(--blue)", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "white",
                  }}>Q</div>
                  <div className="bubble-human" style={{ padding: "9px 14px", fontSize: "13px", color: "var(--text-primary)", lineHeight: 1.55 }}>
                    If connecting ideas is what science is — why can&apos;t you just solve this?
                  </div>
                </div>
                {/* AI turn */}
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "6px", flexShrink: 0,
                    background: "var(--surface-hi)", border: "1px solid var(--border-hi)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "9px", fontWeight: 700, color: "var(--blue)",
                  }}>AI</div>
                  <div className="bubble-ai" style={{ padding: "9px 14px", fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.55 }}>
                    You&apos;re right. That&apos;s a genuinely sharp observation and I&apos;ve been dodging it…
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section
          aria-label="Site statistics"
          style={{ display: "flex", borderBottom: "1px solid var(--border)" }}
        >
          {[
            { value: String(conversations.length), label: "conversations" },
            { value: "4",  label: "AI models" },
            { value: "5",  label: "task domains" },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, padding: "28px 0",
              paddingLeft: i > 0 ? "36px" : "0",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
            }}>
              <p className="font-display" style={{ fontSize: "36px", color: "var(--text-primary)", lineHeight: 1, marginBottom: "4px" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── White paper feature ── */}
        <section style={{ paddingTop: "52px" }} aria-label="Featured white paper">
          <a href="/whitepaper" style={{ textDecoration: "none", display: "block" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(240,165,0,0.06) 0%, var(--surface) 60%)",
              border: "1px solid rgba(240,165,0,0.2)",
              borderRadius: "14px",
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <span className="font-mono" style={{
                  fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
                  color: "var(--amber)", textTransform: "uppercase",
                }}>
                  New · White Paper
                </span>
                <h2 className="font-display" style={{
                  fontSize: "24px", fontWeight: 400, color: "var(--text-primary)",
                  margin: "8px 0 8px", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  The Coupled-Signal Manifesto
                </h2>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  A novel framework for detecting synthetic media by the statistical decoupling of
                  physiologically bound signals — with math, architecture, and a falsifiable protocol.
                </p>
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "11px 22px", background: "var(--amber)", borderRadius: "8px",
                fontSize: "14px", fontWeight: 600, color: "#1A1206", whiteSpace: "nowrap",
              }}>
                Read paper →
              </span>
            </div>
          </a>
        </section>

        {/* ── Grid ── */}
        <section style={{ paddingTop: "52px" }} aria-label="All conversations">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
            <h2 className="font-display" style={{ fontSize: "24px", fontWeight: 400, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              All conversations
            </h2>
            <span className="font-mono" style={{ fontSize: "12px", color: "var(--text-faint)" }}>
              {conversations.length} published
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
            gap: "22px",
          }}>
            {conversations.map((conv, i) => (
              <ConversationCard key={conv.id} conv={conv} index={i} />
            ))}
          </div>
        </section>

        {/* ── About CTA ── */}
        <section style={{
          marginTop: "80px", padding: "44px 48px",
          background: "linear-gradient(135deg, var(--blue-dim) 0%, rgba(124,90,245,0.06) 100%)",
          border: "1px solid rgba(79,107,245,0.14)",
          borderRadius: "16px", textAlign: "center",
        }} aria-label="About this project">
          <h2 className="font-display" style={{ fontSize: "28px", fontWeight: 400, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Published by someone who actually uses these tools
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto 28px" }}>
            No benchmarks. No marketing. Just what came out of the conversation.
          </p>
          <a href="/about" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "11px 24px", background: "var(--blue)", borderRadius: "8px",
            fontSize: "14px", fontWeight: 600, color: "white", textDecoration: "none",
          }}>
            About this project →
          </a>
        </section>
      </main>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </>
  );
}
