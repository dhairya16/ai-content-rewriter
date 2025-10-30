require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genai.getGenerativeModel({ model: 'gemini-2.5-flash' })

module.exports = { model }
