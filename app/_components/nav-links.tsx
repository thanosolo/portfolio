import Link from "next/link";

export default function NavLinks() {
  const listItemStyle =
    "p-1 border-2 border-transparent hover:border-b-green-400";

  return (
    <nav className="fixed z-10 top-0 bg-black bg-opacity-40 h-16 flex items-center justify-center w-screen">
      <ul className="flex flex-row justify-center items-center gap-8 h-10">
        <li className={listItemStyle}>
          <Link href="#home">Home</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="#about">About</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="#socials">Socials</Link>
        </li>
      </ul>
    </nav>
  );
}
