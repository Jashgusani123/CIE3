const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          {/* Footer Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Logo and Introduction */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3">
                {/* Add your Logo here */}
                {/* <img src="/path/to/logo.png" alt="Logo" className="h-10" /> */}
                <span className="text-2xl font-bold">Logo</span>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                Welcome to our website! We are committed to providing the best service and experience for our users. Feel free to explore and get in touch!
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            {/* Thank You Message */}
            <div className="col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Thank You for Visiting!</h3>
              <p className="text-lg text-gray-300">
                We appreciate your time and interest in our website. We hope you had a great experience, and we look forward to connecting with you soon!
              </p>
            </div>
          </div>
  
          {/* Social Media Icons in Row */}
          <div className="flex justify-center space-x-6 mt-8 mb-2">
            {/* GitHub Icon */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-github text-2xl"></i>
            </a>
            {/* You can add more social media icons here */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        <hr/>
          {/* Copyright Line */}
          <div className=" text-end  text-gray-400 text-sm">
            <p>&copy; 2025 Your Website. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
