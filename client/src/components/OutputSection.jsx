import MarkdownPreview from '@uiw/react-markdown-preview'
import { Copy, Download, CircleCheckBig, Volume2 } from 'lucide-react'
import { useState } from 'react'

const OutputSection = ({ output }) => {
  const [copied, setCopied] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const download = () => {
    if (!output) return

    // Create a blob with plain text
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' })

    // Create a temporary download link
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'transformed_text.txt' // filename
    a.click()

    // Clean up the object URL
    window.URL.revokeObjectURL(url)
  }

  const speak = () => {
    if (!output) return

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(output)
    utterance.lang = 'en-US'
    utterance.rate = 1
    utterance.pitch = 0

    setSpeaking(true)
    window.speechSynthesis.speak(utterance)

    utterance.onend = () => setSpeaking(false)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Transformed Text</h2>
        <div className="flex gap-1">
          <button
            className={`px-2 py-2 rounded-lg font-medium transition-colors ${
              output
                ? 'text-gray-700 cursor-pointer hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed bg-gray-100'
            }`}
            onClick={copy}
            disabled={!output}
          >
            {copied ? <CircleCheckBig color="green" /> : <Copy />}
          </button>
          <button
            className={`px-2 py-2 rounded-lg font-medium transition-colors ${
              output
                ? 'text-gray-700 cursor-pointer hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed bg-gray-100'
            }`}
            onClick={download}
            disabled={!output}
          >
            <Download />
          </button>
          <button
            className={`px-2 py-2 rounded-lg font-medium transition-colors ${
              output
                ? 'text-gray-700 cursor-pointer hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed bg-gray-100'
            }`}
            onClick={speak}
            disabled={!output}
          >
            <Volume2 color={speaking ? 'green' : 'currentColor'} />
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-gray-50 border border-gray-200 min-h-[400px] max-h-[400px] overflow-y-scroll">
        {output ? (
          <MarkdownPreview
            source={output}
            style={{
              fontSize: '15px',
              padding: '20px',
              height: '100%',
              backgroundColor: 'oklch(0.98 0 0)',
            }}
          />
        ) : (
          <div className="text-gray-400 p-4">
            Transformed text will appear here...
          </div>
        )}
      </div>
      <div className="mt-2 text-sm text-gray-500 flex justify-end">
        {output?.length || 0} characters
      </div>
    </div>
  )
}

export default OutputSection
