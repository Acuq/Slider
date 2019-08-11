var slideLeft = document.querySelector(".block__slide-left");
var slideRight = document.querySelector(".block__slide-right");

var imgArray = document.querySelectorAll(".block__img");
var arrayLenght = imgArray.length - 1;
var slideNumber = 0;

slideLeft.onclick = function(){
    
    if(slideNumber == 0){
        imgArray[slideNumber].style.display = "none";
        slideNumber = arrayLenght;
        imgArray[slideNumber].style.display = "block";
    }
    
    else{
        imgArray[slideNumber - 1].style.display = "block";
        imgArray[slideNumber].style.display = "none";
        slideNumber--;
    }
}

slideRight.onclick = function(){
    
    if(slideNumber < arrayLenght){
        imgArray[slideNumber + 1].style.display = "block";
        imgArray[slideNumber].style.display = "none";
        slideNumber++;

    }
    
    else{
        slideNumber = 0;
        imgArray[slideNumber].style.display = "block";
        imgArray[slideNumber + arrayLenght].style.display = "none";
    }
}