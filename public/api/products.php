
<?php
require_once 'db_connect.php';

// Handle GET request (retrieve products)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM products ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $products = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }
    
    echo json_encode([
        'success' => true,
        'products' => $products
    ]);
}

// Handle POST request (add new product)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['name']) || !isset($data['price']) || !isset($data['stock']) || !isset($data['description']) || !isset($data['category']) || !isset($data['user_id'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Required fields are missing'
        ]);
        exit;
    }
    
    $name = $conn->real_escape_string($data['name']);
    $description = $conn->real_escape_string($data['description']);
    $price = floatval($data['price']);
    $stock = intval($data['stock']);
    $category = $conn->real_escape_string($data['category']);
    $user_id = intval($data['user_id']);
    
    $sql = "INSERT INTO products (name, description, price, stock, category, user_id) 
            VALUES ('$name', '$description', $price, $stock, '$category', $user_id)";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode([
            'success' => true,
            'message' => 'Product added successfully',
            'product_id' => $conn->insert_id
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $conn->error
        ]);
    }
}

$conn->close();
?>
