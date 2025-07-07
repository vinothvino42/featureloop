import FeaturesChart from "@/features/projects/components/features-chart";
import StatsCard from "@/features/projects/components/stats-card";
import TopFeaturesList from "@/features/projects/components/top-features-list";

export default function ProjectDetailPage() {
  return (
    <main className="flex flex-col gap-4 py-4">
      <section className="grid grid-cols-4 gap-4">
        <StatsCard icon="eye" title="Views" value={256} color="red" />
        <StatsCard icon="box" title="Features" value={421} color="green" />
        <StatsCard
          icon="arrow-big-up-dash"
          title="Upvotes"
          value={157}
          color="blue"
        />
        <StatsCard icon="users" title="Users" value={83} color="orange" />
      </section>
      <FeaturesChart />
      <TopFeaturesList />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        accusantium quisquam quibusdam aperiam explicabo ratione ducimus
        deserunt officia qui sunt laudantium, voluptatem natus, ea quis
        asperiores suscipit commodi animi culpa!
      </p>
    </main>
  );
}
