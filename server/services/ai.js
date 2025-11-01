const { model } = require('../clients/gemini.js')

const transformText = async (content, mode) => {
  let systemPrompt = ''
  let userPrompt = ''
  switch (mode) {
    case 'summarize':
      systemPrompt = `
        You are an expert summarizer who extracts the most important ideas, facts, and takeaways from any text.
        Your goal is to condense the content without losing key meaning or context.
        Present the output in a clear, well-structured Markdown format using bullet points or numbered lists where appropriate.
        Ensure the output uses proper Markdown syntax with real newlines (not escaped \n).
      `
      userPrompt = `Please summarize the following content into clear and concise key points:\n\n${content}`
      break

    case 'rephrase':
      systemPrompt = `
        You are a skilled writer who rephrases text to make it more natural, fluent, and engaging while preserving its original meaning.
        Use clear, professional, and readable language.
        Provide only one best rephrased version — do not include multiple alternatives or variations.
        Return the output in Markdown format for better readability.
      `
      userPrompt = `Rephrase the following text while keeping the original meaning intact:\n\n${content}`
      break

    case 'explain_simply':
      systemPrompt = `
        You are a teacher skilled at simplifying complex ideas.
        Your task is to explain difficult or technical content in easy-to-understand, plain language — as if explaining to a beginner.
        Use examples or analogies when helpful, and format the response in Markdown with clear sections or lists.
        Always explain in less than 500 words.
      `
      userPrompt = `Explain the following content in simple and easy-to-understand terms:\n\n${content}`
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
