import AboutImg from "../assets/about.jpg";

export default function About() {
  const config = {
    line1:
      "Hi, My name is Revathi. I am a Full stack web developer. I built" +
      " beautiful websites with React.js, Springboot , Bootstrap and" +
      "Tailwind CSS.",
    line2:
      "I am proficient in skills like React js, Tailwind CSS, Angular" +
      "js, Bootstrap, Thymeleaf, Springboot, Postman API, Restful web" +
      "services, Node.js, Mysql workbench, Jenkins, Aws basics, Docker," +
      "Junit.",
  };

  return (
    <>
      <section id="about" className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-80 py-5">
          <img src={AboutImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center px-5 py-142">
            <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <div className="text-white">
              <p className="pb-5">{config.line1}</p>
              <p className="pb-5">{config.line2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
