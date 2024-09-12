import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-start">
      <main className="flex flex-col items-center w-fit h-fit pt-[10vh]">
        <h1 className="font-bold text-4xl my-6">Welcome, User !</h1>
        <section className="flex flex-col items-center my-4">
          <h1 className="text-2xl mb-4">Shorten URL</h1>
          <form className="flex flex-row justify-center items-center rounded-full overflow-hidden w-fit h-fit">
            <input className="py-2 px-4 text-lg h-full bg-background-light" type="text" placeholder="Paste your link here" />
            <button className="px-4 py-2 h-full text-lg bg-primary">Shorten</button>
          </form>
        </section>
        <hr className="h-[2px] my-12 border-none w-[90vw] max-w-[600px] bg-background-light" />
        <section className="flex flex-col items-center max-w-[600px] w-[90vw]">
        <h1 className="text-2xl mb-4">My Links</h1>
          <ul className="w-full flex flex-col items-start justify-start">
            <LinkCard
              clicks={5}
              lastUse="10 minutes ago"
              slug="Gq9Az45f6s"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
