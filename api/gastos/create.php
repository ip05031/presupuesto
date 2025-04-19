<?php
header("Content-Type: application/json");
include_once("../config/db.php");

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->monto) &&
    isset($data->categoria) &&
    isset($data->descripcion) &&
    isset($data->fecha)
) {
    $stmt = $pdo->prepare("INSERT INTO gastos (monto, categoria, descripcion, fecha) VALUES (?, ?, ?, ?)");
    $stmt->execute([$data->monto, $data->categoria, $data->descripcion, $data->fecha]);
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "Faltan datos"]);
}
