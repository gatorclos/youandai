import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata = {
  title: "The Coupled-Signal Manifesto — youand.ai",
  description: "Detecting synthetic media by the statistical decoupling of physiologically bound signals. A technical white paper.",
};

const PILLARS = [
  { n: "01", title: "The arms race is structural", text: "Every forensic tell dies because it lives in the generator's current imperfections. Durable detection needs a signal the generator can't access." },
  { n: "02", title: "Coupling, not artifacts", text: "Real human media is the joint output of physiologically coupled channels sharing a hidden cause. AI synthesizes each channel independently." },
  { n: "03", title: "Measure the decoupling", text: "The detectable quantity is the mutual information between channels that should be dependent — a property of the source, not the generator." },
  { n: "04", title: "The attack is harder than the defense", text: "Adding channels is cheaper for the defender than learning to jointly couple them is for the attacker. Each new channel drags in its own coupled physiology." },
  { n: "05", title: "Falsifiable by design", text: "A five-step validation protocol with a decisive adversarial experiment that could refute the entire thesis." },
];

export default function Whitepaper() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 96px" }}>

        <div style={{ padding: "28px 0 0" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none" }}>
            ← All conversations
          </Link>
        </div>

        {/* Header */}
        <header style={{ padding: "36px 0 40px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "22px", flexWrap: "wrap", alignItems: "center" }}>
            <span className="font-mono" style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
              color: "var(--amber)", background: "var(--amber-dim)",
              border: "1px solid rgba(240,165,0,0.3)", padding: "3px 10px",
              borderRadius: "4px", textTransform: "uppercase",
            }}>
              White Paper
            </span>
            <span className="font-mono" style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
              WORKING DRAFT v1.0
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace", marginLeft: "auto" }}>
              7 pages · ~20 min
            </span>
          </div>

          <h1 className="font-display" style={{
            fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 400,
            lineHeight: 1.1, color: "var(--text-primary)",
            marginBottom: "18px", letterSpacing: "-0.025em",
          }}>
            The Coupled-Signal Manifesto
          </h1>

          <p style={{ fontSize: "18px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "28px", fontStyle: "italic" }}>
            Detecting synthetic media by the statistical decoupling of physiologically bound signals.
          </p>

          {/* Download CTA */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/coupled-signal-manifesto.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 22px", background: "var(--blue)", borderRadius: "8px",
                fontSize: "14px", fontWeight: 600, color: "white", textDecoration: "none",
              }}
            >
              ↓ Read the PDF
            </a>
            <a
              href="/coupled-signal-manifesto.pdf"
              download
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 22px", background: "transparent",
                border: "1px solid var(--border-hi)", borderRadius: "8px",
                fontSize: "14px", fontWeight: 600, color: "var(--text-body)", textDecoration: "none",
              }}
            >
              Download
            </a>
          </div>
        </header>

        {/* Abstract */}
        <section style={{ paddingTop: "40px" }}>
          <p className="font-mono" style={{ fontSize: "10px", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            Abstract
          </p>
          <p className="prose-body" style={{ marginBottom: "16px" }}>
            Post-hoc detection of AI-generated media is conventionally framed as a classification problem:
            given a sample, decide whether it was produced by a human process or a generative model. We argue
            this framing is the root cause of the field&apos;s instability. A classifier trained against the
            artifacts of a fixed generator is defeated the moment the generator improves, producing a
            perpetual arms race with no fixed point.
          </p>
          <p className="prose-body" style={{ marginBottom: "16px" }}>
            We propose an alternative grounded not in generator artifacts but in a property of the source:
            <strong style={{ color: "var(--text-primary)" }}> real human media is the joint output of coupled
            physiological processes that share a common hidden cause, whereas current generative models
            synthesize each observable channel with limited or no cross-channel modeling.</strong> The
            detectable quantity is therefore not any individual artifact but the mutual information between
            channels that ought to be statistically dependent.
          </p>
        </section>

        {/* Pillars */}
        <section style={{ paddingTop: "40px" }}>
          <p className="font-mono" style={{ fontSize: "10px", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
            The argument in five moves
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{
                display: "flex", gap: "20px", alignItems: "flex-start",
                padding: "20px 0", borderBottom: "1px solid var(--border)",
              }}>
                <span className="font-mono" style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 500, flexShrink: 0, paddingTop: "2px" }}>
                  {p.n}
                </span>
                <div>
                  <h2 className="font-display" style={{ fontSize: "19px", fontWeight: 400, color: "var(--text-primary)", marginBottom: "6px", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Origin note */}
        <section style={{ paddingTop: "40px" }}>
          <aside aria-label="Origin" style={{
            padding: "22px 26px",
            background: "var(--blue-dim)",
            border: "1px solid rgba(79,107,245,0.18)",
            borderLeft: "3px solid var(--blue)",
            borderRadius: "0 10px 10px 0",
          }}>
            <p className="font-mono" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--blue)", textTransform: "uppercase", marginBottom: "10px" }}>
              How this came about
            </p>
            <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: 1.7 }}>
              This framework originated in a working dialogue with an AI model, then was stress-tested by a
              simulated panel of ten domain experts across deep learning, statistics, digital forensics, and
              AI ethics. The full conversation that produced it is published{" "}
              <Link href="/conversation/ai-detection-biological-constraints" style={{ color: "var(--blue)", textDecoration: "underline" }}>
                here
              </Link>.
            </p>
          </aside>
        </section>

        {/* Footer */}
        <div style={{ marginTop: "56px", paddingTop: "28px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none" }}>
            ← Back to all conversations
          </Link>
          <a href="/coupled-signal-manifesto.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>
            Read the full paper →
          </a>
        </div>
      </main>
    </>
  );
}
