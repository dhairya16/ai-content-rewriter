import { useState } from 'react'
import TransformationMode from './components/TransformationMode'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import { transformContent } from './services/transform'
import { ListRestart, RotateCcw } from 'lucide-react'

const App = () => {
  const [mode, setMode] = useState('summarize')
  const [input, setInput] = useState('')
  const [isUrl, setIsUrl] = useState(false)
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleTransform = async () => {
    if (!input.trim()) return
    setIsLoading(true)
    try {
      const content = !isUrl ? input : null
      const url = isUrl ? input : null
      const result = await transformContent(content, mode, url)
      setOutput(result)
    } catch (error) {
      console.error('Error transforming content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setInput('')
    setOutput('')
    setIsUrl(false)
    setMode('summarize')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative container mx-auto px-4 py-4 max-w-7xl space-y-5">
        <TransformationMode mode={mode} setMode={setMode} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InputSection
              input={input}
              setInput={setInput}
              isUrl={isUrl}
              setIsUrl={setIsUrl}
            />
            {/* <button
              onClick={handleTransform}
              disabled={isLoading || !input.trim()}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg
              transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                isLoading || !input.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }
              ${isLoading ? 'animate-pulse' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Transforming...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ListRestart /> Transform Content
                </span>
              )}
            </button> */}

            <div className="flex gap-4">
              {/* Transform Button */}
              <button
                onClick={handleTransform}
                disabled={isLoading || !input.trim()}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold text-white shadow-lg
                transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isLoading || !input.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500 cursor-pointer'
                }
                ${isLoading ? 'animate-pulse' : ''}`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Transforming...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <ListRestart /> Transform Content
                  </span>
                )}
              </button>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                disabled={isLoading}
                className={`cursor-pointer flex-1 py-4 px-6 rounded-xl font-semibold text-white shadow-lg
                transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 focus:ring-red-500'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <RotateCcw /> Reset
                </span>
              </button>
            </div>
          </div>
          <OutputSection output={output} />
        </div>
      </div>
    </div>
  )
}

export default App
