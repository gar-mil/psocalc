// Associate each possible formula result with a Section ID
var sectionID = {
	"0": "Viridia",
	"1": "Greenill",
	"2": "Skyly",
	"3": "Bluefull",
	"4": "Purplenum",
	"5": "Pinkal",
	"6": "Redria",
	"7": "Oran",
	"8": "Yellowboze",
	"9": "Whitill"
};

// Assign values to each key
var keyValues = {
	"2": "0",
	"d": "0",
	"n": "0",
	"x": "0",
	"F": "0",
	"P": "0",
	"Z": "0",
	"(": "0",
	"<": "0",
	"3": "1",
	"e": "1",
	"o": "1",
	"y": "1",
	"G": "1",
	"Q": "1",
	")": "1",
	"=": "1",
	"[": "1",
	"4": "2",
	"f": "2",
	"p": "2",
	"z": "2",
	"H": "2",
	"R": "2",
	"*": "2",
	" ": "2",
	"\\": "2",
	"5": "3",
	"g": "3",
	"q": "3",
	"I": "3",
	"S": "3",
	"!": "3",
	"+": "3",
	"{": "3",
	"]": "3",
	"?": "3",
	"6": "4",
	"h": "4",
	"r": "4",
	"J": "4",
	"T": "4",
	"@": "4",
	"^": "4",
	"}": "4",
	"\"": "4",
	",": "4",
	"7": "5",
	"i": "5",
	"s": "5",
	"A": "5",
	"K": "5",
	"U": "5",
	"#": "5",
	"-": "5",
	"_": "5",
	"|": "5",
	"8": "6",
	"j": "6",
	"t": "6",
	"B": "6",
	"L": "6",
	"V": "6",
	"~": "6",
	"'": "6",
	".": "6",
	"9": "7",
	"a": "7",
	"k": "7",
	"u": "7",
	"C": "7",
	"M": "7",
	"W": "7",
	"%": "7",
	"/": "7",
	"0": "8",
	"b": "8",
	"l": "8",
	"v": "8",
	"D": "8",
	"N": "8",
	"X": "8",
	"&": "8",
	":": "8",
	"1": "9",
	"c": "9",
	"m": "9",
	"w": "9",
	"E": "9",
	"O": "9",
	"Y": "9",
	"`": "9",
	";": "9"
}

// Factor the class offset into the formula
var classOffset = {
	"HUmar": "5",
	"HUnewearl": "6",
	"HUcast": "7",
	"HUcaseal": "4",
	"RAmar": "8",
	"RAmarl": "6",
	"RAcast": "9",
	"RAcaseal": "0",
	"FOmar": "5",
	"FOmarl": "1",
	"FOnewm": "2",
	"FOnewearl": "3"
}

function calcInput()
{
	var characterName = document.getElementById("nameEntry").value; // Find the entered character name
	var classSelect = document.getElementById("classSelect").value; // Find the chosen character class
	if (characterName.length === 0) // If no character name has been entered then clean up the display section
	{
		document.getElementById("tempoutput").innerHTML = ''; // Clean up output
	}
	else
	{
		var offset = classOffset[classSelect]; // What is our class offset?
		var charArray = characterName.split(""); // Split the entered name into each individual letter
		var arrayLength = charArray.length; // Find length of name
		var subtotal = 0; // Initialize subtotal variable
		for (i = 0; i < arrayLength; i++)
		{
			var currentKey = charArray[i]; // What letter are we on?
			subtotal += +keyValues[currentKey]; // Find value of that letter and add it to subtotal
			
			// Debugging: Uncomment this line if you'd like the console log to output the value for every letter as it works
			//console.log(currentKey + ': ' + keyValues[currentKey]);
		}
		var totalValue = +subtotal + +offset; // Add character offset to subtotal
		var totalStr = ''+totalValue; // Convert totalValue to a string
		var formulaResult = totalStr.slice(-1); // Find the last number in the totalStr string
		var whatSectionID = sectionID[formulaResult]; // Find the human readable name of our Section ID
		document.getElementById("tempoutput").innerHTML = whatSectionID; // Display Section ID
		
		// Debugging: Uncomment these lines if you'd like the console log to output the letter subtotal, class offset, character name total value, and the Section ID value
		//console.log('Subtotal: ' + subtotal);
		//console.log('Class offset: ' + offset);
		//console.log('Total: ' + totalValue);
		//console.log('Section ID value: ' + formulaResult);
		//console.log('Section ID name: ' + whatSectionID);
	}
}
