$(document).ready(function(){
	var $body = $("body"); //what element  to create 16x16 grid on
	$("body").append('<button type="button" id="clear">Clear!</button>');
	$("body").append('<div id="main-div"></div>');
	MakeGrid(16);
	//clearing function
	$("#clear").click(function(event) {
		ClearGrid();
		MakeGrid(prompt("How large of a grid?  Large grids will take a while to create."));
	});
});

function MakeGrid(size){
	console.log("MakeGrid Called with: " + size);
	var gridSizeLimit = 100;
	if(typeof Number(size) != 'number')
	{
		console.log("Error, grid size not number: " + size);
		size = 16;
	}
	if (size > gridSizeLimit){
		size = gridSizeLimit;
		alert("Max size is 2000, using size 2000.")
	}
	//create 16x16 div
	$("#main-div").append('<table id="format-block"></table>');
	for (var i = 0; i < size; i++){
		//format line
		$("#format-block").append('<tr class="row' + i + '"></tr>');
		for (var j = 0; j < size; j++){
			//creat divs
			$(".row" + i).append('<td><div class="component-div"></div></td>');
		}
	}
	//format CSS
	$("#main-div").css('height', '100%');
	$("#main-div").css('width', '100%');
	setUpDraw();
}

function ClearGrid(){
	$("#main-div").empty();
}

function setUpDraw(){ 
	//drawing function
	$(".component-div").mouseleave(function() {
		$(this).css('background-color', '#000000');
	});
}