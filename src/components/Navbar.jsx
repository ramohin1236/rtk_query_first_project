import { Link } from 'react-router'

const Navbar = () => {
  return (
     <nav className='bg-blue-400 text-white p-4 '>
        <ul className='flex flex-wrap space-x-4 items-center justify-end gap-14'>
           <li><Link to="/" className='bg-blue-700 px-6 py-2 rounded-lg'>Home</Link></li>
           <li><Link to="/user" className='bg-blue-700 px-6 py-2 rounded-lg'>Users</Link></li>
           <li><Link to="/add-user" className='bg-blue-700 px-6 py-2 rounded-lg'>Add User</Link></li>
           <li><Link to="/edit-user/:id" className='bg-blue-700 px-6 py-2 rounded-lg'>Edit User</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar