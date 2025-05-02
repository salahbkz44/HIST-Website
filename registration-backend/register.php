<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Database connection
$host = 'localhost';
$dbname = 'u628323998_registration';
$username = 'u628323998_registration';
$password = 'EsBE#tw3o?E';


$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode([
        'success' => false,
        'error' => "Database connection failed: " . $conn->connect_error
    ]));
}

// Get raw POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    die(json_encode([
        'success' => false,
        'error' => 'Invalid JSON data'
    ]));
}

// Prepare data
$has_bac = isset($data['has_bac']) && $data['has_bac'] ? 1 : 0;
$address = $data['address'] . ', ' . $data['city'] . ', ' . $data['province'] . ' ' . $data['postal_code'];

// Insert query
$stmt = $conn->prepare("INSERT INTO students 
    (first_name, last_name, dob, phone, email, address, has_bac, bac_year, bac_type, license) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssisss", 
    $data['first_name'],
    $data['last_name'],
    $data['dob'],
    $data['phone'],
    $data['email'],
    $address,
    $has_bac,
    $data['bac_year'],
    $data['bac_type'],
    $data['license']
);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registration successful']);
} else {
    echo json_encode(['success' => false, 'error' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>