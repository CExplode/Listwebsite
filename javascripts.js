//Creates the global variables for the input, the list, and the array

//http://www.chartjs.org/docs/

var strInput="";
var strBase="";
var arrWords= [];
var myBarChart;

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
}

function butType() {
	//makes it possible for the user to enter words
	
	
	myBarChart.destroy();
}

function butList() {
	//makes the list visible
	document.getElementById("listP").style.visibility = "visible";
	document.getElementById("listP").innerHTML = strBase;
	
	myBarChart.destroy();
}

function butAnalytics() {
	myBarChart.destroy();
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
	document.getElementById("mostCommonWordP").style.visibility = "hidden";
	document.getElementById("userWordParagraphP").innerHTML = strInput + " has been typed in " + intCount + " times.";
	
	//Blanks out the text field
	document.getElementById("userWordTest").value = "";
	}

function displayMostCommonWord() {
	//creates the required variables
	var intTempCounter = 0;
	var strMCWHolder1="";
	var strMCWHolder2="";
	var intCount=0;
	var strMostCommonWord="";
	var strMostCommonWord2="";
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
	
	
	
	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext("2d");
	var data = {
		labels: [strMostCommonWord, "2nd", "3rd"],
		datasets:
		[
        {
            label: "Frequency of Words:",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [intCount-1, 5, 3]
        }
		]
	};
	myBarChart = new Chart(ctx).Bar(data,{responsive : true});
}

var resetCanvas = function () {
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

