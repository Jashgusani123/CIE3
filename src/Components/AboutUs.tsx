const AboutUs = () => {
  return (
    <section className="bg-blue-100 flex flex-col justify-center items-center py-8" id="about-us">
      {/* Heading Section */}
      <section className="py-8 px-4 text-center text-black">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We’re a team of passionate individuals committed to excellence.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="py-8 px-4 w-full">
        <h2 className="text-3xl text-center mb-8 font-semibold">Meet Our Team</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-72 md:w-64 lg:w-60 xl:w-56 hover:scale-105 transition-transform">
            <img
              src="https://imgs.search.brave.com/x_gPBqPU7mKnqxDAKaE3FX_mqEQjHkaI8TXkEQmnygA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtaXNvbGF0/ZWQtYmFja2dyb3Vu/ZC1hdmF0YXItcHJv/ZmlsZS1waWN0dXJl/LW1hbl8xMjkzMjM5/LTQ4NjYuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-2 text-gray-500">
              John leads the company with a vision for innovation and excellence
              in every project.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-72 md:w-64 lg:w-60 xl:w-56 hover:scale-105 transition-transform">
            <img
              src="https://imgs.search.brave.com/x_gPBqPU7mKnqxDAKaE3FX_mqEQjHkaI8TXkEQmnygA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtaXNvbGF0/ZWQtYmFja2dyb3Vu/ZC1hdmF0YXItcHJv/ZmlsZS1waWN0dXJl/LW1hbl8xMjkzMjM5/LTQ4NjYuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="mt-2 text-gray-500">
              Jane is the technical mastermind behind our product development,
              ensuring quality at every step.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-72 md:w-64 lg:w-60 xl:w-56 hover:scale-105 transition-transform">
            <img
              src="https://imgs.search.brave.com/x_gPBqPU7mKnqxDAKaE3FX_mqEQjHkaI8TXkEQmnygA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtaXNvbGF0/ZWQtYmFja2dyb3Vu/ZC1hdmF0YXItcHJv/ZmlsZS1waWN0dXJl/LW1hbl8xMjkzMjM5/LTQ4NjYuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl">Alex Johnson</h3>
            <p className="text-gray-600">Designer</p>
            <p className="mt-2 text-gray-500">
              Alex brings a creative touch, ensuring our product is visually
              stunning and user-friendly.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
