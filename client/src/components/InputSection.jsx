import { NotebookPen, Link } from 'lucide-react'

const InputSection = ({ input, setInput, isUrl, setIsUrl }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Input</h2>
      <div className="flex gap-2 mb-4 bg-gray-50 p-1 rounded-lg w-fit">
        <button
          onClick={() => setIsUrl(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            !isUrl
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="flex items-center gap-2">
            <NotebookPen /> Text Input
          </span>
        </button>
        <button
          onClick={() => setIsUrl(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            isUrl
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="flex items-center gap-2">
            <Link /> URL Input
          </span>
        </button>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isUrl ? 'Enter URL...' : 'Enter your text...'}
        className="w-full h-[300px] p-4 rounded-lg bg-gray-50 border border-gray-200
        focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-800
        placeholder-gray-400"
      />

      <div className="mt-2 text-sm text-gray-500 flex justify-end">
        {`${input.length} / 15000 characters`}
      </div>
    </div>
  )
}

export default InputSection
