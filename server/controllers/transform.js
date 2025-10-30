const { transformText } = require('../services/ai')
const { fetchUrlContent } = require('../services/scrapper')

const transformTextController = async (req, res) => {
  try {
    const { text, mode, url } = req.body
    if (!mode) {
      return res.status(400).json({ error: 'Mode is required' })
    }

    let content = text
    if (url) {
      content = await fetchUrlContent(url)
    }

    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: 'text or url is required' })
    }

    const result = await transformText(content, mode)

    res.json({
      transformedText: result,
      originalLength: content.length,
      transformedLength: result.length,
      mode,
      url: url || null,
    })
  } catch (error) {}
}

module.exports = { transformTextController }
