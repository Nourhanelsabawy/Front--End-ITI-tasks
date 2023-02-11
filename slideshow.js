var pic=1;
var test = false;
var x;
function next()
{if(pic<4)
    {pic+=1;
    document.querySelector("#id").src =(pic+".jpg")}}                                        
function previous(){
    if(pic>1)
    { pic-=1;
    document.querySelector("#id").src =(pic+".jpg") }}   
function stop(){
    if(test){
        test = false;
        clearInterval(x)}
}
function slideshow(){
    if(!test){ 
        test = true;   
        x = setInterval(function(){
        pic+=1;
        if(pic>4) {
            pic = 1;}
        document.querySelector("#id").src=(pic+".jpg");
        },1000);}}