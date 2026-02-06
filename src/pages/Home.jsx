import studentImg from "../assets/images/student.jpg";
import campusImg from "../assets/images/campus.jpg";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <img
          src={studentImg}
          alt="Students"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nurturing Excellence in Every Child
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              CS Academy delivers academic strength and holistic development
              through CBSE & IGCSE curricula, inspiring students to learn, grow,
              and lead.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="px-8 py-3 bg-red-700 hover:bg-red-800 rounded-md transition">
                Learn More
              </button>

              <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-md transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / CAMPUS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={campusImg}
              alt="Campus"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              About CS Academy
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Since 2009, CS Academy has stood for high-quality education
              grounded in character, creativity, and curiosity. Our campuses
              blend modern facilities with a nurturing environment that empowers
              students to excel academically and socially.
            </p>

            <button className="mt-6 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition">
              Our Vision & Mission
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
