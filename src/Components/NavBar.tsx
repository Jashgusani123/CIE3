import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="flex h-[10%] items-center justify-center bg-[#021526]">
      <nav className="h-full w-full flex justify-between ">
        <div className="icon w-1/4 flex justify-center items-center text-2xl font-bold text-white" >
          <p>Logo</p>
        </div>
        <div className="options flex justify-around flex-row w-[50%] items-center ">
          <Link to="#about" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">About Us</Link>
          <Link to="" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Projects</Link>
          <Link to="" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Services</Link>
          <Link to="" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Blog</Link>
          <Link to="" className="text-white font-normal hover:bg-[#6EACDA] p-2 rounded-lg ">Contect</Link>
          <button className="bg-[#6EACDA] text-white font-bold rounded-lg p-2 hover:bg-[#86bae2] hover:p-2 ">Get in Touch</button>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar