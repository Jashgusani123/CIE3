import AboutUs from "./AboutUs";
import ContactUs from "./ContectUs";
import Footer from "./Footer";
import ServiceShow from "./Services";

const Home = () => {
  const services = [
    {
      image:
        "https://imgs.search.brave.com/yLW46hfoTdweGvoniCOZEjuBfA64pzFvho-yBu0R-3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTk5OTczMy9waG90/by93ZWItZGVzaWdu/LWRlc2t0b3AuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1k/R256U3JoVUdpalB1/WEhSM3ZBX2hyUXlz/aFRvdWRjSmM4QTUw/TDBhOUk9",
      title: "Web Development",
      description: "We create modern and responsive websites.",
    },
    {
      image:
        "https://imgs.search.brave.com/dHHCOP6AJA3ZcrlNLWMYFxukqpU0syWOoda_uaNT1q0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idWls/ZGZpcmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEw/LzIuNEAzeC0xMDI0/eDY2Mi5wbmc",
      title: "Mobile Development",
      description: "Custom mobile applications for your needs.",
    },
    {
      image:
        "https://imgs.search.brave.com/6LmYfo_myLn2yHLDMFk-C0qqAodb8-6jLD-OO65FAG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zZW8tcmVkLW1h/aW4td29yZC13aXRo/LWJsdWUtd29yZGNs/b3VkLWRpZ2l0YWwt/YmFja2dyb3VuZF8y/MjYyNjItMTE3OS5q/cGc_c2VtdD1haXNf/aHlicmlk",
      title: "SEO Optimization",
      description: "Improve your online presence with our SEO strategies.",
    },
  ];
  return (
    <>
      <section
        id="home"
        className="relative bg-[black] text-white h-[60%] flex items-center justify-center overflow-hidden rounded-[40px] shadow-2xl border-4 border-y-blue-40000 pt-[60px]"
      >
        {/* Decorative Background with Animated Circles */}
        <div className="absolute inset-0 z-0">
          {/* First Circle with Pulse Animation */}
          <div className="w-96 h-96 bg-[#6eacda] rounded-full blur-3xl opacity-50 animate-pulse animate-delay-[10s] absolute -top-10 -left-20"></div>

          {/* Second Circle with Bounce Animation only on larger screens */}
          <div className="w-80 h-80 bg-[#6eacda] rounded-full blur-3xl opacity-40 animate-bounce md:block hidden animate-delay-[10s] absolute bottom-10 right-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-8">
            Empowering you with the tools you need to succeed. Join us and
            explore the possibilities.
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
      </section>

      <AboutUs />
      <ServiceShow services={services} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
