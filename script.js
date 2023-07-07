var side = document.querySelector(".side-nav");
var menu = document.querySelector(".menu");
var x= 1;
menu.addEventListener("click",function(){if (x==1){

    side.style.right = "0px"
    x=0
}else{
    side.style.right = "-300px"
    x=1

}
})