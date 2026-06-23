import { TaskTag, TASK_LABELS } from "@/lib/data";

const TASK_COLORS: Record<TaskTag, string> = {
  engineering: "#5B6EF5",
  research:    "#8B5CF6",
  strategy:    "#06B6D4",
  design:      "#EC4899",
  writing:     "#F59E0B",
  science:     "#10B981",
};

export default function TaskBadge({ task }: { task: TaskTag }) {
  const color = TASK_COLORS[task];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 9px",
      borderRadius: "4px",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: color,
      background: color + "14",
      border: `1px solid ${color}30`,
    }}>
      {TASK_LABELS[task]}
    </span>
  );
}
