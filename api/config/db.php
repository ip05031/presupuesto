<?php
$host = 'localhost';
$dbname = 'u397416018_gastos';
$user = 'u397416018_root_gastos';
$pass = '5S8[IZHC>0t$';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode(['error' => 'Error al conectar con la base de datos: ' . $e->getMessage()]);
  exit;
}
