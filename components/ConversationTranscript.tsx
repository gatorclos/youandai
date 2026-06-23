"use client";

import { Message, DebateRound } from "@/lib/data";

const DEBATE_TYPE_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  support:   { label: "SUPPORTS",         color: "#6ab86a", bg: "rgba(74,124,74,0.15)" },
  challenge: { label: "CHALLENGES",       color: "#b86a6a", bg: "rgba(124,74,74,0.15)" },
  nuance:    { label: "ADDS NUANCE",      color: "#7a9adc", bg: "rgba(74,90,140,0.15)" },
  reframe:   { label: "REFRAMES",         color: "#aa7acc", bg: "rgba(106,74,124,0.15)" },
  concede:   { label: "CONCEDES",         color: "#ccaa4a", bg: "rgba(124,106,42,0.15)" },
  synthesis: { label: "SYNTHESIZES",      color: "#4aaabb", bg: "rgba(42,106,124,0.15)" },
  addition:  { label: "ADDS TO CONSENSUS",color: "#9a6acc", bg: "rgba(90,42,124,0.15)" },
  consensus: { label: "CONSENSUS",        color: "#4aaa4a", bg: "rgba(10,80,10,0.2)"   },
  dissent:   { label: "DISSENT",          color: "#cc7a00", bg: "rgba(80,40,0,0.2)"    },
};

function MessageBubble({ msg, i }: { msg: Message; i: number }) {
  if (msg.role === "expert") {
    const ts = DEBATE_TYPE_STYLES[msg.debateType ?? "nuance"] ?? DEBATE_TYPE_STYLES.nuance;
    return (
      <div id={`msg-${i}`} style={{
        display: "flex", gap: "12px", alignItems: "flex-start",
        scrollMarginTop: "80px",
      }}>
        {/* Avatar */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: (msg.speakerColor ?? "#5B6EF5") + "22",
          border: `2px solid ${msg.speakerColor ?? "#5B6EF5"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "10px", fontWeight: 700, color: msg.speakerColor ?? "#5B6EF5",
          fontFamily: "JetBrains Mono, monospace",
        }}>
          {msg.speakerInitials ?? "??"}
        </div>

        <div style={{ flex: 1 }}>
          {/* Name + badge row */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#e0e0e0" }}>
              {msg.speaker}
            </span>
            <span style={{
              fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em",
              color: ts.color, background: ts.bg,
              padding: "2px 7px", borderRadius: "3px", textTransform: "uppercase",
            }}>
              {ts.label}
            </span>
          </div>
          {/* Text */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid rgba(255,255,255,0.07)`,
            borderRadius: "4px 12px 12px 12px",
            padding: "12px 16px",
            fontSize: "14px", lineHeight: 1.75, color: "var(--slate)",
            whiteSpace: "pre-line",
          }}>
            {msg.text}
          </div>
        </div>
      </div>
    );
  }

  // Human / AI bubble
  return (
    <div id={`msg-${i}`} style={{
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
      flexDirection: msg.role === "ai" ? "row-reverse" : "row",
      scrollMarginTop: "80px",
    }}>
      <div style={{
        width: "32px", height: "32px",
        borderRadius: msg.role === "human" ? "50%" : "6px",
        background: msg.role === "human" ? "var(--periwinkle)" : "rgba(255,255,255,0.07)",
        border: msg.role === "ai" ? "1px solid rgba(255,255,255,0.1)" : "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "11px", fontWeight: 700,
        color: msg.role === "human" ? "white" : "var(--slate)",
        flexShrink: 0,
        fontFamily: "JetBrains Mono, monospace",
      }}>
        {msg.role === "human" ? "Q" : "AI"}
      </div>
      <div
        className={msg.role === "human" ? "bubble-human" : "bubble-ai"}
        style={{
          padding: "14px 18px", maxWidth: "88%",
          lineHeight: 1.75, fontSize: "15px", whiteSpace: "pre-line",
          color: msg.role === "human" ? "rgba(255,255,255,0.9)" : "var(--slate)",
        }}
      >
        {msg.text}
      </div>
    </div>
  );
}

export default function ConversationTranscript({
  messages,
  debateRounds,
}: {
  messages: Message[];
  debateRounds?: DebateRound[];
}) {
  return (
    <>
      {/* Main conversation */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} i={i} />
        ))}
      </div>

      {/* Expert panel debate rounds */}
      {debateRounds && debateRounds.length > 0 && (
        <div style={{ marginTop: "56px" }}>
          {/* Section header */}
          <div style={{
            display: "flex", alignItems: "center", gap: "16px",
            marginBottom: "32px", paddingBottom: "16px",
            borderBottom: "1px solid var(--border)",
          }}>
            <div>
              <div style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
                color: "var(--periwinkle)", textTransform: "uppercase", marginBottom: "4px",
              }}>
                EXPERT PANEL — STRESS TEST
              </div>
              <div style={{ fontSize: "18px", fontFamily: "DM Serif Display, serif", color: "var(--off-white)" }}>
                10 scientists debate the framework across {debateRounds.length} rounds
              </div>
            </div>
          </div>

          {/* Rounds */}
          {debateRounds.map((round, ri) => (
            <div key={ri} style={{ marginBottom: "48px" }}>
              {/* Round label */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                marginBottom: "20px",
              }}>
                <div style={{
                  padding: "4px 10px", borderRadius: "4px",
                  background: "rgba(91,110,245,0.1)",
                  border: "1px solid rgba(91,110,245,0.2)",
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                  color: "var(--periwinkle)", textTransform: "uppercase",
                  fontFamily: "JetBrains Mono, monospace", flexShrink: 0,
                }}>
                  Round {ri + 1}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#ccc" }}>
                  {round.title}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {round.messages.map((msg, mi) => (
                  <MessageBubble key={mi} msg={msg} i={mi} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
