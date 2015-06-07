	/*=========
			Basic jQuery for page UX enhancements 
							=========*/
	$(function() {
		/*On mouse over of "social media" in the greeting paragraph
			the social media links will be highlighted with their :hover color*/
		$(".socialHighlight").mouseover(function(){
			$(".github").addClass("git");
			$(".linkedin").addClass("link");
			$(".facebook").addClass("face");
			$(".googleplus").addClass("google");
		});

		/*On mouse out of "social media" in the greeting paragraph
			the social media links will go back to their orginal state*/	
			$(".socialHighlight").mouseout(function(){
			$(".github").removeClass("git");
			$(".linkedin").removeClass("link");
			$(".facebook").removeClass("face");
			$(".googleplus").removeClass("google");
		});
		
		//Page links changes font size on mouse over.
		$(".siteNavItems").mouseover( function() { 
			$(this).css({fontSize : "1.75em"});
		});
		
		//Page links changes font size on mouse out.
		$(".siteNavItems").mouseout( function() { 
			$(this).css({fontSize : "1.5em"});
		});
			
		//Return to homepage link font size changes on mouse over.
		$(".returnLink").mouseover( function() { 
			$(this).css({fontSize : "large"});
		});
		
		//Return to homepage link font size changes back on mouse out.
		$(".returnLink").mouseout( function() { 
			$(this).css({fontSize : "medium"});
		});

		//Hover over "contact form" in intro paragraph, "contact" link 
		//fontSize will change.
		$(".contactHighlight").mouseover( function() { 
			$("#contact").css({fontSize : "2em"});
		});
		
		//Hover out "contact form" in intro paragraph, "contact" link 
		//fontSize will change.
		$(".contactHighlight").mouseout( function() { 
			$("#contact").css({fontSize : "1.5em"});
		});
		
		//highlight gitHub page when you hove over portfolio gitHub text
		$(".gitHubhighlight").mouseover(function(){
			$(".github").addClass("git");
		});
		//remover github highlight when yuo move out of gitHub text
		$(".gitHubhighlight").mouseout(function(){
			$(".github").removeClass("git");
		});
		
	});
	/*=========
			Form Validation
							=========*/
	function validate() {
		//Invaild entry responces.
		var nameConf = "Please provide your Name.";
		var emailConf = "Please provide your Email.";
		var phoneConf = "Please provide a valid Phone Number.";
		
		//Regular Expression validation.
		var phoneNumber = /^\d{10}$/; //validate that the user enters a 10 digit phone number
	
	   if(document.myForm.name.value === "" ) {
	     document.getElementById("valConf").innerHTML = nameConf;
	     document.myForm.name.focus();
	     return false;
	   }
	   
	   if(document.myForm.email.value === "" ) {
	     document.getElementById("valConf").innerHTML = emailConf;
	     document.myForm.email.focus();
	     return false;
	   }
	   
	   	if(document.myForm.phone.value.match(phoneNumber) ) {
	     document.getElementById("valConf").innerHTML = phoneConf;
	     document.myForm.phone.focus();
	     return false;
	   }
	} //form validation to confirm the form isn't empty 
	
	function resetForm() {
		document.myForm.name.focus();
		document.getElementById("valConf").innerHTML = " ";
	}//clears form and validation, also resets the focus to the name input box.