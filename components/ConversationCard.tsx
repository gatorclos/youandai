import Link from "next/link";
import { Conversation } from "@/lib/data";
import ModelBadge from "./ModelBadge";
import TaskBadge from "./TaskBadge";
import TopicImage from "./TopicImage";

export default function ConversationCard({ conv, index }: { conv: Conversation; index: number }) {
  return (
    <Link href={`/conversation/${conv.slug}`} style={{ textDecoration: "none", display: "block" }} aria-label={`Read: ${conv.title}`}>
      <article
        className="conv-card fade-up"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          overflow: "hidden",
          animationDelay: `${index * 0.07}s`,
          animationFillMode: "both",
        }}
      >
        {/* Topic image */}
        <div style={{ padding: "20px 24px 0" }}>
          <TopicImage slug={conv.slug} />
        </div>

        <div style={{ padding: "4px 24px 24px" }}>
          {/* Meta row */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
            <ModelBadge model={conv.model} />
            <TaskBadge task={conv.task} />
            <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>
              {conv.readTime} min
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display" style={{
            fontSize: "clamp(17px, 2vw, 21px)", fontWeight: 400,
            color: "var(--text-primary)", marginBottom: "10px", lineHeight: 1.25, letterSpacing: "-0.02em",
          }}>
            {conv.title}
          </h2>

          {/* Key insight — leads the card */}
          <blockquote style={{
            borderLeft: "2px solid var(--blue)",
            paddingLeft: "12px", margin: "0 0 16px",
          }}>
            <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65, fontStyle: "italic" }}>
              {conv.insight}
            </p>
          </blockquote>

          {/* One exchange preview */}
          <div style={{
            background: "rgba(0,0,0,0.25)", borderRadius: "8px",
            padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px",
          }}>
            {conv.messages.slice(0, 2).map((msg, i) => (
              <div key={i} style={{
                display: "flex", gap: "8px", alignItems: "flex-start",
                flexDirection: msg.role === "ai" ? "row-reverse" : "row",
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: msg.role === "human" ? "50%" : "4px",
                  background: msg.role === "human" ? "var(--blue)" : "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "9px", fontWeight: 700, flexShrink: 0,
                  color: msg.role === "human" ? "white" : "var(--text-muted)",
                  fontFamily: "JetBrains Mono, monospace",
                }} aria-hidden="true">
                  {msg.role === "human" ? "Q" : "AI"}
                </div>
                <p style={{
                  fontSize: "12px", lineHeight: 1.55, margin: 0,
                  color: msg.role === "human" ? "var(--text-body)" : "var(--text-muted)",
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <time dateTime={conv.date} style={{ fontSize: "12px", color: "var(--text-faint)", fontFamily: "JetBrains Mono, monospace" }}>
              {new Date(conv.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </time>
            <span style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }} aria-hidden="true">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
