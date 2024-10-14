import { IoMdSearch } from "react-icons/io"

export const Search = () => {
  return (
    <button 
        type="button" 
        className="flex items-center text-base border rounded-xl px-1.5 py-1 bg-transparent border-gray-800 hover:bg-gray-800 hover:border-gray-700 text-gray-400"
      >
        <span><IoMdSearch className="text-blue-400 w-7 h-5 pr-1" /></span>
        <span className="text-sm pr-8">Search...</span>
        <span className="border rounded-md border-gray-700 font-bold text-xs px-1 py-0.5 text-slate-300 opacity-80">⌘K</span>
    </button>
  )
}