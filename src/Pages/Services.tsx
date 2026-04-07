
function Services() {
  return (
    <section className="w-full h-full mt-20">
      <h2 className="text-2xl font-bold text-center underline">Our Services</h2>
      <div className="flex flex-col justify-center items-center ">
        <div className="border-2 md:w-1/2 border-black rounded-xl m-6 p-4 shadow-xl shadow-gray-400 hover:border-sky-400 hover:shadow-sky-400">
          <h3 className="text-xl font-bold text-center m-2 ">
            Lighting Installation
          </h3>
          <p className="text-justify p-4">
            We provide complete lighting installation services for residential,
            commercial, and outdoor spaces. Our team ensures safe, efficient,
            and high-quality setup for all types of lighting systems, including
            ceiling lights, wall lights, garden lights, and decorative fixtures.
            From planning and wiring to final installation, we handle every step
            with precision to deliver a clean and modern finish. We also ensure
            proper placement to enhance brightness, ambiance, and energy
            efficiency in your space.
          </p>
        </div>
        <div className="border-2 md:w-1/2 border-black rounded-xl m-6 p-4 shadow-xl shadow-gray-400 hover:border-sky-400 hover:shadow-sky-400">
          <h3 className="text-xl font-bold text-center m-2 ">
            Maintenance & Repair
          </h3>
          <p className="text-justify p-4">
            We offer reliable maintenance and repair services to keep your
            lighting systems working perfectly at all times. Whether it’s
            replacing damaged bulbs, fixing wiring issues, or upgrading outdated
            fixtures, our team provides quick and effective solutions. Regular
            maintenance helps prevent unexpected problems and extends the
            lifespan of your lighting system. We focus on safety, performance,
            and long-term reliability so you can enjoy worry-free lighting every
            day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services