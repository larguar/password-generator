// Add a huge range of numbers to form select automatically
(function() {
	
	// Get the select by ID
	var select = document.getElementById('passwordLength'),
    
    // Create a document fragment to hold the options while we create them
    fragment = document.createDocumentFragment();
    
    // Specify number range for select
    for (var i = 8; i <= 128; i++) {
	    
	    // Creates the <option> element around numbers
        var option = document.createElement('option');
        
        // Outputs numbers
        option.value = i;
        
        // Set custom text content
        option.appendChild(document.createTextNode(i));
        
        // Append <option> to the document fragment
        fragment.appendChild(option);
    }
    // Append the document fragment to the DOM (vs. setting inner HTML a bunch of times)
    select.appendChild(fragment);
    
}());

// Generate password functionality
function generatePassword() { 
	
	// Start with blank values for password and character options
	var password = ''; 
	var includeElements = '';
	
	// Add value options for each check box
	var includeLowercase = 'abcdefghijklmnopqrstuvwxyz';
	var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var includeNumbers = '01234567890123456789';
	var includeSymbols = '@%+\/!#$?@%+\/!#$?';
	
	// If lowercase box is checked, add lowercase values towards character options
	if (document.getElementById('includeLowercase').checked === true) {		
		var includeElements = includeElements + includeLowercase;		
	}
	
	// If uppercase box is checked, add uppercase values towards character options
	if (document.getElementById('includeUppercase').checked === true) {		
		var includeElements = includeElements + includeUppercase;		
	}
	
	// If numbers box is checked, add numbers values towards character options
	if (document.getElementById('includeNumbers').checked === true) {		
		var includeElements = includeElements + includeNumbers;		
	}
	
	// If symbols box is checked, add symbols values towards character options
	if (document.getElementById('includeSymbols').checked === true) {		
		var includeElements = includeElements + includeSymbols;		
	}
	
	// If none of the boxes are checked, alert the user
	if (document.getElementById('includeLowercase').checked === false &&
		document.getElementById('includeUppercase').checked === false && 
		document.getElementById('includeNumbers').checked === false && 
		document.getElementById('includeSymbols').checked === false) {
		
		alert('You must check at least one of the boxes.');
		
	}
	
	// Pull the number the user selected for password length
	var passwordLength = document.getElementById('passwordLength');
	var lengthValue = passwordLength.options[passwordLength.selectedIndex].text;
	
	// For the number of characters the user selected, generate a random assortment of characters based on the character options the user selected
	
	// Sets character count to the number the user selected
	for (i = 1; i <= lengthValue; i++) { 
		
		// Generates a random collection of characters out of the checked values
		var char = Math.floor(Math.random() * includeElements.length + 1); 
		password += includeElements.charAt(char);
	} 	
	return password; 
	
}

// Add result to my ID when function takes place (when button is clicked)
function readySetGo() { 
	document.getElementById('randomResult').value = generatePassword();
} 