<?php
include 'connection.php';
if(isset($_POST['submit'])){
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    if (!preg_match($email_exp, $email)) {
        echo '<br><span style="color:red;">The Email address you entered is not valid.</span>';
		exit;
    }
	
	$to = "yourname@example.com";  
	$subject = "Contact Form"; 
	
	
	$message = "Name: ".$name."<br>Email: ".$email."<br> Message".$message;
	
	
	$headers = "From:".$email."\r\n";
	$headers = "CC: someone@example.com";
	$headers .= "Reply-To:".$email."\r\n";
	$headers .= "X-Mailer: PHP/".phpversion();
	
	
	mail($to, $subject, $message, $headers);
    include 'conn.php';
}
?>