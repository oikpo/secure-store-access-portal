
<?php
require_once 'db_connect.php';

// Get JSON data from request
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['password'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Email and password are required'
    ]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['password'];

// Get user from database
$sql = "SELECT id, name, email, password FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Verify password (in a real app, you'd use password_verify)
    if ($password === $user['password']) { // For demo only! Use password_hash/password_verify in production
        // Remove password from user data
        unset($user['password']);
        
        echo json_encode([
            'success' => true,
            'user' => $user
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid password'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'User not found'
    ]);
}

$conn->close();
?>
