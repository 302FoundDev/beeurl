import { FaArrowRight } from "react-icons/fa6"
import { VscGithub } from "react-icons/vsc"
import { MdLightMode } from "react-icons/md"
import { Search } from "./ui/Search"
import { Link } from "react-router-dom"


export const Navbar = () => {

  return (
    <nav className="h-16 max-w-screen-xl m-auto">
      <ul className="flex gap-4 justify-between items-center w-full h-full">
        <li>
          <a
            href="https://beeurl.vercel.app"
            className="font-bold text-xl"
          >
            BeeURL
          </a>
        </li>

        <div className="flex gap-3 items-center">
          <li className="px-2 py-1 hover:bg-gray-800 rounded-md cursor-pointer">
            <a 
              target="_blank"
              rel="noopener" 
              className="w-6 h-6"
              href="https://github.com/302founddev/beeurl"
            >
              <span>
                <VscGithub className="h-7 w-5 flex" />
              </span>
            </a>
          </li>

          <li className="px-2 py-1 hover:bg-gray-800 rounded-md cursor-pointer">
            <span>
              <MdLightMode className="w-6 h-5" />
            </span>
          </li>

          <li>
            <Search />
          </li>

          <li>
            <button className="border  bg-blue-600 rounded-md px-5 py-1.5 hover:bg-gray-800 border-gray-700 text-sm">
              <Link
                to="/dashboard"
              >
                <span className="flex items-center gap-1.5">
                Get Started
                <FaArrowRight />
                </span>
              </Link>
            </button>
          </li>
        </div>

      </ul>
    </nav>
  )
}
