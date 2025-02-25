export default function Contact() {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-secondary">
        <div className="flex justify-center">
          <h1 className="text-4xl border-primary text-white border-b-4 mb-5 w-[130px] font-bold">
            Resume
          </h1>

          <p className="pb-5">
            Hi here is my resume link, you can view my resume
            <a className="button" href="#">
              Download
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
