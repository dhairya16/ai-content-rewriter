const { model } = require('../clients/gemini.js')

const transformText = async (content, mode) => {
  let systemPrompt = ''
  let userPrompt = ''
  switch (mode) {
    case 'summarize':
      systemPrompt = 'You summarize text into clear key points.'
      userPrompt = `Summarize this:\n\n${content}`
      break
    case 'rephrase':
      systemPrompt =
        'You rephrase text in different words while keeping meaning intact.'
      userPrompt = `Rephrase this:\n\n${content}`
      break
    case 'explain_simply':
      systemPrompt = 'You explain text in simple language.'
      userPrompt = `Explain this simply:\n\n${content}`
      break
    default:
      throw new Error('Invalid mode')
  }

  const result = await model.generateContent({
    contents: [
      {
        role: 'model',
        parts: [{ text: systemPrompt }],
      },
      {
        role: 'user',
        parts: [{ text: userPrompt }],
      },
    ],
  })

  console.log(result.response.text())
  return result.response.text()
}

module.exports = { transformText }
