import HeroImg from "../assets/hero.jpg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  const config = {
    role: "I am a Java Full-Stack Developer / SDET",
    social: {
      linkedin: "https://www.linkedin.com/in/revathi-anbazhagan-196786277/",
      github: "https://github.com/arevathi125",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-white text-5xl">
          Hi, <br />I am Revathi
          <p className="text-2xl">{config.role}</p>
        </h1>
        <div className="flex py-7">
          <a href={config.social.github} className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.linkedin} className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg}></img>
    </section>
  );
}
