import { FaArrowRight } from "react-icons/fa6"
import { VscGithub } from "react-icons/vsc"
import { MdLightMode } from "react-icons/md"
import { Search } from "./ui/Search"
import { Link } from "react-router-dom"


export const Navbar = () => {

  return (
    <nav className="max-w-screen m-auto border-b-2 border-zinc-800 bg-zinc-900">
      <div className="max-w-screen-xl m-auto h-20">
        <ul className="flex items-center justify-between w-full h-full gap-4">
          <li>
            <Link
              to="/"
              className="text-xl font-bold"
            >
              beeURL
            </Link>
          </li>

          <div className="flex items-center gap-1 md:gap-3">
            <li className="px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-800">
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

            <li className="px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-800">
              <span>
                <MdLightMode className="w-6 h-5" />
              </span>
            </li>

            <li>
              <Search />
            </li>

            <li>
              <Link
                className="px-5 py-1 border border-zinc-800 hover:bg-zinc-800 bg-transparent hidden items-center gap-2 rounded-md md:flex"
                to="/signup"
              >
                Get Started
                <FaArrowRight />
              </Link>
            </li>
          </div>

        </ul>
      </div>
    </nav>
  )
}
