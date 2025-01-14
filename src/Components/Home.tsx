import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <>
      <div className="relative bg-[#03346E] text-white h-[60%] flex items-center justify-center overflow-hidden rounded-[40px] shadow-2xl border-4 border-y-blue-40000">
        {/* Decorative Background with Animated Circles */}
        <div className="absolute inset-0 z-0">
          {/* First Circle with Pulse Animation */}
          <div className="w-96 h-96 bg-[#6eacda] rounded-full blur-3xl opacity-50 animate-pulse animate-delay-[10s] absolute -top-10 -left-20"></div>

          {/* Second Circle with Bounce Animation */}
          <div className="w-80 h-80 bg-[#6eacda] rounded-full blur-3xl opacity-40 animate-bounce animate-delay-[10s] absolute bottom-10 right-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-8">
            Empowering you with the tools you need to succeed. Join us and explore the possibilities.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <AboutUs />
      </>
  );
};

export default Home;
