import HeroImg from "../assets/Hero.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="flex px-5 py-32 bg-secondary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-5xl">
          Hi, <br />I am Revathi
          <p className="text-2xl">I am a Full-Stack Developer</p>
        </h1>
        <div className="flex py-7">
          <a href="#" className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href="#" className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg}></img>
    </section>
  );
}
