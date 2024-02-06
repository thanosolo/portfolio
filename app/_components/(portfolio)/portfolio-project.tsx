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
    "bg-slate-500 duration-500 hover:bg-slate-700 text-white font-bold px-2 py-1 text-sm rounded-md";
  const buttonStyle =
    "bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md duration-500";

  return (
    <div className="project bg-cover h-fit sm:w-fit md:w-1/3 lg:w-1/5 bg-project-back text-project-front border-project-front hover:shadow-2xl duration-500 border-4 rounded-md bg-center max-w-2xl flex flex-col m-10 justify-around">
      <div>

      <div className="flex flex-col justify-start items-center">
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
      <ul className="flex flex-row gap-2 p-2 justify-center flex-wrap">
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
