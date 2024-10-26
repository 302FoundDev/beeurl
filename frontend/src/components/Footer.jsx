import { FaSquareXTwitter, FaLink } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="max-w-screen px-8 flex justify-between py-6 opacity-75 border-t-2 border-zinc-800 bg-zinc-900">
      <div>
        Made with <span className="text-red-600">:love</span> by <a className="hover:underline hover:opacity-85" href="https://github.com/302founddev">302FoundDev</a>
      </div>
      <div>
        <a 
          href="https://x.com/302founddev"
          rel="noopener"
          target="_blank"
        >
          <span className="flex items-center gap-1 hover:opacity-75">
            <FaSquareXTwitter />
            Twitter
            <FaLink />
          </span>
        </a>
      </div>
    </footer>
  )
}

