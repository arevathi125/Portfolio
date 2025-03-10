import ResumeImg from "../assets/resume.png";

export default function Resume() {
  const config = {
    link: "https://docs.google.com/document/d/1PAWod2MjVA4qnjc5cpqHGthhZLQZCESF_9pbNb4of78/edit?tab=t.0#heading=h.ymi089liagec",
  };

  return (
    <>
      <section
        id="resume"
        className="flex flex-col md:flex-row bg-secondary px-5">
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
          <img className="w-[300px]" src={ResumeImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center px-5 py-142">
            <h1 className="text-4xl border-b-4 border-primary mb-5 text-white w-[130px] font-bold">
              Resume
            </h1>
            <div className="text-white">
              <p className="pb-5">
                Hi here is my resume link, you can view my resume
                <a className="button" href={config.link}>
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
