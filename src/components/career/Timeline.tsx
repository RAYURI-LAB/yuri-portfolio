import { TimelineItem } from "@/components/career/TimelineItem";
import type { CareerItem } from "@/types/career";

interface TimelineProps {
  items: CareerItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="space-y-6 md:space-y-8">
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </ol>
  );
}
