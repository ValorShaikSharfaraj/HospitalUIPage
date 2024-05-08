import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'/>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-red-400'>Valor</span>
                <span className='text-red-600'>Hospital</span>
            </h1>
            <form className='bg-blue-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-blue-600 cursor-pointer'/>
            </form>

            <ul className='flex gap-4 cursor-pointer'>
                <Link to='/home'>
                    <li className='hidden sm:inline hover:text-red-500 transition-colors duration-300 hover:underline'>Home</li>
                </Link>
                <Link to='/consulting'>
                    <li className='hidden sm:inline hover:text-red-500 transition-colors duration-300 hover:underline'>Consulting</li>
                </Link>
                
                <Link to='/apps'>
                    <li className='hidden sm:inline hover:text-red-500 transition-colors duration-300 hover:underline'>Apps</li>
                </Link>

                <Link to='/sign-in'>
                    <li className='sm:inline hover:text-red-500 transition-colors duration-300 hover:underline'>Sign In</li>
                </Link>
                
                
            </ul>
        </div>
        
    </header>
  )
}
