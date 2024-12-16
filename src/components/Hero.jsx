import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <section className="flex">
      <h1 className="w-1/2">
        Hi, <br />I am Revathi
        <p>I am a Full-Stack Developer</p>
      </h1>
      <img className="w-1/2" src={HeroImg}></img>
    </section>
  );
}
