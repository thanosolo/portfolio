import Link from "next/link";

export default function NavLinks() {
  const listItemStyle =
    "p-1 border-2 border-transparent hover:border-b-yellow-400";

  return (
    <nav className="fixed z-10 top-0 bg-black shadow-md bg-opacity-40 hover:bg-opacity-100 duration-500 h-16 flex items-center justify-center w-screen">
      <ul className="flex flex-row justify-center items-center gap-8 h-10">
        <li className={listItemStyle}>
          <Link href="#home">Home</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="#about">About</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
