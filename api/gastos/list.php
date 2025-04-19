<?php
header("Content-Type: application/json");
include_once("../config/db.php");

$stmt = $pdo->query("SELECT * FROM gastos ORDER BY fecha DESC");
$gastos = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($gastos);
