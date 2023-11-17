<?php
$con = mysqli_connect("localhost", "gogab4tr_bfriendly_u", "12345", "gogab4tr_bootstrapfriendly_demo");
if (!$con) {
    echo "connection error";
}
if (isset($_POST['submit'])) {
    $name = $file = "";
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    }


    $folderPath = "upload/";
    $image_parts = explode(";base64,", $_POST['signature']);
    $image_type_aux = explode("image/", $image_parts[0]);

    $image_type = $image_type_aux[1];

    $image_base64 = base64_decode($image_parts[1]);

    $file = $folderPath . $name . "_" . uniqid() . '.' . $image_type;

    file_put_contents($file, $image_base64);
    echo "Signature Uploaded Successfully.";


    $sql = "INSERT INTO employee_sign(name, signature_img) VALUES ('$name', '$file')";
    $query = mysqli_query($con, $sql);
}
