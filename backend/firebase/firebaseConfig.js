const admin = require('firebase-admin');

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG); // ✅ Pega da env

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });
}

const db = admin.firestore();

async function salvarPlanoNoFirestore(nome, plano) {
  const docRef = db.collection('planos').doc(nome);
  await docRef.set({
    nome,
    plano,
    criadoEm: new Date(),
  });
}

module.exports = { salvarPlanoNoFirestore };
