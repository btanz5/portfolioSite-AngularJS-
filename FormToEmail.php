<?php
	
	if(!isset($_POST['send'])) {
		echo "error; you need to submit the form!";
	}
	
	$name = $_POST['name'];
	$visitorEmail = $_POST['email'];
	$visitorPhone = $_POST['phone'];
	$message = $_POST['comments'];
	
	//Double Validate along with script.js
	if(empty($name)||empty($visitorEmail)) {
	    echo "Name and email are mandatory!";
	    exit;
	}
	
	if(IsInjected($visitorEmail)) {
	    echo "Bad email value!";
	    exit;
	}
	
	$emailFrom = $visitorEmail;
	$emailSubject = "New Form submission";
	$emailBody = "You have received a message from $name.\n".
	    "Here is the message:\n $message \n".
	    
	$to = "me@bentansey.com";
	$headers = "From: $emailFrom \r\n";
	$headers .= "Call me at: $visitorPhone \r\n";
	$headers .= "Reply-To: $visitorEmail \r\n";
	
	mail($to,$emailSubject,$emailBody,$headers);
	
	header('Location: thank-you.html');
	
	function IsInjected($str) {
	  $injections = array('(\n+)',
	              '(\r+)',
	              '(\t+)',
	              '(%0A+)',
	              '(%0D+)',
	              '(%08+)',
	              '(%09+)'
	              );
	  $inject = join('|', $injections);
	  $inject = "/$inject/i";
	  if(preg_match($inject,$str)) {
	    return true;
	  }
	  else {
	    return false;
	  }
	}
	   
?> 