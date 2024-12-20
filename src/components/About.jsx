import AboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <>
      <section className="flex bg-secondary">
        <div>
          <img src={AboutImg} />
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl border-[rgb(85, 81, 227)] text-white border-b-4 mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <p className="text-white">Information about myself</p>
          </div>
        </div>
      </section>
    </>
  );
}
