
import { NavLink } from 'react-router'

const navbar = () => {
  return (
    <div>

      <h1 className='text-3xl font-bold text-center mt-10'>Navbar Page</h1>
      <p className='text-center mt-4 text-gray-600'>Welcome to the Navbar Page!</p>

      <NavLink to="/" className="text-blue-500 hover:text-blue-700 mr-4">
        Home
      </NavLink>
      <NavLink to="/services" className="text-blue-500 hover:text-blue-700">
        Services
      </NavLink>
      
    </div>
  )
}

export default navbar
