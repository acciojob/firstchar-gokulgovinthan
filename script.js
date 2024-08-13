function firstChar(text) { let word= text.trim().split(" ")[0];
			return word ? word[0]:"";			  
}

// Do not change the code belowf
//Uncomment the following line to show the prompt pop
const text = prompt("Enter text:");
alert(firstChar(text));
