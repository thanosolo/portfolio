import About from "./_components/about";
import Portfolio from "./_components/(portfolio)/portfolio";
import Socials from "./_components/socials";

export default function Home() {
  return (
    <>
      <header className="bg-cover bg-center h-screen min-w-full bg-gradient-to-r from-p3-lightblue to-p3-darkblue">
        <div
          id="home"
          className="bg-black bg-opacity-40 h-screen min-w-full flex flex-col justify-center items-center"
        >
          <p>- Portfolio -</p>
          <h1>Thanos Dimitriades</h1>
          <h2>Software Engineer</h2>
          <Socials />
        </div>
      </header>
      <main className="flex flex-col items-center text-center justify-between gap-y-20 p-24">
        <About />
        <Portfolio />
      </main>
      <footer className="flex flex-row justify-center items-center h-20 bg-slate-600">
        <p>© 2023 Thanos Dimitriades. Made with ❤️, Next.js 14, TypeScript, and Tailwind.</p>
      </footer>
    </>
  );
}
