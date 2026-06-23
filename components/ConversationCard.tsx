import Link from "next/link";
import { Conversation } from "@/lib/data";
import ModelBadge from "./ModelBadge";
import TaskBadge from "./TaskBadge";

export default function ConversationCard({ conv, index }: { conv: Conversation; index: number }) {
  return (
    <Link href={`/conversation/${conv.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        className="conv-card fade-up"
        style={{
          background: "var(--navy-card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "28px 32px",
          cursor: "pointer",
          animationDelay: `${index * 0.08}s`,
          animationFillMode: "both",
        }}
      >
        {/* Tags row */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
          <ModelBadge model={conv.model} />
          <TaskBadge task={conv.task} />
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--slate)", fontFamily: "JetBrains Mono, monospace" }}>
            {conv.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "DM Serif Display, serif",
          fontSize: "clamp(18px, 2vw, 22px)",
          fontWeight: 400,
          color: "var(--off-white)",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}>
          {conv.title}
        </h2>

        {/* Summary */}
        <p style={{ fontSize: "14px", color: "var(--slate)", lineHeight: 1.7, marginBottom: "20px" }}>
          {conv.summary}
        </p>

        {/* Mini conversation preview */}
        <div style={{
          background: "rgba(0,0,0,0.2)",
          borderRadius: "8px",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "20px",
        }}>
          {conv.messages.slice(0, 2).map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              flexDirection: msg.role === "ai" ? "row-reverse" : "row",
            }}>
              <div style={{
                width: "22px",
                height: "22px",
                borderRadius: msg.role === "human" ? "50%" : "4px",
                background: msg.role === "human" ? "var(--periwinkle)" : "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: 700,
                color: msg.role === "human" ? "white" : "var(--slate)",
                flexShrink: 0,
              }}>
                {msg.role === "human" ? "Y" : "AI"}
              </div>
              <div style={{
                fontSize: "12px",
                color: msg.role === "human" ? "rgba(255,255,255,0.8)" : "var(--slate)",
                lineHeight: 1.5,
                maxWidth: "85%",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div style={{
          borderLeft: "2px solid var(--periwinkle)",
          paddingLeft: "14px",
        }}>
          <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--periwinkle)", textTransform: "uppercase", marginBottom: "4px" }}>
            Key insight
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", lineHeight: 1.6, fontStyle: "italic" }}>
            {conv.insight}
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "11px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace" }}>
            {new Date(conv.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span style={{ fontSize: "12px", color: "var(--periwinkle)", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
            Read conversation →
          </span>
        </div>
      </article>
    </Link>
  );
}
