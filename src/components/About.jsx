import AboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <>
      <section className="flex bg-secondary">
        <div>
          <img className="w-80" src={AboutImg} />
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col justify-center px-5 py-142">
            <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <div className="text-white">
              <p className="pb-5">
                Hi, My name is Revathi. I am a Full stack web developer. I built
                beautiful websites with React.js, Springboot and Tailwind CSS.
              </p>
              <p className="pb-5">
                I am proficient in skills like React js, Tailwind CSS, Angular
                js, Bootstrap, Thymeleaf, Springboot, Postman API, Restful web
                services, Node.js, Mysql workbench, Jenkins, Aws basics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
