import Link from "next/link";
import { Project } from "@/app/types";
import Image from "next/image";

const images = ["portfolio"];


export default function PortfolioProject({ project }: { project: Project }) {
  let {
    name,
    image,
    topics,
    homepage,
    description,
    html_url: githubUrl,
  } = project;

  // #TODO needs a better way to handle image (fs?)
  if (images.includes(name)) {
    image = `/projects/${name}.webp`;
  }

  topics = topics?.filter((topic) => topic !== "portfolio-project");
  const tagsStyle =
    "bg-slate-500 hover:bg-slate-700 text-white font-bold p-1 text-sm rounded-md";
  const buttonStyle =
    "bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md";

  return (
    <div className="flex flex-col justify-between bg-slate-800 rounded-lg border-4 border-white-500">
      <div>

      <div className="bg-sky-700 flex flex-col justify-start items-center">
        <h3>{name}</h3>
      </div>
      {image !== undefined ? (
        <div className="w-auto h-52 relative">
          <Image
            src={image}
            alt={`Picture of ${name} project`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        <div className="w-auto h-52 relative flex justify-center items-center bg-slate-950"><p>No Image Available</p></div>
      )}
      </div>
      <p>{description}</p>
      <ul className="flex flex-row gap-2 p-2 flex-wrap">
        {topics?.map((topic) => (
          <li key={topic} className={tagsStyle}>
            {topic === "portfolio-project" ? null : topic}
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-between p-2">
        {githubUrl !== undefined && (
          <button className={buttonStyle}>
            <Link href={githubUrl} target="_blank">
              Github
            </Link>
          </button>
        )}
        {homepage !== undefined && homepage !== "" && (
          <button className={buttonStyle}>
            <Link href={homepage} target="_blank">
              Live
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}
