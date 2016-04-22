//Creates the global variables for the input, the list, and the array

//http://www.chartjs.org/docs/

var strInput="";
var strBase="";
var arrWords= [];
var myBarChart;
var intHowManyGraphs = 0;

$(document).ready(function() {
	$("#userInput").fadeIn(3000);
	$("#typeSubmit").fadeIn(3000);
});

$(document).ready(function(){
	$("#typeSubmit").click(function(){
		$("#userInput").fadeOut();
		$("#typeSubmit").fadeOut();
		$("#typeButton").fadeIn(2000);
		$("#listButton").fadeIn(2000);
		$("#analyticsButton").fadeIn(2000);
		$("#companyP").fadeTo(2000, 0.5);	
	});
});

$(document).ready(function(){
	$("#typeButton").click(function(){
		$("#userWordTest").fadeOut();
		$("#userWordSubmit").fadeOut();
		$("#mostCommon").fadeOut();
		$("#listP").fadeOut();
		$("#userWordParagraphP").fadeOut();
		$("#userInput").fadeIn(2000);
		$("#typeSubmit").fadeIn(2000);
	});
});

$(document).ready(function(){
	$("#listButton").click(function(){
		$("#userWordTest").fadeOut();
		$("#userWordSubmit").fadeOut();
		$("#mostCommon").fadeOut();
		$("#userWordParagraphP").fadeOut();
		$("#userInput").fadeOut();
		$("#typeSubmit").fadeOut();
		$("#listP").fadeIn(2000);
	});
});

$(document).ready(function(){
	$("#analyticsButton").click(function(){
		$("#userInput").fadeOut();
		$("#typeSubmit").fadeOut();
		$("#listP").fadeOut();
		$("#userWordTest").fadeIn(2000);
		$("#userWordSubmit").fadeIn(2000);
		$("#mostCommon").fadeIn(2000);
		$("#userWordParagraphP").fadeIn(2000);
});
});

function enterWord() {
	
	//If it is blank then dont submit
	var blnisValid = false;
	while (blnisValid == false)
	{
		//Getting the user's input 
		strInput = document.getElementById("userInput").value;
		if (strInput != "")
		{
			blnisValid = true;
		}
		else
		{
			return;
		}
	}
	
	//puts each word into an array.
	var arrTest = strInput.split(" "); 
	
	//Gets rid of any empty space
	for(var j = 0; j < arrTest.length; j++)
	{
		if (arrTest[j] == "")
		{
			arrTest.splice(j,1);
			j -= 1;
		}
	}
	
	//Puts each word into the main array
	for(var i = 0; i < arrTest.length; i++) 
	{
		arrWords.push(arrTest[i]);
	}
	
	//Puts the new word into a string to be displayed
	strBase = strBase + " " + strInput; 
	
	//clears the text field
	document.getElementById("userInput").value = ""; 
	
}

function butType() {
	
}

function butList() {
	//makes the list visible
	document.getElementById("listP").style.visibility = "visible";
	document.getElementById("listP").innerHTML = strBase;
	
	console.log(intHowManyGraphs);
	
	for(var i = 0; i < intHowManyGraphs; i++)
	{
		myBarChart.destroy();
		resetCanvas();
	}
	intHowManyGraphs = 0;
}

function butAnalytics() {
	
	
}

function searchWord() {
	
	//If it is blank then do not submit
	var blnisValid = false;
	while (blnisValid == false)
	{
		//gets the user input and sees how many times it exists in the array
		strInput = document.getElementById("userWordTest").value;
		if (strInput != "")
		{
			blnisValid = true;
		}
		else
		{
			return;
		}
	}
	
	var intCount=0;
	for(var i = 0; i < arrWords.length; i++){
		if( strInput == arrWords[i]){
			intCount++;
		}
	}
	//Displays how many times the entered word is in the array
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("userWordParagraphP").innerHTML = strInput + " has been typed in " + intCount + " times.";
	
	//Blanks out the text field
	document.getElementById("userWordTest").value = "";
	}

function displayMostCommonWord() {
	
	intHowManyGraphs +=1;
	
	
	var arrWordsHold=[];
	arrWordsHold = arrWords.slice(0);
	 
	//creates the required variables
	var intTempCounter = 0;
	var strMCWHolder1="";
	var strMCWHolder2="";
	var intCount=0;
	var strMostCommonWord="";
	
	//loop goes through the whole array
	for(var i = 0; i < arrWords.length; i++)
	{
		//It holds the value of this current position in the main array
        strMCWHolder1 = arrWords[i];
        intTempCounter = 1;
        
		//loop goes through the whole array
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
		
	}
		
	for(var q = 0; q < arrWords.length; q++)
	{
		if (arrWords[q] == strMostCommonWord)
		{
			 
			arrWords.splice(q,1);
			q -= 1;
			 
		}
	}
		
	//creates the required variables
	intTempCounter = 0;
	strMCWHolder1="";
	strMCWHolder2="";
	intCount2=0;
	var strMostCommonWord2="";
	
	//loop goes through the whole array
	for(var i = 0; i < arrWords.length; i++)
	{
		//It holds the value of this current position in the main array
        strMCWHolder1 = arrWords[i];
        intTempCounter = 1;
        
		//loop goes through the whole array
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
            if(intTempCounter > intCount2)
            {
                intCount2 = intTempCounter;
                strMostCommonWord2 = strMCWHolder1;
            }
        }
		
	}
	
	for(var q = 0; q < arrWords.length; q++)
	{
		if (arrWords[q] == strMostCommonWord2)
		{
			 
			arrWords.splice(q,1);
			q -= 1;
			 
		}
	}
	
	//creates the required variables
	intTempCounter = 0;
	strMCWHolder1="";
	strMCWHolder2="";
	intCount3=0;
	var strMostCommonWord3="";
	
	//loop goes through the whole array
	for(var i = 0; i < arrWords.length; i++)
	{
		//It holds the value of this current position in the main array
        strMCWHolder1 = arrWords[i];
        intTempCounter = 1;
        
		//loop goes through the whole array
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
            if(intTempCounter > intCount3)
            {
                intCount3 = intTempCounter;
                strMostCommonWord3 = strMCWHolder1;
            }
        }
		//Displays the most common word
		document.getElementById("mostCommonWordP").style.visibility = "visible";
        document.getElementById("mostCommonWordP").innerHTML = "The 3 common word is " +strMostCommonWord + strMostCommonWord2 + strMostCommonWord3 ;
	}
	
	 arrWords = arrWordsHold.slice(0);
	 console.log(arrWords);
	
	if(intCount == 0){
		intCount = 1;
		strMostCommonWord = "N/A";
	}
	if(intCount2 == 0){
		intCount2 = 1;
		strMostCommonWord2 = "N/A";
	}
	if(intCount3 == 0){
		intCount3 = 1;
		strMostCommonWord3 = "N/A";
	}
	
	
	
	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext("2d");
	var data = {
		labels: [strMostCommonWord, strMostCommonWord2, strMostCommonWord3],
		datasets:
		[
        {
            label: "Frequency of Words:",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [intCount - 1, intCount2 - 1, intCount3 - 1]
        }
		]	
	};
	myBarChart = new Chart(ctx).Bar(data,{responsive : true});
}

function resetCanvas() {
  $('#results-graph').remove(); // this is my <canvas> element
  $('#graph-container').append('<canvas id="results-graph"><canvas>');
  canvas = document.querySelector('#results-graph');
  ctx = canvas.getContext('2d');
  ctx.canvas.width = $('#graph').width(); // resize to parent width
  ctx.canvas.height = $('#graph').height(); // resize to parent height

  var x = canvas.width/2;
  var y = canvas.height/2;
  ctx.font = '10pt Verdana';
  ctx.textAlign = 'center';
  ctx.fillText('This text is centered on the canvas', x, y);
};
