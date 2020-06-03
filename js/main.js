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

// Generate password
function generatePassword() { 
	
	var password = ''; 
	
	var includeLowercase = 'abcdefghijklmnopqrstuvwxyz';
	var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var includeNumbers = '0123456789';
	var includeSymbols = '@%+\/!#$?';
	
	var includeElements = '';
	
	if (document.getElementById('includeLowercase').checked === true) {		
		var includeElements = includeElements + includeLowercase;		
	}
	
	if (document.getElementById('includeUppercase').checked === true) {		
		var includeElements = includeElements + includeUppercase;		
	}
	
	if (document.getElementById('includeNumbers').checked === true) {		
		var includeElements = includeElements + includeNumbers;		
	}
	
	if (document.getElementById('includeSymbols').checked === true) {		
		var includeElements = includeElements + includeSymbols;		
	}
	
	if (document.getElementById('includeLowercase').checked === false &&
		document.getElementById('includeUppercase').checked === false && 
		document.getElementById('includeNumbers').checked === false && 
		document.getElementById('includeSymbols').checked === false) {
		
		console.log('Error code goes here');
		
	}

	for (i = 1; i <= 8; i++) { 
		
		var char = Math.floor(Math.random() * includeElements.length + 1); 
		password += includeElements.charAt(char) 
	} 
	
	return password; 
} 
function readySetGo() { 
	document.getElementById('randomResult').value = generatePassword();
} 