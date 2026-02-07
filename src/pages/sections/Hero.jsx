import studentImg from "../../assets/images/student.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src={studentImg}
        alt="CS Academy students"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Nurturing Excellence in Every Child
          </h1>

          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            CS Academy delivers academic strength and holistic development
            through CBSE & IGCSE curricula, inspiring students to learn, grow,
            and lead.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-md bg-red-700 px-8 py-3 transition hover:bg-red-800">
              Learn More
            </button>

            <button className="rounded-md border border-white px-8 py-3 transition hover:bg-white hover:text-black">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
