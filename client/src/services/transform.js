import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1/transform'

export const transformContent = async (input, mode, url) => {
  try {
    const response = await axios.post(baseUrl, {
      text: input,
      mode,
      url,
    })
    return response.data.transformedText
  } catch (error) {
    console.error('Error transforming content:', error)
    throw error
  }
}
