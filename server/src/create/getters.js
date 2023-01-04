const openai = require('openai')

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiApi = new openai.OpenAIApi(configuration);

async function generateImage(req, res) {

  const response = await openaiApi.createImage({
    prompt: "a cute purple dog doing laps",
    n: 1,
    size: "512x512",
  })

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ url: response.data.data[0].url }));
}

module.exports = {generateImage}
