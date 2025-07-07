"use client";

import { Button } from "@/components/ui/button";

interface TabButtonProps {
  isActive: boolean;
  title: string;
}

const tabs = [
  { title: "All", isActive: true },
  { title: "Pending", isActive: false },
  { title: "Approved", isActive: false },
  { title: "In Progress", isActive: false },
  { title: "Completed", isActive: false },
  { title: "Rejected", isActive: false },
];

export default function FeaturesMenu() {
  return (
    <menu className="flex list-none gap-2">
      {tabs.map((tab) => (
        <TabButton key={tab.title} title={tab.title} isActive={tab.isActive} />
      ))}
    </menu>
  );
}

function TabButton({ isActive, title }: TabButtonProps) {
  return (
    <li>
      <Button
        variant={isActive ? "default" : "outline"}
        className="rounded-3xl"
      >
        {title}
      </Button>
    </li>
  );
}
