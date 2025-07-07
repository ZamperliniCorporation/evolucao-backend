const { gerarPlanoComIA } = require('../services/geminiService');
const { salvarPlanoNoFirestore } = require('../firebase/firebaseConfig');

async function gerarPlano(req, res) {
  try {
    const { nome, objetivo } = req.body;

    if (!nome || !objetivo) {
      return res.status(400).json({ error: "Nome e objetivo são obrigatórios." });
    }

    const plano = await gerarPlanoComIA(objetivo);
    await salvarPlanoNoFirestore(nome, plano);

    res.status(200).json({ nome, plano });
  } catch (error) {
    console.error("Erro ao gerar plano:", error);
    res.status(500).json({ error: "Erro ao gerar plano." });
  }
}

module.exports = { gerarPlano };
