import bandImg from "../assets/band.jpg";
import booksImg from "../assets/book-shelf.avif";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-secondary border-b-4 mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best and current projects. I have built these
            with Springboot, React, Mysql, Tailwind, Bootstrap. Please check
            them out.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={bandImg} />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                This is my Capstone project in Launchcode Program.Built with
                Springboot, React, Mysql.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={booksImg} />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                This is my current project.Built with Springboot, React, Mysql.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
