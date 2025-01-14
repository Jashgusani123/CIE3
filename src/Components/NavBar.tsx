import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex h-[10%] items-center justify-center bg-[#010911] sticky top-0 z-50">
        <nav className="h-full w-full flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="icon w-1/4 flex justify-center items-center text-2xl font-bold text-white">
            <Link to="/">Logo</Link>
          </div>

          {/* Options Section */}
          <div className="options flex flex-wrap justify-between items-center w-[60%] md:w-[50%] lg:w-[60%] space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full justify-around">
              <a href="#home" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Home</a>
              <a href="#about-us" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">About Us</a>
              <Link to="/projects" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Projects</Link>
              <a href="#services" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Services</a>
              <Link to="/blogs" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Blog</Link>
              <a href="#contact" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Contact</a>
              <button className="bg-[#6EACDA] text-white font-bold rounded-lg p-2 hover:bg-[#86bae2]" 
                  onClick={()=>scrollToSection("contact")}
                  >
                  Get in Touch
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex w-full justify-end items-center">
              <button
                className="text-white font-bold menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>

            {/* Mobile Navigation (Right to Left Sliding) */}
            <div
              className={`mobile-menu md:hidden w-[60%] h-full fixed top-0 right-0 bg-[#010911] z-50 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center space-y-4 mt-16">
              <a href="#home" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Home</a>
              <a href="#about-us" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">About Us</a>
              <Link to="/projects" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Projects</Link>
              <a href="#services" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Services</a>
              <Link to="/blogs" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Blog</Link>
              <a href="#contact" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Contact</a>
              <button className="bg-[#6EACDA] text-white font-bold rounded-lg p-2 hover:bg-[#86bae2]" 
                  onClick={()=>scrollToSection("contact")}
                  >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
