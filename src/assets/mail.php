<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Il n\'y a pas de nom !', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Il n\'y a pas de d\'adresse mail !', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Adresse mail non valide !', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'Il n\'y a pas de sujet !', 'code' => 0));
  exit();
}
if ($message === ''){
  print json_encode(array('message' => 'Ton message est vide !', 'code' => 0));
  exit();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "contact@martialescudero.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Erreur !");
print json_encode(array('message' => 'Message envoyé !', 'code' => 1));
exit();
?>