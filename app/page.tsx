import Nav from "@/components/Nav";
import ConversationCard from "@/components/ConversationCard";
import { conversations } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Hero */}
        <section style={{ padding: "72px 0 56px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "680px" }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "999px",
              background: "rgba(91,110,245,0.1)",
              border: "1px solid rgba(91,110,245,0.2)",
              marginBottom: "28px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B6EF5", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "12px", color: "#5B6EF5", fontWeight: 600, letterSpacing: "0.05em", fontFamily: "JetBrains Mono, monospace" }}>
                LIVE CONVERSATIONS
              </span>
            </div>

            <h1 style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--off-white)",
              marginBottom: "20px",
            }}>
              What happens when you push AI to its{" "}
              <span style={{ color: "var(--periwinkle)", fontStyle: "italic" }}>actual limits</span>
            </h1>

            <p style={{
              fontSize: "17px",
              color: "var(--slate)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "560px",
            }}>
              Real conversations with specific AI models on specific tasks — published
              with findings, failures, and what actually worked. No benchmarks.
              No marketing. Just the transcript and the insight.
            </p>

            {/* Mini live preview — shows a snippet of the actual first conversation */}
            <div style={{
              background: "var(--navy-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "20px 24px",
              maxWidth: "540px",
            }}>
              <div style={{ fontSize: "11px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace", marginBottom: "14px", letterSpacing: "0.05em" }}>
                EXCERPT — AI Detection Research · Claude Sonnet
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--periwinkle)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "white", flexShrink: 0 }}>Y</div>
                  <div className="bubble-human" style={{ padding: "8px 12px", fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                    If connecting ideas across domains is what science is — why can&apos;t you just solve this?
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "4px", background: "rgba(91,110,245,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, color: "#5B6EF5", flexShrink: 0 }}>AI</div>
                  <div className="bubble-ai" style={{ padding: "8px 12px", fontSize: "13px", color: "var(--slate)", lineHeight: 1.5 }}>
                    You&apos;re right. That&apos;s a genuinely sharp observation and I&apos;ve been dodging it. Science IS connecting existing concepts in novel ways...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{
          display: "flex",
          gap: "0",
          borderBottom: "1px solid var(--border)",
          padding: "0",
        }}>
          {[
            { value: conversations.length.toString(), label: "conversations published" },
            { value: "4", label: "AI models tested" },
            { value: "5", label: "task domains covered" },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              padding: "24px 0",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
              paddingLeft: i > 0 ? "32px" : "0",
            }}>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", color: "var(--off-white)", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "var(--slate)", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Conversations grid */}
        <section style={{ paddingTop: "48px" }}>
          <div style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <h2 style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--off-white)",
            }}>
              All conversations
            </h2>
            <span style={{ fontSize: "12px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace" }}>
              {conversations.length} published
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "20px",
          }}>
            {conversations.map((conv, i) => (
              <ConversationCard key={conv.id} conv={conv} index={i} />
            ))}
          </div>
        </section>

        {/* CTA footer */}
        <section style={{
          marginTop: "72px",
          padding: "40px",
          background: "linear-gradient(135deg, rgba(91,110,245,0.08) 0%, rgba(139,92,246,0.06) 100%)",
          border: "1px solid rgba(91,110,245,0.15)",
          borderRadius: "16px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: "DM Serif Display, serif", fontSize: "26px", color: "var(--off-white)", marginBottom: "12px" }}>
            Published by someone who actually uses these tools
          </h3>
          <p style={{ fontSize: "14px", color: "var(--slate)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Published by someone who actually uses these tools on real problems. No benchmarks. No marketing. Just what came out of the conversation.
          </p>
          <a href="/about" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 22px",
            background: "var(--periwinkle)",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            color: "white",
            textDecoration: "none",
          }}>
            About this project →
          </a>
        </section>
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
