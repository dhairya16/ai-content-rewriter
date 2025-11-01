import { FileSpreadsheet, RefreshCcw, BookOpenCheck } from 'lucide-react'

const TransformationMode = ({ mode, setMode }) => {
  const modes = [
    {
      id: 'summarize',
      title: 'Summarize',
      description: 'Condense text to key points',
      icon: <FileSpreadsheet />,
      gradient: 'from-emerald-400 to-teal-500',
      darkGradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 'rephrase',
      title: 'Rephrase',
      description: 'Rewrite with different words',
      icon: <RefreshCcw />,
      gradient: 'from-blue-400 to-indigo-500',
      darkGradient: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'explain_simply',
      title: 'Explain Simply',
      description: 'Use simple language',
      icon: <BookOpenCheck />,
      gradient: 'from-purple-400 to-fuchsia-500',
      darkGradient: 'from-purple-600 to-fuchsia-700',
    },
  ]

  return (
    <div className="space-y-6">
      {/* <h2 className="text-2xl font-bold text-gray-900 text-center">
        Choose Transformation Mode
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((item) => (
          <button
            key={item.id}
            onClick={() => setMode(item.id)}
            className="cursor-pointer group relative p-0.5 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] hover:-rotate-0"
          >
            <div
              className={`absolute inset-0 rounded-2xl bg-linear-to-br opacity-60 group-hover:opacity-100 transition-opacity blur-sm group-hover:blur-md ${
                mode === item.id ? item.gradient : 'from-gray-200 to-gray-300'
              }`}
            />
            <div
              className={`relative p-6 rounded-2xl h-full
              ${
                mode === item.id
                  ? `bg-linear-to-br ${item.gradient}`
                  : 'bg-white'
              }
              transition-all duration-300`}
            >
              <div
                // className={`text-3xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                //   mode === item.id
                //     ? ''
                //     : 'group-hover:text-gray-700 dark:group-hover:text-gray-300'
                // }`}
                className="flex items-center justify-center"
              >
                {item.icon}
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  mode === item.id
                    ? 'text-white'
                    : 'text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  mode === item.id
                    ? 'text-white/90'
                    : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                }`}
              >
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TransformationMode
