function loadimages()
{
  let sm=window.innerWidth;
  if(sm<=480)
  {
    $(".load").attr("src","loadtab.gif");
  }else if(sm<=768)
  {
    $(".load").attr("src","loadtab.gif");
  }
  else{
    $(".load").attr("src","load.gif");
  }
}
loadimages();

let sh=window.innerHeight;
let sw=window.innerWidth;
/*$(".load").attr("height",sh);
$(".load").attr("width",sw);*/

setTimeout(()=>{document.querySelector("#loader").classList.add("dis");},500)
setTimeout(()=>{$("#home").addClass("diso");},500);
document.querySelector("#home").classList.add("dis");
 $(".carousel-control-next-icon").hide();
 $(".carousel-control-prev-icon").hide();



 function change()
{
  $("#dpara").text("Thanks for downloading....")
}


function caroche() {
  let cw=window.innerWidth;
  if(cw<=981)
{

  $(".d-block").addClass("w-100");
  $("#size").text(cw);
}
else
{
  $(".d-block").removeClass("w-100");
  $("#size").text(cw);
}
}
function loading()
{
  document.querySelector("#fac").classList.add("dis");
  document.querySelector("#full").classList.add("dis");
  document.querySelector("#loader").classList.add("diso");
  
}
let x=document.cookie;
if(document.cookie.length!=0)
{
  
  $(".do").hide().fadeIn(2000);
$(".ctext").hide();
$(".c4").hide().fadeIn(2000);
$(".backsetter").hide().fadeIn(2000);
$(".caroanim").hide().fadeIn(2000);
$(".services").hide().fadeIn(2000);
$("#download").hide().fadeIn(2000);
$("#fac").hide().fadeIn(2000);
$(".ses").hide().fadeIn(2000);
$(".last").hide().fadeIn(2000);
}

  
if(document.cookie.length==0)
{
  
  $('body').bind('touchmove', function(e){e.preventDefault()})
$(".last").hide()
$(".do").hide();
$(".ses").hide();
  $("#fac").hide()
$("#download").hide();
$(".services").hide();
$(".backsetter").hide().fadeIn(2000);
$(".caroanim").hide()
$(".c4").hide();
$(".ctext").hide().fadeIn(2000);
var inh=window.innerHeight;
var inw=window.innerWidth;
$(".backsetter").attr("backgroundSize",inh);
$(".backsetter").attr("backgroundSize",inw);
$(".ctext").fadeOut(2000);
setTimeout(()=>{
    $(".c4").hide().fadeIn(2000);
},4000);
setTimeout(()=>{
  $('body').unbind('touchmove');
$(".caroanim").hide().fadeIn(2000);
$(".services").hide().fadeIn(2000);
$("#download").hide().fadeIn(2000);

$("#fac").hide().fadeIn(2000);
$(".ses").hide().fadeIn(2000);
$(".do").hide().fadeIn(2000);
$(".last").hide().fadeIn(2000);
},6000);

  document.cookie="uservisit=logic;expires=Fri, 5 Aug 2023 01:00:00 UTC;";

}
caroche();
window.onresize=caroche;
