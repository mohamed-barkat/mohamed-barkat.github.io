var logo=$("#logo");


logo.on('click',()=>{

    logo.animate( {opacity: 0.25,},1000,function(){
        logo.animate({opacity:1},500)});
    console.log("s")
})
var spechalHeader=$(".main-heading");

spechalHeader.each(function (index, element) {
    
    $(this).on('click',()=>{

$(this).animate({
opacity:0.3,

},2000,()=>{
    $(this).animate({opacity:1},1000)
})

})
});





document.addEventListener("DOMContentLoaded",function(){

    $("#splash").animate({opacity:0.5},1000).fadeOut(1000);

}, false);