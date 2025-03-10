export default function Contact() {
  const config = {
    email: "arevathi125@gmail.com",
    phone: " +1 636-312-7473",
  };

  return (
    <>
      <section id="contact" className="flex flex-col bg-primary px-5 py-25">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-4xl border-secondary border-b-4 mb-5 w-[130px] font-bold">
            Contact
          </h1>
          <p className="pb-5">
            If you want to discuss more in detail, please contact me
          </p>
          <p className="py-2">
            <span className="font-bold">Email: </span> {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone: </span> {config.phone}
          </p>
        </div>
      </section>
    </>
  );
}
