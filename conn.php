<?php
if(isset($_POST['submit'])){
	
	$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
 
	if (mysqli_query($conn, $sql)) {
	  echo "New contact added successfully";
	} else {
	  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
 
	mysqli_close($conn);	
	
}
?>	