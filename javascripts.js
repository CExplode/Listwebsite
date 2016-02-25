var strInput="";
var strBase="";
var arrWords= [];

function enterWord() {
	strInput = document.getElementById("userInput").value;
	arrWords.push(strInput);
	strBase = strBase + " " + strInput;
	document.getElementById("userInput").value = "";	
	
	document.getElementById("typeButton").style.visibility = "visible";
	document.getElementById("listButton").style.visibility = "visible";
	document.getElementById("analyticsButton").style.visibility = "visible";
}

function butType() {
	document.getElementById("userInput").style.visibility = "visible";
	document.getElementById("typeSubmit").style.visibility = "visible";
	
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("mostCommon").style.visibility = "hidden";
	document.getElementById("userWordParagraphP").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("listP").style.visibility = "hidden";
}

function butList() {
	document.getElementById("listP").style.visibility = "visible";
	
	document.getElementById("userWordParagraphP").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("mostCommon").style.visibility = "hidden";
	
	document.getElementById("listP").innerHTML = "The current list of words is: " + strBase;
}

function butAnalytics() {
	document.getElementById("userWordTest").style.visibility = "visible";
	document.getElementById("userWordSubmit").style.visibility = "visible";
	document.getElementById("userWordParagraphP").style.visibility = "visible";
	document.getElementById("mostCommon").style.visibility = "visible";
	
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("listP").style.visibility = "hidden";
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
}

function searchWord() {
	strInput = document.getElementById("userWordTest").value;
	var intCount=0;
	for(var i = 0; i < arrWords.length; i++){
		if( strInput == arrWords[i]){
			intCount++;
		}
	}
	
	document.getElementById("mostCommonWordP").style.visibility = "visible";
	document.getElementById("userWordParagraphP").innerHTML = strInput + " has been typed in " + intCount + " times.";
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
        strMCWHolder1 = arrWords[i];
        intTempCounter = 1;
        
        for(var j = 0; j < arrWords.length; j++)
        {
            strMCWHolder2 = arrWords[j];
                
            if(strMCWHolder1 == strMCWHolder2)
            {
                intTempCounter++;
				
            }
            
            if(intTempCounter > intCount)
            {
                intCount = intTempCounter;
                strMostCommonWord = strMCWHolder1;
            }
        }
		document.getElementById("mostCommonWordP").style.visibility = "visible";
        document.getElementById("mostCommonWordP").innerHTML = "The most common word is " + strMostCommonWord;	
	}
}
