import bandImg from "../assets/band.jpg";
import booksImg from "../assets/book-shelf.avif";

export default function Projects() {
  return (
    <section className="flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-1/2">
        <div className="flex justify-center">
          <h1 className="text-4xl border-secondary border-b-4 mb-5 w-[140px] font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex px-10 gap-5">
          <div className="relative">
            <img className="h-[200px]" src={bandImg} />
            <div className="project-desc">
              <p className="text-center py-5">Hi</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px]" src={booksImg} />
            <div className="project-desc">
              <p className="text-center py-5">Hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
