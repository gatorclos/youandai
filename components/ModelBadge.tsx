import { ModelTag, MODEL_COLORS, MODEL_LABELS } from "@/lib/data";

export default function ModelBadge({ model }: { model: ModelTag }) {
  const color = MODEL_COLORS[model];
  return (
    <span
      role="img"
      aria-label={`Model: ${MODEL_LABELS[model]}`}
      style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        padding: "3px 10px", borderRadius: "999px",
        fontSize: "11px", fontWeight: 600, letterSpacing: "0.03em",
        fontFamily: "JetBrains Mono, monospace",
        color, background: color + "16", border: `1px solid ${color}38`,
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }} aria-hidden="true"/>
      {MODEL_LABELS[model]}
    </span>
  );
}
