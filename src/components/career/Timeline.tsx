import { TimelineItem } from "@/components/career/TimelineItem";
import type { CareerItem } from "@/types/career";

interface TimelineProps {
  items: CareerItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </ol>
  );
}
