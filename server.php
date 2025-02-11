<?php
$action = $_GET['action'] ?? null;

try {
    $db = new PDO('sqlite:database.sqlite');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($action === 'search') {
        $query = $_GET['query'] ?? '';
        $stmt = $db->prepare('SELECT * FROM reviews WHERE text LIKE :query');
        $stmt->execute([':query' => "%$query%"]);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($results);
    } elseif ($action === 'submit') {
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $db->prepare('INSERT INTO reviews (text, rating) VALUES (:text, :rating)');
        $stmt->execute([':text' => $data['review'], ':rating' => $data['rating']]);
        echo json_encode(['status' => 'success']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
