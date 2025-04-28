<?php

$nome = $_POST['tnome'];
$email = $_POST['temail'];
$mensagem = $_POST['tmsg'];
$assunto = $_POST['tassunto'];

$destinatario = "daniel80barboza@gmail.com";

$corpo = "Nome: $nome<br>
          Email: $email<br>
          Mensagem: $mensagem";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail($destinatario, $assunto, $corpo, $headers);
echo "<script type='text/javascript'>alert('Email enviado com Sucesso!');";
echo "window.location='index.html';</script>";
?>