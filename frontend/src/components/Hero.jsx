import { FaArrowRight } from "react-icons/fa6"
import { VscGithub } from "react-icons/vsc"
import { Link } from "react-router-dom"

export const Hero = () => {


  return (
    <section className="px-8">
      <div className="flex justify-center pt-32 md:pt-44 pb-4 md:pb-9">
        <h1 className="font-bold text-5xl text-center md:text-6xl">Streamline Your URL Management</h1>
      </div>
      <div>
        <div className="text-center m-auto max-w-4xl md:text-lg text-base">
          is a comprehensive, open-source tool specifically crafted to transform the way you handle links by 
          providing a seamless and efficient approach to creating, organizing, and tracking URLs
        </div>

        <article className="pt-10 flex justify-center gap-1">
          <a 
            href="https://github.com/302founddev/beeurl"
            rel="noopener"
            target="_blank"
            className="flex items-center m-auto gap-1.5 rounded-md px-5 py-1.5 border border-zinc-800 hover:bg-zinc-800 text-lg"
          >
            <span className="flex items-center gap-2 text-white font-semibold">
              Star on GitHub
              <VscGithub />
            </span>
          </a>
          <Link
              className="px-5 py-1.5 text-lg font-semibold m-auto border border-zinc-800 flex items-center gap-2 rounded-md hover:bg-zinc-800 md:hidden"
              to="/profile"
            >
              Get Started
              <FaArrowRight />
          </Link>
        </article>

      </div>
    </section>
  )
}
