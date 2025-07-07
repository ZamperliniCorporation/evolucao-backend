const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

async function gerarPlanoComIA(objetivo) {
  const prompt = `Crie um plano de evolução pessoal com 4 etapas práticas e motivadoras para alguém que quer: "${objetivo}". Use linguagem empática e clara. Dê títulos e descrições curtas para cada etapa.`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = { gerarPlanoComIA };
