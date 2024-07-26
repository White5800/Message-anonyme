const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const botToken = '7177403062:AAHckiwt7xq1lC0A-J-nPW4ITHsNDsIG2vw'; // Remplacer par votre vrai jeton
const chatId = '6994578596'; // Remplacer par l'ID de chat Telegram

const bot = new TelegramBot(botToken, { polling: true });

app.use(express.json());

app.post('/sendMessage', (req, res) => {
  const message = req.body.message;
  bot.sendMessage(chatId, message)
    .then(() => {
      res.send('Message envoyé avec succès !');
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi du message :", error);
      res.status(500).send('Erreur lors de l'envoi du message');
    });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

