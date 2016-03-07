var strInput="";
var strBase="";
var arrWords= [];

function enterWord() {
	//Getting the user's input 
	strInput = document.getElementById("userInput").value;
	
	//puts each word into an array.
	var arrTest = strInput.split(" "); 
	
	//Puts each word into the main array
	for(var i = 0; i < arrTest.length; i++) 
	{
		arrWords.push(arrTest[i]);
	}
	
	//Puts the new word into a string to be displayed
	strBase = strBase + " " + strInput; 
	
	//clears the text field
	document.getElementById("userInput").value = ""; 
	
	//makes each of the buttons up top visible
	document.getElementById("typeButton").style.visibility = "visible";
	document.getElementById("listButton").style.visibility = "visible";
	document.getElementById("analyticsButton").style.visibility = "visible";
}

function butType() {
	//makes it possible for the user to enter words
	document.getElementById("userInput").style.visibility = "visible";
	document.getElementById("typeSubmit").style.visibility = "visible";
	
	//Makes everything that is not necessary hidden
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("mostCommon").style.visibility = "hidden";
	document.getElementById("userWordParagraphP").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("listP").style.visibility = "hidden";
}

function butList() {
	//makes the list visible
	document.getElementById("listP").style.visibility = "visible";
	document.getElementById("listP").innerHTML = strBase;
	
	//Makes everything that is not necessary hidden
	document.getElementById("userWordParagraphP").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("mostCommon").style.visibility = "hidden";
	
}

function butAnalytics() {
	//Makes the word tester and most common word available
	document.getElementById("userWordTest").style.visibility = "visible";
	document.getElementById("userWordSubmit").style.visibility = "visible";
	document.getElementById("userWordParagraphP").style.visibility = "visible";
	document.getElementById("mostCommon").style.visibility = "visible";
	
	//Makes everything that is not necessary hidden
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("listP").style.visibility = "hidden";
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
}

function searchWord() {
	//gets the user input and sees how many times it exists in the array
	strInput = document.getElementById("userWordTest").value;
	var intCount=0;
	for(var i = 0; i < arrWords.length; i++){
		if( strInput == arrWords[i]){
			intCount++;
		}
	}
	//Displays how many times the entered word is in the array
	document.getElementById("mostCommonWordP").style.visibility = "visible";
	document.getElementById("userWordParagraphP").innerHTML = strInput + " has been typed in " + intCount + " times.";
	
	//Blanks out the text field
	document.getElementById("userWordTest").value = "";
	}

function displayMostCommonWord() {
	var intTempCounter = 0;
	var strMCWHolder1="";
	var strMCWHolder2="";
	var intCount=0;
	var strMostCommonWord="";
	
	for(var i = 0; i < arrWords.length; i++)
	{
		//It holds the value of this current position in the main array
        strMCWHolder1 = arrWords[i];
        intTempCounter = 1;
        
        for(var j = 0; j < arrWords.length; j++)
        {
			//It holds the value of this current position in the main array
            strMCWHolder2 = arrWords[j];
                
			//if they equal each other then the counter increases
            if(strMCWHolder1 == strMCWHolder2)
            {
                intTempCounter++;
				
            }
            
			//if the counter is larger than the largest, then it becomes the most common word
            if(intTempCounter > intCount)
            {
                intCount = intTempCounter;
                strMostCommonWord = strMCWHolder1;
            }
        }
		//Displays the most common word
		document.getElementById("mostCommonWordP").style.visibility = "visible";
        document.getElementById("mostCommonWordP").innerHTML = "The most common word is " + strMostCommonWord;	
	}
}
