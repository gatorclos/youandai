import { ModelTag, MODEL_COLORS, MODEL_LABELS } from "@/lib/data";

export default function ModelBadge({ model }: { model: ModelTag }) {
  const color = MODEL_COLORS[model];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      fontFamily: "JetBrains Mono, monospace",
      color: color,
      background: color + "18",
      border: `1px solid ${color}44`,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block" }} />
      {MODEL_LABELS[model]}
    </span>
  );
}
