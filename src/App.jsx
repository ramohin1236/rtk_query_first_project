import './App.css'
import { Link, Outlet } from 'react-router'
import { useGetUsersQuery } from './redux/features/users/userApi';

function App() {

  const { data, error, isLoading } = useGetUsersQuery();
  console.log(data)
  return (
    <>
    <nav className='bg-blue-400 text-white p-4 '>
        <ul className='flex flex-wrap space-x-4 items-center justify-end gap-14'>
           <li><Link to="/" className='bg-blue-700 px-6 py-2 rounded-lg'>Home</Link></li>
           <li><Link to="/user" className='bg-blue-700 px-6 py-2 rounded-lg'>Users</Link></li>
           <li><Link to="/about" className='bg-blue-700 px-6 py-2 rounded-lg'>About</Link></li>
           <li><Link to="/contact" className='bg-blue-700 px-6 py-2 rounded-lg'>Contact</Link></li>
        </ul>
    </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
