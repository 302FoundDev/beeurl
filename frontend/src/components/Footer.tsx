import { FaSquareXTwitter, FaLink } from "react-icons/fa6"


export const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto flex justify-between absolute bottom-0 right-0 left-0 pb-4 opacity-60">
      <div>
        Made with <span className="text-red-600">:love</span> by 302FoundDev
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

