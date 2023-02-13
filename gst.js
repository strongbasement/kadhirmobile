
function imgsizeres()
{
    var sw=window.innerWidth;
    $(".gstimg").attr("width",sw);
}
imgsizeres()
window.onresize=imgsizeres;
for(var i=0;i<3;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    var img2=this.innerHTML;
    console.log(img2);
    chimg(img2);
    switch(img2)
    {
        case "1":
            document.querySelector(".btn1").style.backgroundColor="yellow";
            document.querySelector(".btn2").style.backgroundColor="white";
            document.querySelector(".btn3").style.backgroundColor="white";
            break;

            case "2":
            document.querySelector(".btn1").style.backgroundColor="white";
            document.querySelector(".btn2").style.backgroundColor="yellow";
            document.querySelector(".btn3").style.backgroundColor="white";
            break;
            case "3":
            document.querySelector(".btn1").style.backgroundColor="white";
            document.querySelector(".btn2").style.backgroundColor="white";
            document.querySelector(".btn3").style.backgroundColor="yellow";
            break;
    }
});
}

function chimg(img)
{
    
    $(".gstimg").attr("src",img+".jpg");
}