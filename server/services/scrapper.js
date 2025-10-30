const axios = require('axios')
const cheerio = require('cheerio')

const fetchUrlContent = async (url) => {
  try {
    const reponse = await axios.get(url, {
      timeout: 10000,
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })

    const $ = cheerio.load(reponse.data)

    $('script, style, nav, header, footer, aside').remove()
    const title = $('title').text() || ''
    const metaDescription = $("meta[name='description']").attr('content') || ''
    const bodyText = $('body').text().replace(/\s+/g, '').trim()

    return `${title}\n\n${metaDescription}\n\n${bodyText}`.substring(0, 15000)
  } catch (err) {
    throw new Error(`Failed to fetch URL: ${err.message}`)
  }
}

module.exports = { fetchUrlContent }
