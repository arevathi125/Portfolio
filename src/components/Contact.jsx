export default function Contact() {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-80 py-5" flex justify-end>
          <img className="w-[300px]" src={ResumeImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center px-5 py-142">
            <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[130px] font-bold">
              Resume
            </h1>
            <div className="text-white">
              <p className="pb-5">
                Hi here is my resume link, you can view my resume
                <a className="button" href="#">
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
