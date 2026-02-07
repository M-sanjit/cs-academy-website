import campusImg from "../../assets/images/campus.jpg";

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={campusImg}
            alt="CS Academy campus"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">About CS Academy</h2>

          <p className="mt-4 text-lg text-gray-700">
            Since 2009, CS Academy has stood for high-quality education grounded
            in character, creativity, and curiosity. Our campuses blend modern
            facilities with a nurturing environment that empowers students to
            excel academically and socially.
          </p>

          <button className="mt-6 rounded-md bg-red-700 px-6 py-2 text-white transition hover:bg-red-800">
            Our Vision & Mission
          </button>
        </div>
      </div>
    </section>
  );
}
