const admin = require('firebase-admin');
const serviceAccount = require('./firebase.js'); // Certifique-se de que esse é o nome correto do seu arquivo JSON ou JS

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function salvarPlanoNoFirestore(nome, plano) {
  const docRef = db.collection('planos').doc(nome);
  await docRef.set({
    nome,
    plano,
    criadoEm: new Date()
  });
}

module.exports = { salvarPlanoNoFirestore };
