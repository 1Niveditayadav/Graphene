<?php
$sql = "SELECT * FROM contacts";
$result = mysqli_query($conn, $sql);
$i = 1;
if (mysqli_num_rows($result) > 0) {
?>
<table class="table table-bordered table-hover table-striped">
	<tr>
		<th>Sr. No.</th>
		<th>Name</th>
		<th>Email</th>
		<th>Message</th>
	</tr>
	<?php
	while ($row = mysqli_fetch_assoc($result)) {		
	?>
	<tr>
		<td><?php echo $i; ?></td>
		<td><?php echo $row['name']; ?></td>
		<td><?php echo $row['email']; ?></td>
		<td><?php echo $row['message']; ?></td>
	</tr>
	<?php
	}
	?>
</table>
<?php
}
?>