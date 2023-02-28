let hr=document.getElementsByClassName("number")[0];
let min=document.getElementsByClassName("number")[1];
let sec=document.getElementsByClassName("number")[2];
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let count=0;
let secs=0;
let mins=0;
let hrs=0;
let started=false;
start.addEventListener("click",function(){
    started=true;
    stopWatch();
})
stop.addEventListener("click",function(){
    started=false;
})
reset.addEventListener("click",function(){
    started=false;
     count=0;

    secs=0;

    mins=0;

     hrs=0;
     sec.innerHTML="0"+secs;
        min.innerHTML="0"+mins;
        hr.innerHTML="0"+hrs;
   

    
})
function stopWatch(){
    if(started){
        count++;

        if(count==100){
            count=0;
            secs++;
        }
        if(secs==60){
            secs=0;
            mins++;
        }
        if(mins==60){
            mins=0;
            hrs++
        }
        if(secs<10){
            sec.innerHTML="0"+secs;
         }
         else{
            sec.innerHTML=secs;
         }
         if(mins<10){
            min.innerHTML="0"+mins;
         }
         else{
            min.innerHTML=mins;
         }
        if(hrs<10){
            hr.innerHTML="0"+hrs;
        }
        else{
            hr.innerHTML=hrs;
        }
         
        setTimeout(stopWatch,10);

    }
}