import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <section className="flex px-5 py-32 bg-secondary justify-center">
      <h1 className="md:w-1/2 text-white text-4xl">
        Hi, <br />I am Revathi
        <p className="text-2xl">I am a Full-Stack Developer</p>
      </h1>
      <img className="w-1/3" src={HeroImg}></img>
    </section>
  );
}
