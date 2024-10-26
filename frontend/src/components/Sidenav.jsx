import { RiLinksFill } from 'react-icons/ri'
import { IoHomeSharp, IoSettingsOutline } from 'react-icons/io5'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'


export const Sidenav = ({ pathname }) => {

  return (
    <div className='px-2 py-2 w-52 hidden flex-col justify-between border-2 border-gray-300 rounded shadow-lg bg-gray-200 sm:flex'>
        <div className='text-start mb-4 flex flex-col gap-1'>

            <Link
              to='/'
              className='flex items-center gap-2 text-black bg-gray-300 px-3 py-3 rounded-md hover:bg-blue-300'
            >
              <IoHomeSharp />
              Home
            </Link>

            <Link
              to='/dashboard'
              className={`flex items-center gap-2 text-black px-3 py-3 rounded-md hover:bg-blue-300 ${pathname === '/dashboard' ? 'bg-blue-300' : 'bg-gray-300'}`}
            >
              <RiLinksFill />
              Links
            </Link>

            <Link
              to='/dashboard/settings'
              className={`flex items-center gap-2 text-black px-3 py-3 rounded-md hover:bg-blue-300 ${pathname === '/dashboard/settings' ? 'bg-blue-300' : 'bg-gray-300'}`}
            >
              <IoSettingsOutline />
              Settings
            </Link>

        </div>
        <div className='mt-4'>
          {/* Puedes agregar más contenido aquí, como una lista de URLs o botones */}
          <Button>Sign Out</Button>
        </div>
      </div>
  )
}
