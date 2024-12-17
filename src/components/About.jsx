import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <>
      <section>
        <div>
          <img src={AboutImg} />
        </div>
        <div>
          <h1>About Me</h1>
          <p>Information about myself</p>
        </div>
      </section>
    </>
  );
}
