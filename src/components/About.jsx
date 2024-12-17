import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <>
      <section className="flex bg-primary">
        <div>
          <img src={AboutImg} />
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl border-[#2b2d77] text-white border-b-4 mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <p className="text-white">Information about myself</p>
          </div>
        </div>
      </section>
    </>
  );
}
