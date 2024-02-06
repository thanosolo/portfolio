import PortfolioProject from "./portfolio-project";
import { Project } from "@/app/types";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`https://api.github.com/users/thanosolo/repos`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch github data");
  }
  return res.json();
}

export default async function Portfolio() {
  const projects: Project[] = (await getProjects()).filter((project) =>
    project.topics?.includes("portfolio-project")
  );

  const treeads: Project = {
    id: 1,
    name: "treeads",
    description: "A map for the coordination of reforestation after wildfires.",
    homepage: "https://treeads.app.squaredev.io/",
    image: "/projects/treeads.webp",
    topics: [
      "typescript",
      "react",
      "nextjs",
      "python",
      "fastapi",
      "mongodb",
      "google earth engine",
    ],
  };

  return (
    <div id="portfolio" className="flex flex-col gap-10 scroll-my-10">
      <h2>Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <PortfolioProject key={project.id} project={project} />
        ))}
        <PortfolioProject key="treeads" project={treeads} />
      </div>
    </div>
  );
}
