import { VscGithub } from "react-icons/vsc"

export const Hero = () => {


  return (
    <section>
      <div className="flex justify-center pt-44 pb-9">
        <h1 className="font-bold text-6xl">Streamline Your URL Management</h1>
      </div>
      <div>
        <div className="text-center m-auto max-w-4xl text-lg">
          is a comprehensive, open-source tool specifically crafted to transform the way you handle links by 
          providing a seamless and efficient approach to creating, organizing, and tracking URLs
        </div>

        <article className="pt-10 flex justify-center">
          <a 
            href="https://github.com/302founddev/beeurl" 
            rel="noopener"
            target="_blank"
            className="flex items-center gap-1.5 border border-gray-800 rounded-md px-5 py-1.5 bg-blue-600 hover:bg-gray-800 hover:border-gray-700 text-lg"
          >
            <span className="flex items-center gap-2 text-white font-semibold">
              Star on GitHub
              <VscGithub />
            </span>
          </a>
        </article>

      </div>
    </section>
  )
}