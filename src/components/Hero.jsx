import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <section className="flex px-5 py-32 bg-secondary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-5xl">
          Hi, <br />I am Revathi
          <p className="text-2xl">I am a Full-Stack Developer</p>
        </h1>
        <div>
          <a href="#"></a>
        </div>
      </div>
      <img className="w-1/3" src={HeroImg}></img>
    </section>
  );
}
