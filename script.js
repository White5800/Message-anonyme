// script.js
const boutonEnvoyer = document.getElementById('envoyer');
const messageInput = document.getElementById('message');

boutonEnvoyer.addEventListener('click', () => {
  const message = messageInput.value;
  // ... (code pour envoyer le message au serveur)
});

// Fonction pour envoyer le message au serveur
async function envoyerMessageAuServeur(message) {
  try {
    const response = await fetch('/sendMessage', { // Remplace '/sendMessage' par la bonne route 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    });

    // ... (gérer la réponse du serveur)

  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
  }
}

