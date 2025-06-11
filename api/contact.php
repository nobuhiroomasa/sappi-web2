<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$message = $data['message'];

// ここでメール送信やDB保存処理
// mail()関数でメール送信も可能

echo json_encode(['status' => '送信成功']);
?>
