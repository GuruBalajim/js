
var bottomTank =document.getElementById("bTank") 
var tapOpenBtnEl = document.getElementById("tapOpenBtn1");
var waterFlow = document.getElementById("waterFlowContainerEl1");

var watersEl = document.getElementById("waterEl1")
var tapstatus = "OFF";

waterFlow.style.backgroundColor="White";


var H = 250;
var MT =0;

var flow = "ON";

function opentap(){


    if(tapstatus=="OFF"){
        tapOpenBtnEl.style.backgroundColor="green";
        tapstatus = "ON";
        watersEl.style.borderTopLeftRadius = "0px";
        watersEl.style.borderTopRightRadius = "0px";
    
        if(H>0){
        waterFlow.style.backgroundColor="aqua";
        var intervalIdEl = setInterval(function(){
            H = H-1;
            MT = MT+1;
            watersEl.style.height = H+"px";
            watersEl.style.marginTop = MT+"px";

            bottomTank.style.height = MT + 0.1 + "px";
            bottomTank.style.backgroundColor ="aqua"

                if(H===0 || MT===250|| flow=="OFF"){
                    clearInterval(intervalIdEl);
                    waterFlow.style.backgroundColor="White";
                    flow = "ON";
                    }
        },30);
        
    }
        
    }
    else if(tapstatus=="ON"){
        flow = "OFF";
        tapOpenBtnEl.style.backgroundColor="red";
        tapstatus = "OFF";
        waterFlow.style.backgroundColor="White";
    }
   



}
var bottomTank1 =document.getElementById("bTank") ;
var tapOpenBtnEl2 = document.getElementById("tapOpenBtn2");
var waterFlow2 = document.getElementById("waterFlowContainerEl2");

var watersEl2 = document.getElementById("waterEl2")
var tapstatus2 = "OFF";

waterFlow2.style.backgroundColor="White";

var H1 =250;
var MT1 =0;

var flow1 = "ON";

function opentap2(){


    if(tapstatus2=="OFF"){
        tapOpenBtnEl2.style.backgroundColor="green";
        tapstatus2 = "ON";
        watersEl2.style.borderTopLeftRadius = "0px";
        watersEl2.style.borderTopRightRadius = "0px";
    
        if(H>0){
        waterFlow2.style.backgroundColor="aqua";
        var intervalIdEl2 = setInterval(function(){
            H1 = H1-1;
            MT1 = MT1+1;
            watersEl2.style.height = H1+"px";
            watersEl2.style.marginTop = MT1+"px";
            
            bottomTank1.style.height = MT + 0.1 + "px";
            bottomTank1.style.backgroundColor ="aqua"

                if(H1===0 || MT1===250|| flow1=="OFF"){
                    clearInterval(intervalIdEl2);
                    waterFlow2.style.backgroundColor="White";
                    flow1 = "ON";
                    }
        },30);
        
    }
        
    }
    else if(tapstatus2=="ON"){
        flow1 = "OFF";
        tapOpenBtnEl2.style.backgroundColor="red";
        tapstatus2 = "OFF";
        waterFlow2.style.backgroundColor="White";
    }
   



}
var bottomTank2 =document.getElementById("bTank") ;
var tapOpenBtnEl3 = document.getElementById("tapOpenBtn3");
var waterFlow3 = document.getElementById("waterFlowContainerEl3");

var watersEl3 = document.getElementById("waterEl3")
var tapstatus3 = "OFF";

waterFlow3.style.backgroundColor="White";

var H2 = 250;
var MT2 =0;

var flow2 = "ON";

function opentap3(){


    if(tapstatus3=="OFF"){
        tapOpenBtnEl3.style.backgroundColor="green";
        tapstatus3 = "ON";
        watersEl3.style.borderTopLeftRadius = "0px";
        watersEl3.style.borderTopRightRadius = "0px";
    
        if(H2>0){
        waterFlow3.style.backgroundColor="aqua";
        var intervalIdEl3= setInterval(function(){
            H2 = H2-1;
            MT2 = MT2+1;
            watersEl3.style.height = H2+"px";
            watersEl3.style.marginTop = MT2+"px";
            
            bottomTank2.style.height = MT + 0.1 + "px";
            bottomTank2.style.backgroundColor ="aqua"

                if(H2===0 || MT2===250|| flow2=="OFF"){
                    clearInterval(intervalIdEl3);
                    waterFlow3.style.backgroundColor="White";
                    flow2 = "ON";
                    }
        },30);
        
    }
        
    }
    else if(tapstatus3=="ON"){
        flow2 = "OFF";
        tapOpenBtnEl3.style.backgroundColor="red";
        tapstatus3 = "OFF";
        waterFlow3.style.backgroundColor="White";
    }
   



}