// add a huge range of numbers to form select automatically
(function() {
	
	// get the select by ID
	var select = document.getElementById('passwordLength'),
    
    // create a document fragment to hold the options while we create them
    fragment = document.createDocumentFragment();
    
    // specify number range for select
    for (var i = 8; i <= 128; i++) {
	    
	    // creates the <option> element around numbers
        var option = document.createElement('option');
        
        // outputs numbers
        option.value = i;
        
        // set custom text content
        option.appendChild(document.createTextNode(i));
        
        // append <option> to the document fragment
        fragment.appendChild(option);
    }
    // append the document fragment to the DOM (vs. setting inner HTML a bunch of times)
    select.appendChild(fragment);
    
}());