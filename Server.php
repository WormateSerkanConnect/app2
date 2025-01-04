<?php
require 'db.php';

class Server {
    private $pdo;
    
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    
    public function getLeaderboard() {
        $stmt = $this->pdo->query("SELECT username, score FROM users ORDER BY score DESC LIMIT 10");
        return $stmt->fetchAll();
    }
    
    public function updateScore($user_id, $score) {
        $stmt = $this->pdo->prepare("UPDATE users SET score = ? WHERE id = ?");
        return $stmt->execute([$score, $user_id]);
    }
}
?>
