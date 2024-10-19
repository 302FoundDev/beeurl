import { FaArrowRight } from "react-icons/fa6"
import { VscGithub } from "react-icons/vsc"
import { MdLightMode } from "react-icons/md"
import { Search } from "./ui/Search"
import { Link } from "react-router-dom"
import { useState } from "react"


export const Navbar = () => {

  // TODO
  const [path, setPath] = useState('')

  return (
    <nav className="h-16 max-w-screen-xl m-auto">
      <ul className="flex items-center justify-between w-full h-full gap-4">
        <li>
          <a
            href="https://beeurl.vercel.app"
            className="text-xl font-bold"
          >
            BeeURL
          </a>
        </li>

        <div className="flex items-center gap-1 md:gap-3">
          <li className="px-2 py-1 rounded-md cursor-pointer hover:bg-gray-800">
            <a 
              target="_blank"
              rel="noopener" 
              className="w-6 h-6"
              href="https://github.com/302founddev/beeurl"
            >
              <span>
                <VscGithub className="flex w-5 h-7" />
              </span>
            </a>
          </li>

          <li className="px-2 py-1 rounded-md cursor-pointer hover:bg-gray-800">
            <span>
              <MdLightMode className="w-6 h-5" />
            </span>
          </li>

          <li>
            <Search />
          </li>

          <li>
            <Link
              className="px-5 py-1 bg-blue-700 hidden md:flex items-center gap-2 rounded hover:bg-gray-800 hover:border-gray-700"
              to="/signup"
            >
              Get Started
              <FaArrowRight />
            </Link>
          </li>
        </div>

      </ul>
    </nav>
  )
}
