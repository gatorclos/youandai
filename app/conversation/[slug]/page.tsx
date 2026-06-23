import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import ModelBadge from "@/components/ModelBadge";
import TaskBadge from "@/components/TaskBadge";
import AudioPlayer from "@/components/AudioPlayer";
import ConversationTranscript from "@/components/ConversationTranscript";
import { conversations } from "@/lib/data";

export async function generateStaticParams() {
  return conversations.map((c) => ({ slug: c.slug }));
}

export default async function ConversationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const conv = conversations.find((c) => c.slug === slug);
  if (!conv) notFound();

  return (
    <>
      <Nav />
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 80px" }}>

        <div style={{ padding: "28px 0 0" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--slate)", textDecoration: "none" }}>
            ← All conversations
          </Link>
        </div>

        <header style={{ padding: "32px 0 36px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <ModelBadge model={conv.model} />
            <TaskBadge task={conv.task} />
            <span style={{ fontSize: "12px", color: "var(--slate)", fontFamily: "JetBrains Mono, monospace", marginLeft: "auto" }}>
              {new Date(conv.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {conv.readTime} min
            </span>
          </div>

          <h1 style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 400, lineHeight: 1.2,
            color: "var(--off-white)", marginBottom: "16px", letterSpacing: "-0.02em",
          }}>
            {conv.title}
          </h1>

          <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.75 }}>
            {conv.summary}
          </p>

          <div style={{
            marginTop: "28px", padding: "20px 24px",
            background: "rgba(91,110,245,0.06)", border: "1px solid rgba(91,110,245,0.2)", borderRadius: "10px",
          }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--periwinkle)", textTransform: "uppercase", marginBottom: "8px" }}>
              Key insight
            </div>
            <p style={{ fontSize: "15px", color: "var(--off-white)", lineHeight: 1.7, fontStyle: "italic" }}>
              &ldquo;{conv.insight}&rdquo;
            </p>
          </div>

          {/* Audio player — tabs for conversation vs debate */}
          <AudioPlayer
            messages={conv.messages}
            debateRounds={conv.debateRounds}
            slug={conv.slug}
          />
        </header>

        <section style={{ paddingTop: "40px" }}>
          <div style={{ fontSize: "11px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em", marginBottom: "28px" }}>
            TRANSCRIPT
          </div>
          <ConversationTranscript messages={conv.messages} debateRounds={conv.debateRounds} />
        </section>

        <div style={{ marginTop: "60px", paddingTop: "32px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--slate)", textDecoration: "none" }}>
            ← Back to all conversations
          </Link>
          <span style={{ fontSize: "12px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace" }}>youand.ai</span>
        </div>
      </main>
    </>
  );
}
