<?php
  // 1. Remplacez par vos informations réelles
  $botToken = "7177403062:AAHckiwt7xq1lC0A-J-nPW4ITHsNDsIG2vw";
  $chatId = "6994578596";

  // 2. Récupérer le message du formulaire
  $message = $_POST['message'];

  // 3. Construire l'URL de l'API Telegram
  $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage?chat_id=" . $chatId . "&text=" . urlencode($message);

  // 4. Envoyer la requête à l'API Telegram
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $result = curl_exec($ch);
  curl_close($ch);

  // 5. Vérifier si le message a été envoyé avec succès
  if ($result) {
    echo "Message envoyé avec succès !";
  } else {
    echo "Erreur lors de l'envoi du message.";
  }
?>