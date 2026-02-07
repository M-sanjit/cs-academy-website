export default function Academics() {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academics
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A balanced curriculum designed to build strong foundations, critical
            thinking, and global competence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">
              CBSE Curriculum
            </h3>
            <p className="mt-4 text-gray-700">
              Our CBSE programme focuses on academic excellence, conceptual
              clarity, and holistic development aligned with national standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">
              IGCSE Curriculum
            </h3>
            <p className="mt-4 text-gray-700">
              The Cambridge IGCSE curriculum encourages inquiry-based learning,
              global perspectives, and independent thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
