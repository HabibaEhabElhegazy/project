let circle = document.getElementById("circle");
let upbtn = document.getElementById("upbtn");
let downbtn = document.getElementById("downbtn");
var rotatevalu = circle.style.transform;
var rotatesum;

upbtn.onclick =function(){
    rotatesum =rotatevalu + "rotate(-90deg)";
    circle.style.transform= rotatesum ;
    rotatevalu= rotatesum;
}
downbtn.onclick =function(){
    rotatesum =rotatevalu + "rotate(90deg)";
    circle.style.transform= rotatesum ;
    rotatevalu= rotatesum;
}