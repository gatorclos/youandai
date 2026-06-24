import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import ModelBadge from "@/components/ModelBadge";
import TaskBadge from "@/components/TaskBadge";
import AudioPlayer from "@/components/AudioPlayer";
import ConversationTranscript from "@/components/ConversationTranscript";
import TopicImage from "@/components/TopicImage";
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
      <main id="main-content" style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 96px" }}>

        <div style={{ padding: "28px 0 0" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
            ← All conversations
          </Link>
        </div>

        {/* ── Header ── */}
        <header style={{ padding: "32px 0 40px", borderBottom: "1px solid var(--border)" }}>

          {/* Topic image */}
          <TopicImage slug={conv.slug} />

          {/* Meta */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <ModelBadge model={conv.model} />
            <TaskBadge task={conv.task} />
            <time dateTime={conv.date} style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace", marginLeft: "auto" }}>
              {new Date(conv.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {conv.readTime} min
            </time>
          </div>

          {/* Title */}
          <h1 className="font-display" style={{
            fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 400,
            lineHeight: 1.15, color: "var(--text-primary)",
            marginBottom: "18px", letterSpacing: "-0.025em",
          }}>
            {conv.title}
          </h1>

          {/* Summary */}
          <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "28px" }}>
            {conv.summary}
          </p>

          {/* Key insight */}
          <aside aria-label="Key insight" style={{
            padding: "20px 24px",
            background: "var(--blue-dim)",
            border: "1px solid rgba(79,107,245,0.2)",
            borderLeft: "3px solid var(--blue)",
            borderRadius: "0 10px 10px 0",
          }}>
            <p className="font-mono" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--blue)", textTransform: "uppercase", marginBottom: "8px" }}>
              Key insight
            </p>
            <p style={{ fontSize: "16px", color: "var(--text-primary)", lineHeight: 1.7, fontStyle: "italic" }}>
              &ldquo;{conv.insight}&rdquo;
            </p>
          </aside>

          {/* Audio player */}
          <AudioPlayer messages={conv.messages} debateRounds={conv.debateRounds} slug={conv.slug} />
        </header>

        {/* ── Transcript ── */}
        <section style={{ paddingTop: "44px" }} aria-label="Conversation transcript">
          <p className="font-mono" style={{ fontSize: "10px", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "28px" }}>
            Transcript
          </p>
          <ConversationTranscript messages={conv.messages} debateRounds={conv.debateRounds} />
        </section>

        {/* ── Footer nav ── */}
        <div style={{ marginTop: "64px", paddingTop: "28px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none" }}>
            ← Back to all conversations
          </Link>
          <span className="font-mono" style={{ fontSize: "11px", color: "var(--text-faint)" }}>youand.ai</span>
        </div>
      </main>
    </>
  );
}
