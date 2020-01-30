console.log("Hello World");
let i = 0;
function slideshowNext(){
	if(i == 0){
		i++;
	}else if(i == 1){
		i++;
	}else{

		i = 0;
	} 
});

function slideshowPrev(){
	if(i == 2){
		i--;
	}else if(i == 1){
		i--;
	}else{
		
		i = 2;
	} 
});
$(".prev").click(slideshowPrev);