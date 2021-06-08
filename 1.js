const Sliders = document.querySelector(".sliders");



var counter = 1;
var Img = Sliders.querySelectorAll("img")
var L = Sliders.querySelectorAll("img").length -2

function Next(){
    console.log(counter);
    if (counter <= L && counter >= 0){
        Sliders.style.transition = "transform 0.5s";
        Sliders.style.transform = "translateX("+ -500*(counter+1)+"px)";
        counter++;
        setTimeout(()=>{
           
                if(Img[counter].id === "first"){
                    Sliders.style.transition = "transform 0s";
                    Sliders.style.transform = "translateX("+ -500+"px)";
                    counter = 1;
                }
            
        } , 500)
    }
       
}
function Prev(){
    console.log("p "+counter);
    if (counter <= L && counter >= 0){   
        Sliders.style.transition = "transform 0.5s";
        Sliders.style.transform = "translateX("+ -500*(counter-1)+"px)";
        counter--;
        setTimeout(()=>{
            
                if(Img[counter].id === "last"){
                    Sliders.style.transition = "transform 0s";
                    Sliders.style.transform = "translateX("+ -500*(L)+"px)";
                    counter = L;
                }
            
        } , 500)
    }else{
        counter = 1;
    }

}