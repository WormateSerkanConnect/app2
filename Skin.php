<?php
require 'db.php';

class Skin {
    private $pdo;
    
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    
    public function getSkins() {
        $stmt = $this->pdo->query("SELECT * FROM skins");
        return $stmt->fetchAll();
    }
    
    public function buySkin($user_id, $skin_id) {
        $stmt = $this->pdo->prepare("INSERT INTO user_skins (user_id, skin_id) VALUES (?, ?)");
        return $stmt->execute([$user_id, $skin_id]);
    }
}
?>
