import ProjectItem from "./project-item";

export default function ProjectList() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3 p-3">
        <h1 className="font-semibold">Projects</h1>
        <div className="grid gap-4 py-8 sm:grid-cols-2 xl:grid-cols-3">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}
