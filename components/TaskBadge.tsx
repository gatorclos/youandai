import { TaskTag, TASK_LABELS } from "@/lib/data";

const TASK_COLORS: Record<TaskTag, string> = {
  engineering: "#4F6BF5", research: "#8B5CF6",
  strategy: "#06B6D4",    design: "#EC4899",
  writing: "#F0A500",     science: "#34D399",
};

export default function TaskBadge({ task }: { task: TaskTag }) {
  const color = TASK_COLORS[task];
  return (
    <span
      aria-label={`Category: ${TASK_LABELS[task]}`}
      style={{
        display: "inline-flex", alignItems: "center",
        padding: "3px 9px", borderRadius: "4px",
        fontSize: "10px", fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color, background: color + "14", border: `1px solid ${color}2e`,
      }}
    >
      {TASK_LABELS[task]}
    </span>
  );
}
