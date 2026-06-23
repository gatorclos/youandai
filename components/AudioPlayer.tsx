"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Message, DebateRound, EXPERT_VOICE_PROFILES } from "@/lib/data";

interface Props {
  messages: Message[];
  debateRounds?: DebateRound[];
  slug: string;
}

type Mode = "conversation" | "debate";

const ROLE_PROFILES = {
  human: { pitch: 1.1,  rate: 1.05 },
  ai:    { pitch: 0.88, rate: 0.92 },
};

// Flatten debate rounds into a single message list for sequential playback
function flattenDebate(rounds: DebateRound[]): Message[] {
  return rounds.flatMap(r => r.messages);
}

export default function AudioPlayer({ messages, debateRounds, slug }: Props) {
  const synthRef   = useRef<SpeechSynthesis | null>(null);
  const playingRef = useRef(false);
  const cursorRef  = useRef(0);
  const voicesRef  = useRef<SpeechSynthesisVoice[]>([]);

  const [supported,   setSupported]   = useState(false);
  const [voicesReady, setVoicesReady] = useState(false);
  const [mode,        setMode]        = useState<Mode>("conversation");
  const [playing,     setPlaying]     = useState(false);
  const [activeIdx,   setActiveIdx]   = useState<number | null>(null);
  const [cursor,      setCursor]      = useState(0);
  const [speed,       setSpeed]       = useState(1.0);
  const speedRef = useRef(1.0); // ref so speakAt callbacks always read current value

  const hasDebate = !!debateRounds?.length;
  const isTargetPost = slug === "ai-detection-biological-constraints";

  // Active message list based on mode
  const activeMessages = mode === "debate" && debateRounds
    ? flattenDebate(debateRounds)
    : messages;

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    synthRef.current = window.speechSynthesis;
    setSupported(true);
    const load = () => {
      const v = synthRef.current!.getVoices();
      if (v.length > 0) { voicesRef.current = v; setVoicesReady(true); }
    };
    load();
    synthRef.current.addEventListener("voiceschanged", load);
    return () => synthRef.current?.removeEventListener("voiceschanged", load);
  }, []);

  // Reset cursor when mode switches
  useEffect(() => {
    synthRef.current?.cancel();
    setPlaying(false);
    playingRef.current = false;
    setCursor(0);
    cursorRef.current = 0;
    setActiveIdx(null);
  }, [mode]);

  const getVoice = useCallback((msg: Message): SpeechSynthesisVoice | null => {
    const en = voicesRef.current.filter(v => v.lang.startsWith("en"));
    if (!en.length) return null;

    if (msg.role === "expert" && msg.speaker) {
      // Assign a stable voice index per scientist name
      const experts = Object.keys(EXPERT_VOICE_PROFILES);
      const idx = experts.indexOf(msg.speaker);
      return en[idx >= 0 ? idx % en.length : 0];
    }
    // human vs ai
    return msg.role === "human" ? en[0] : en[Math.min(1, en.length - 1)];
  }, []);

  const getPitch = useCallback((msg: Message): number => {
    if (msg.role === "expert" && msg.speaker) {
      return EXPERT_VOICE_PROFILES[msg.speaker]?.pitch ?? 1.0;
    }
    return ROLE_PROFILES[msg.role as "human" | "ai"]?.pitch ?? 1.0;
  }, []);

  const getRate = useCallback((msg: Message): number => {
    if (msg.role === "expert" && msg.speaker) {
      return EXPERT_VOICE_PROFILES[msg.speaker]?.rate ?? 1.0;
    }
    return ROLE_PROFILES[msg.role as "human" | "ai"]?.rate ?? 1.0;
  }, []);

  const speakAt = useCallback((idx: number, msgs: Message[]) => {
    if (!playingRef.current || idx >= msgs.length) {
      setPlaying(false);
      playingRef.current = false;
      setActiveIdx(null);
      return;
    }

    const msg = msgs[idx];
    synthRef.current?.cancel();

    // Prefix expert name so listeners know who is speaking
    const prefix = msg.role === "expert" && msg.speaker ? `${msg.speaker} says. ` : "";
    const utt = new SpeechSynthesisUtterance(prefix + msg.text);
    utt.voice  = getVoice(msg);
    utt.pitch  = getPitch(msg);
    utt.rate   = getRate(msg) * speedRef.current; // per-speaker rate × global multiplier
    utt.volume = 1;

    utt.onstart = () => {
      setActiveIdx(idx);
      setCursor(idx);
      cursorRef.current = idx;
    };
    utt.onend = () => {
      setTimeout(() => {
        if (playingRef.current) speakAt(idx + 1, msgs);
      }, 450);
    };
    utt.onerror = () => {
      setPlaying(false);
      playingRef.current = false;
      setActiveIdx(null);
    };

    synthRef.current?.speak(utt);
  }, [getVoice, getPitch, getRate]);

  // Must be called from click handler (user gesture)
  const handlePlay = () => {
    setPlaying(true);
    playingRef.current = true;
    speakAt(cursorRef.current, activeMessages);
  };

  const handlePause = () => {
    synthRef.current?.cancel();
    setPlaying(false);
    playingRef.current = false;
    setActiveIdx(null);
  };

  const handleRestart = () => {
    synthRef.current?.cancel();
    setCursor(0);
    cursorRef.current = 0;
    setActiveIdx(null);
    setPlaying(true);
    playingRef.current = true;
    setTimeout(() => speakAt(0, activeMessages), 0);
  };

  const handleModeSwitch = (newMode: Mode) => {
    setMode(newMode); // useEffect will reset state
  };

  const handleSpeedChange = (newSpeed: number) => {
    speedRef.current = newSpeed;
    setSpeed(newSpeed);
    // If currently playing, restart current message at new speed
    if (playing && cursorRef.current !== null) {
      synthRef.current?.cancel();
      setTimeout(() => {
        if (playingRef.current) speakAt(cursorRef.current, activeMessages);
      }, 0);
    }
  };

  if (!supported || !isTargetPost) return null;

  const total = activeMessages.length;
  const pct   = total ? Math.round((cursor / total) * 100) : 0;
  const activeMsg = activeIdx !== null ? activeMessages[activeIdx] : null;

  const speakerLabel = activeMsg
    ? activeMsg.role === "expert"
      ? activeMsg.speaker ?? "Expert"
      : activeMsg.role === "human" ? "You" : "AI"
    : null;

  return (
    <div style={{
      margin: "28px 0 0",
      background: "rgba(91,110,245,0.05)",
      border: "1px solid rgba(91,110,245,0.18)",
      borderRadius: "12px",
      overflow: "hidden",
    }}>
      {/* Mode tabs — only show if debate data exists */}
      {hasDebate && (
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {(["conversation", "debate"] as Mode[]).map(m => (
            <button key={m} onClick={() => handleModeSwitch(m)} style={{
              flex: 1,
              padding: "10px 0",
              background: mode === m ? "rgba(91,110,245,0.12)" : "transparent",
              border: "none",
              borderBottom: mode === m ? "2px solid var(--periwinkle)" : "2px solid transparent",
              color: mode === m ? "var(--off-white)" : "var(--slate)",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: mode === m ? 600 : 400,
              letterSpacing: "0.04em",
              transition: "all 0.15s",
            }}>
              {m === "conversation" ? "🔊 Conversation" : "🎙 Expert Panel Debate"}
            </button>
          ))}
        </div>
      )}

      {/* Player bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", flexWrap: "wrap" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(91,110,245,0.15)",
          border: "1px solid rgba(91,110,245,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", flexShrink: 0,
        }}>
          {mode === "debate" ? "🎙" : "🔊"}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--off-white)" }}>
            {mode === "debate"
              ? `Listen to the expert panel (${total} statements · 10 scientists)`
              : "Listen to this conversation"}
          </div>
          <div style={{ fontSize: "11px", color: "#4A5568", marginTop: "2px" }}>
            {voicesReady
              ? mode === "debate"
                ? "Each scientist speaks in a distinct voice"
                : "Two voices · human and AI"
              : "Loading voices…"}
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {!playing ? (
            <button onClick={handlePlay} style={{
              background: "var(--periwinkle)", border: "none",
              borderRadius: "7px", padding: "8px 16px",
              color: "white", cursor: "pointer", fontSize: "13px", fontWeight: 600,
            }}>▶ Play</button>
          ) : (
            <button onClick={handlePause} style={{
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "7px", padding: "7px 14px",
              color: "var(--off-white)", cursor: "pointer", fontSize: "13px", fontWeight: 600,
            }}>⏸ Pause</button>
          )}
          {cursor > 0 && (
            <button onClick={handleRestart} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "7px", padding: "7px 12px",
              color: "#4A5568", cursor: "pointer", fontSize: "12px",
            }}>↺</button>
          )}

          {/* Speed selector */}
          <div style={{ display: "flex", gap: "3px", alignItems: "center", marginLeft: "4px" }}>
            {([0.75, 1.0, 1.25, 1.5, 2.0] as const).map(s => (
              <button
                key={s}
                onClick={() => handleSpeedChange(s)}
                style={{
                  background: speed === s ? "rgba(91,110,245,0.25)" : "transparent",
                  border: `1px solid ${speed === s ? "rgba(91,110,245,0.5)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "5px",
                  padding: "4px 7px",
                  color: speed === s ? "var(--periwinkle)" : "#4A5568",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: speed === s ? 700 : 400,
                  fontFamily: "JetBrains Mono, monospace",
                  transition: "all 0.15s",
                  lineHeight: 1,
                }}
              >
                {s === 1.0 ? "1×" : `${s}×`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ padding: "0 18px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <span style={{ fontSize: "10px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace" }}>
            {activeMsg && speakerLabel
              ? <span style={{ color: activeMsg.speakerColor ?? "var(--periwinkle)" }}>
                  {speakerLabel} speaking…
                </span>
              : `${cursor} / ${total}`}
          </span>
          <span style={{ fontSize: "10px", color: "#4A5568", fontFamily: "JetBrains Mono, monospace" }}>{pct}%</span>
        </div>
        <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
          <div style={{
            height: "100%", borderRadius: 2,
            background: activeMsg?.speakerColor
              ? `linear-gradient(90deg, ${activeMsg.speakerColor}, var(--periwinkle))`
              : "linear-gradient(90deg, var(--periwinkle), #8B5CF6)",
            width: `${pct}%`, transition: "width 0.4s",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes audioPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
