console.log("Hello World");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//toggle tips dropdowns
$('#dropdown1').click(function(){
  $( "#show1" ).toggle("display");
});
$('#dropdown2').click(function(){
  $( "#show2" ).toggle("display");
});
$('#dropdown3').click(function(){
  $( "#show3" ).toggle("display");
});

//let triangles come in
$('#triangle1').hover(function(){
  $("#triangle1").animate({marginLeft: "+=100px"});
});
$('#triangle2').hover(function(){
  $("#triangle2").animate({marginLeft: "-=100px"});
});
$('#triangle3').hover(function(){
  $("#triangle3").animate({marginLeft: "+=100px"});
});
$('#triangle4').hover(function(){
  $("#triangle4").animate({marginLeft: "-=100px"});
});
$('#triangle5').hover(function(){
  $("#triangle5").animate({marginLeft: "+=100px"});
});
$('#triangle6').hover(function(){
  $("#triangle6").animate({marginLeft: "-=100px"});
});
$('#triangle7').hover(function(){
  $("#triangle7").animate({marginLeft: "+=100px"});
});
$('#triangle8').hover(function(){
  $("#triangle8").animate({marginLeft: "-=100px"});
});
$('#triangle9').hover(function(){
  $("#triangle9").animate({marginLeft: "+=100px"});
});
$('#triangle10').hover(function(){
  $("#triangle10").animate({marginLeft: "-=100px"});
});
$('#triangle11').hover(function(){
  $("#triangle11").animate({marginLeft: "+=100px"});
});

//reset triangles
$('#reset').click(function(){
  location.reload();
});

$("#letgrow").click(function(){
  let x = 0;
  while (x == 0){
    $("#grow").animate({paddingTop: "+=10px"});
    $("#grow").animate({paddingBottom: "+=10px"});
    if ($("#letgrow").click()){
      x = 1;
    }
  }
});