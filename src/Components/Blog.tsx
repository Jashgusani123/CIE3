// src/pages/BlogsPage.js

const BlogsPage = () => {
  return (
    <div className="blogs-page py-8 bg-blue-100 p-4 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center my-8">Our Blogs</h1>
      <section className="intro-section text-center mb-12">
        <p className="text-lg text-gray-600 md:text-2xl">
          We are proud to showcase some of the Blogs we have worked on. Take a look at the work we've done, and feel free to reach out if you'd like to learn more! 
        </p>
      </section>
      <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 h-fit">
        {/* Blog Card on the Left */}
        <div className="blog-card bg-white p-6 shadow-lg rounded-lg">
          <img
            src="https://imgs.search.brave.com/R40LX8k2uZds9ElkdIZlkDNvM40uaxPIlk6BkjxMkEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2dyaWRzLzZjZi9m/cmVlLWltYWdlLWZv/ci15b3Utc2VvLWJs/b2ctb3Itd2ViLW1h/cmtldGluZy13ZWJz/aXRlLTE2MzYwNTUu/anBn"  // Replace with your actual image URL
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Blog 1</h2>
          <p className="mt-2 text-gray-600">This is a brief intro of the blog. A few sentences describing the blog's content. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
         
        </div>

        {/* Blog Detail on the Right */}
        <div className="blog-detail bg-white p-6 shadow-lg rounded-lg h-fit">
          <h2 className="text-2xl font-semibold">Heading: Blog 1</h2>
          <p className="mt-2 text-gray-600">Description: - This is a brief intro of the blog. A few sentences describing the blog's content. This is the detailed description of the blog post. Here you can expand on the topic, provide additional information, and make it more engaging for the reader.</p>
           {/* Like Button */}
           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
            Like
          </button>
        </div>

        {/* Repeat for more blogs */}
        <div className="blog-card bg-white p-6 shadow-lg rounded-lg">
          <img
            src="https://imgs.search.brave.com/Zyb06LTKj8b0j0uBT_g1FXOTL5QV-2aJ8OnovyiHtWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEz/MTcyMzU0L3Bob3Rv/L3dvcmQtYmxvZy1v/Zi1jb2xvci13b29k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz14clZEQ245Z21y/NTAzTkxKa3pEZzVV/LTluSW9waVBDekZK/bFhlaXZlOVlNPQ"  // Replace with your actual image URL
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Blog 2</h2>
          <p className="mt-2 text-gray-600">This is a brief intro of the blog. A few sentences describing the blog's content. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
        </div>

        <div className="blog-detail bg-white p-6 shadow-lg rounded-lg h-fit">
          <h2 className="text-2xl font-semibold">Heading:Blog 2</h2>
          <p className="mt-2 text-gray-600">Description: Detailed content of the blog post. This section expands on the ideas in the blog.</p>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
            Like
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
