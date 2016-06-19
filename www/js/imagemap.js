// JavaScript Document

// Fase 1: test de browser of hij kan swappen

var canSwap = document.images ? true : false ;
var imagePath = "../images/imageMap/";
var option = ['one','two','three','four','five',];
 
// Fase 2: de image swap routine
function swapImage(theImageSource) {  
	if (canSwap) {
		var myImage = document.getElementById("foodImg");
			//if (!(imageId == selImage)) {
				myImage.src = imagePath + theImageSource + ".jpg";	
			//}	
	}	
} 			

// Preloaden images

var imagesArray = new Array('kruiden.jpg', 'vlees.jpg', 'vis.jpg', 'noten.jpg', 'groeten.jpg');			
var loadArray = new Array();

function preloadImages () {
	if (canSwap) {
		
		for (var i=0; i < imagesArray.length; i++) {
			loadArray[i] = new Image();
			loadArray[i].src = imagePath + imagesArray[i];
			console.log(loadArray[i].src);
		}
	}
} 



// toggle tag(div) visibility
// collect all tag id's in one array (letter's, anders dubbele id's)


function switchDiv(div) {
	
	for (var i = 0; i < option.length; i++)	{
		var obj = document.getElementById(option[i]);
		if (option[i] === div) {
			obj.style.display = "block";
		} else{
			 if(document.getElementById(option[i])){
				 document.getElementById(option[i]).style.display ="none";	
			 }
		}
	}
}



