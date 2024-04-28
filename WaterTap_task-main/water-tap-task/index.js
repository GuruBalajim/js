

var tapOpenBtnEl = document.getElementById("tapOpenBtn");
var waterFlow = document.getElementById("waterFlowContainerEl");

var watersEl = document.getElementById("waterEl")
var tapstatus = "OFF";

waterFlow.style.backgroundColor="White";

var H = 500;
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
            H = H-20;
            MT = MT+20;
            watersEl.style.height = H+"px";
            watersEl.style.marginTop = MT+"px";
                if(H===0 || MT===500|| flow=="OFF"){
                    clearInterval(intervalIdEl);
                    waterFlow.style.backgroundColor="White";
                    flow = "ON";
                    }
        },1000);
        
    }
        
    }
    else if(tapstatus=="ON"){
        flow = "OFF";
        tapOpenBtnEl.style.backgroundColor="red";
        tapstatus = "OFF";
        waterFlow.style.backgroundColor="White";
    }
   



}
