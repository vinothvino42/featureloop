"use client";

import { CardContainer } from "@/components/card-container";
import FeaturesList from "@/features/projects/components/features-list";
import FeaturesMenu from "@/features/projects/components/features-menu";
import { useParams } from "next/navigation";

export default function FeaturesPage() {
  const params = useParams();
  const projectId = params.projectId;
  console.log(projectId);

  return (
    <CardContainer className="mt-2 flex flex-col gap-2">
      <FeaturesMenu />
      <FeaturesList />
    </CardContainer>
  );
}
