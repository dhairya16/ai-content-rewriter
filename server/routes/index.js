var express = require('express')
var router = express.Router()

const { transformText } = require('../services/ai.js')

/* GET home page. */
router.get('/', async function (req, res, next) {
  // res.render('index', { title: 'Express' })
  try {
    // const result = await model.generateContent('generate 3 insightful poems')
    // const response = result.response
    // const text = response.text()
    // const cleanedText = text.replace(/```(?:json)?\n?/g, '').trim()
    const result = await transformText(
      `"We continue to remain engaged with the US side on finalising the trade deal.
      Both sides are continuing to hold discussions. For any further update, I would refer
      you to the Ministry of Commerce," he added during the press briefing. Last year, India signed
      a 10-year contract with Iran in which India Ports Global Ltd (IPGL) promised $370 million of
      investments in the port. During Trump's first term as US president, the American administration
      in 2018 also allowed Indian companies to develop the port. That exemption was issued amid US-imposed
      unilateral sanctions on Iran. Jaiswal, during the weekly press briefing, also added that India is analysing
      implications of US sanctions on Russian oil companies. "We are studying the implications of the
      recent US sanctions on Russian oil companies.`,
      'summarize'
    )

    return res.json({ response: result })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

module.exports = router
