import { FaSquareGithub } from "react-icons/fa6"
import { IoMdSearch } from "react-icons/io"


export const Navbar = () => {
  return (
    <nav className="flex my-4 w-full justify-between">
      <ul className="flex gap-4">
        <div>
          <a target="_blank noopener" href="https://beeurl.vercel.app">BeeURL</a>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <a target="_blank noopener" className="w-6 h-6" href="https://github.com/302founddev/beeurl"><FaSquareGithub /></a>
          </div>

          <div>
            <button type="button" className="flex items-center gap-2 border rounded-lg px-1 bg-gray-900 border-gray-600 text-gray-400">
              <IoMdSearch className="text-blue-400" />
              Search...
              <span className="border rounded border-gray-600 py-0 px-1">CK</span>
            </button>
          </div>

          <div>
            <input type="select" />
          </div>

          <div>
            <button>Get started</button>
          </div>
        </div>

      </ul>
    </nav>
  )
}
// www.printful.com/es/give-5-get-5/LKA8B0

