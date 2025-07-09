<?php  
// Saisie des logs pour se connecter à la base de données
$host = "localhost";
$username = "username"; // Remplacez par votre nom d'utilisateur  
$password = "password"; // Remplacez par votre mot de passe  
$database = "pharmacokinetics";

// Connexion
$mysqli = new mysqli($host, $username, $password, $database);

// Vérification 
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Vérifier le médicament 
// Attention aux injections SQL
if (isset($_GET['id'])) {
    $drugId = intval($_GET['id']); 

    // Récupérer les datas propres à une molécule
    $result = $mysqli->query("SELECT absorption_rate, distribution_volume, clearance_rate, half_life FROM drugs WHERE id=$drugId");

    // Vérifier si le médicament existe  
    if ($result->num_rows > 0) {
        $drugData = $result->fetch_assoc(); 
        echo json_encode($drugData); 
    } else {
        echo json_encode(["error" => "Not found."]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    // Ajouter une nouvelle molécule 
    $name = $_POST['name'];
    $absorption_rate = floatval($_POST['absorption_rate']);
    $distribution_volume = floatval($_POST['distribution_volume']);
    $clearance_rate = floatval($_POST['clearance_rate']);
    $half_life = floatval($_POST['half_life']);

    // Requête 
    $stmt = $mysqli->prepare("INSERT INTO drugs (name, absorption_rate, distribution_volume, clearance_rate, half_life) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sdddd", $name, $absorption_rate, $distribution_volume, $clearance_rate, $half_life);

    if ($stmt->execute()) 
    {
        echo json_encode(["success" => "Success."]);
    } else 
    {
        echo json_encode(["error" => "Error."]);
    }

    $stmt->close();
} else 
{
    echo json_encode(["error" => "Insupported method."]);
}

// Fermer la connexion  
$mysqli->close();
?>
