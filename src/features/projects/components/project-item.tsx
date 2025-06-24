"use client";

import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function ProjectItem() {
  const router = useRouter();

  function projectDetailClicked() {
    router.push("/projects/1");
  }

  return (
    <Card
      className="flex flex-col justify-between gap-12 p-6 hover:cursor-pointer hover:bg-gray-100"
      onClick={projectDetailClicked}
    >
      <div>
        <h3 className="text-2xl font-medium">Yoga Streaks</h3>
        <p className="text-xs text-gray-500">yoga-streaks-18234</p>
      </div>
      <p className="line-clamp-3">Platform Icon</p>
    </Card>
  );
}
