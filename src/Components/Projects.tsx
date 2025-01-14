
const ProjectsPage = () => {
  return (
    <div className="projects-page bg-blue-100 p-4 shadow-lg rounded-lg ret" >
      <h1 className="text-3xl font-bold text-center my-8">Our Projects</h1>
      
      {/* Introduction Section */}
      <section className="intro-section text-center mb-12">
        <p className="text-lg text-gray-600 md:text-2xl">
          We are proud to showcase some of the projects we have worked on. Take a look at the work we've done, and feel free to reach out if you'd like to learn more! 
        </p>
      </section>

      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Example project cards */}
        <div className="project-card bg-white p-4 shadow-lg rounded-lg">
          <img
            src="https://imgs.search.brave.com/S6hMhVGwUq-aNQ_obMsp1h6fL7WkfnlkrXCO7E4aaBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlncmVhdGxlYXJu/aW5nLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA4L2ltYWdlLTYw/LTEwMjR4NTc2LnBu/Zw" // Replace with actual project image URL
            alt="Slack"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Slack</h2>
          <p className="mt-2 text-gray-600">Short description of the project. This can be a brief overview of the work you did and the technologies used.</p>
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Learn More
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Like
            </button>
          </div>
        </div>

        <div className="project-card bg-white p-4 shadow-lg rounded-lg">
          <img
            src="https://imgs.search.brave.com/uTOxk2nU6p5xP8iYFvqnRZs8D0zPYu1nmjQXmkEgiA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNDAyMDIx/MTQwMTYvV2ViLURl/dmVsb3BtZW50LVBy/b2plY3QtSWRlYXMu/d2VicA" // Replace with actual project image URL
            alt="Web Development"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Web Development</h2>
          <p className="mt-2 text-gray-600">Short description of the project. This can be a brief overview of the work you did and the technologies used.</p>
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Learn More
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Like
            </button>
          </div>
        </div>


        {/* Add more projects here */}
      </div>
    </div>
  );
};

export default ProjectsPage;
