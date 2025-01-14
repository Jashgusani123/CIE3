import { useState } from 'react';

const ContactUs = () => {
  const [locationSelected, setLocationSelected] = useState(false);
  const [location, setLocation] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    setLocationSelected(selectedLocation !== ''); // Enable location section only if a location is selected
  };

  return (
    <section className="bg-blue-100 py-16 px-4" id="contact">
      <section className="text-center text-black mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          We’d love to hear from you! Please fill out the form below or select a location.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Location Section */}
        {locationSelected && (
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md overflow-auto">
            <h2 className="text-2xl font-semibold mb-4">Location: {location}</h2>
            <p>
              Here you can show information about the selected location, such as
              the address, contact details, or a map.
            </p>
          </div>
        )}

        {/* Form Section */}
        <div className={`lg:w-1/2 w-full ${locationSelected ? 'lg:ml-8' : ''} bg-white p-8 rounded-lg shadow-md`}>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-lg font-medium">Select Location</label>
              <select
                id="location"
                name="location"
                onChange={handleLocationChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a location</option>
                <option value="India">India</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
