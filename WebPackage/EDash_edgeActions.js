
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var myArray=new Array();var myNumber=3;$.getJSON("myData.json").success(function(data){console.log("incoming data: ",data);for(var i=0;i<data.lenght;i++){myArray.push({"name":data[i].name,"description":data[i].description});}
console.log(data[1].name);});yepnope({nope:['jquery-ui.min.js','jquery.ui.touch-punch.min.js','TweenMax.min.js','socket.io-1.0.6.js','Chart.js'],complete:init});var pieData=[{value:1,color:"#EC1C24",highlight:"#EC1C24",label:"Coffe"},{value:1,color:"#39B44A",highlight:"#39B44A",label:"Meetingroom PC"},{value:1,color:"#F6921E",highlight:"#F6921E",label:"Microwave"},{value:1,color:"#29AAE1",highlight:"#29AAE1",label:"Kettle"}];function init(){var ctx=document.getElementById("chart-area").getContext("2d");var myPie=new Chart(ctx).Doughnut(pieData,{animateRotate:false,segmentShowStroke:false,segmentStrokeWidth:0,animationEasing:"easeInExpo",animationSteps:50,animateScale:false,percentageInnerCutout:38,scaleShowLabels:true,legendTemplate:"<ul list-style: none; ><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"> &nbsp&nbsp <%=segments[i].value%> W </span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"});function UsagePercent(){var myTotal=0;for(var i=0;i<myPie.segments.length;i++){var myTotal=myTotal+myPie.segments[i].value;}
var myLegend="";for(var i=0;i<myPie.segments.length;i++){var myPercent=(myPie.segments[i].value/myTotal)*100;myLegend=myLegend.concat(Math.round(myPercent)+" <br><br> ");}
sym.$("myPieLegend").html(myLegend);console.log(myLegend);}
sym.$("CoffeWatt").html("0");sym.$("PcWatt").html("0");sym.$("MicroWatt").html("0");sym.$("KettleWatt").html("0");sym.$("MunktellWatt").html("0");var CoffeWDial=sym.$("CoffeWDial");var PcWDial=sym.$("PcWDial");var KettleWDial=sym.$("KettleWDial");var MicroWDial=sym.$("MicroWDial");var CoffeWatt=0;var MicroWatt=0;var PcWatt=0;var KettleWatt=0;var myPieLegend=myPie.generateLegend();console.log("Init function started!");var socket=io.connect('http://livinglab.powerprojects.se:5000');socket.on('connect',function(){socket.on('mqtt',function(msg){if(msg.topic=='coffeDegrees'){TweenMax.to(CoffeWDial,1,{css:{rotation:msg.payload,opacity:100},ease:Quad.easeIn,repeat:0});}
if(msg.topic=='coffeWatt'){myPie.segments[0].value=parseInt(msg.payload,10);myPie.update()
sym.$("CoffeWatt").html(msg.payload);UsagePercent();}
if(msg.topic=='PcDegrees'){TweenMax.to(PcWDial,1,{css:{rotation:msg.payload,opacity:100},ease:Quad.easeIn,repeat:0});}
if(msg.topic=='PcWatt'){myPie.segments[1].value=parseInt(msg.payload,10);myPie.update()
sym.$("PcWatt").html(msg.payload);UsagePercent();}
if(msg.topic=='MicroDegrees'){TweenMax.to(MicroWDial,1,{css:{rotation:msg.payload,opacity:100},ease:Quad.easeIn,repeat:0});}
if(msg.topic=='MicroWatt'){myPie.segments[2].value=parseInt(msg.payload,10);myPie.update()
sym.$("MicroWatt").html(msg.payload);UsagePercent();}
if(msg.topic=='KettleDegrees'){TweenMax.to(KettleWDial,1,{css:{rotation:msg.payload,opacity:100},ease:Quad.easeIn,repeat:0});}
if(msg.topic=='KettleWatt'){myPie.segments[3].value=parseInt(msg.payload,10);myPie.update()
sym.$("KettleWatt").html(msg.payload);UsagePercent();}});socket.emit('subscribe',{topic:'mariusTest'});});}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'CoffeWDial'
(function(symbolName){})("CoffeWDial");
//Edge symbol end:'CoffeWDial'

//=========================================================

//Edge symbol: 'myPie'
(function(symbolName){})("myPie");
//Edge symbol end:'myPie'

//=========================================================

//Edge symbol: 'DialCircle'
(function(symbolName){})("DialCircle");
//Edge symbol end:'DialCircle'
})(jQuery,AdobeEdge,"EDash");