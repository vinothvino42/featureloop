import { DynamicIcon, IconName } from "lucide-react/dynamic";

type Color = "red" | "green" | "blue" | "orange";

interface StatsCardProp {
  icon: IconName;
  title: string;
  value: number;
  color: Color;
}

export default function StatsCard({
  icon,
  title,
  value,
  color,
}: StatsCardProp) {
  return (
    <div className="flex items-center justify-start gap-2 rounded-md bg-white px-6 py-4 shadow-2xs">
      <div className={`rounded-full p-4 bg-${color}-300/10`}>
        <DynamicIcon name={icon} color={color} size={22} />
      </div>
      <div className="flex flex-col items-start justify-start pl-2">
        <p className="text-muted-foreground text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
