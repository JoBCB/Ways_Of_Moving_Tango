//  ____ _                                                _     _                 ____          _                                               
// / ___| |__   ___  _ __ ___  ___   __ _ _ __ __ _ _ __ | |__ (_) ___           / ___|___   __| | ___  
//| |   | '_ \ / _ \| '__/ _ \/ _ \ / _` | '__/ _` | '_ \| '_ \| |/ __|  _____  | |   / _ \ / _` |/ _ (  
//| |___| | | | (_) | | |  __/ (_) | (_| | | | (_| | |_) | | | | | (__  |_____| | |__| (_) | (_| |  __/  
// \____|_| |_|\___/|_|  \___|\___/ \__, |_|  \__,_| .__/|_| |_|_|\___|          \____\___/ \__,_|\___|  
//                                  |___/          |_|                                                                                          

//a GLOSSARY for Tango

// ---------------------------------------- Intro:


function New_Title () {
document.querySelector("#title1").style.display = "none";
document.querySelector("#title2").style.color = "white";
};
//New_Title ()


function Position_Zero ()  {
window.open("Improvisation_ Coordinada.html","_self")
};
//Position_Zero ()

// ---------------------------------------- Improvisation Coordenada:


var random_X = Math.floor(Math.random() * 2500);
var random_Y = Math.floor(Math.random() * 2500);
var random_x1 = Math.floor(Math.random() *2500);
var random_y1 = Math.floor(Math.random() *2500);
var random_x2 = Math.floor(Math.random() *2500);
var random_y2 = Math.floor(Math.random() *2500);


function Parella() {
  aWindow = window.open("",  "_blank", "width=250, height=250");
    anotherWindow = window.open("",  "_blank", "width=250, height=250");
}
Parella()

//function Improvised_Sequence() {

function uno() {
    aWindow.moveTo(random_X, random_Y);
    aWindow.focus();
    anotherWindow.moveTo(random_X, random_Y);
    anotherWindow.focus();

setTimeout("uno()",1500);
}

 function dos() {
    aWindow.moveTo(random_x1, random_y1);
    aWindow.focus();  
    anotherWindow.moveTo(random_y1, random_y1);
    anotherWindow.focus();
}
setTimeout("dos()",2500);

function tres() {
    aWindow.moveTo(random_x2, random_y1);
    aWindow.focus();  
    anotherWindow.moveTo(random_x2, random_y2);
    anotherWindow.focus();
}
setTimeout("tres()",3500);

function quatro() {
    aWindow.moveTo(random_x1, random_y2);
    aWindow.focus();  
    anotherWindow.moveTo(random_x1, random_y2);
    anotherWindow.focus();
}
setTimeout("quatro()",10000);

function cinco() {
    aWindow.moveTo(random_X, random_Y);
    aWindow.focus();  
    anotherWindow.moveTo(random_X, random_y1);
    anotherWindow.focus();
}
setTimeout("cinco()",11000);

function seis() {
    aWindow.moveTo( random_x1, random_y2);
    aWindow.focus();  
    anotherWindow.moveTo(random_x1, random_y2);
    anotherWindow.focus();
}
setTimeout("seis()",12000);

function sete() {
    aWindow.moveTo(random_X, random_y2);
    aWindow.focus();  
    anotherWindow.moveTo(random_X, random_y2);
    anotherWindow.focus();
}
setTimeout("sete()",13500);

function ocho() {
    aWindow.moveTo(random_x2, random_y2);
    aWindow.focus();  
    anotherWindow.moveTo(random_x2, random_y2);
    anotherWindow.focus();
}
setTimeout("ocho()",15000); 


function Position_Zero () {
  var url = window.open('https://translate.google.com/#en/es/Hello%20World!', '_blank');
  window.location.href = url;
  url.focus();
}

//- - - - 
//- - - - -  - - - - -
//- - - - -  - - - - - - - - - - - -
//- - - - -  - - - - - - - - - - - - - - - - - - 
//- - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ------------------- ON MIS—TRANSLATION --------------------- 
// on google translate, open the web console and let the dance begin:

//- - - - - DANCE FLOOR

// document.querySelector("body").style.background="repeating-linear-gradient(transparent, black 40px), repeating-linear-gradient(0.25turn, transparent, black 20px)"
// document.querySelector("body").style.background="linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)";
// document.querySelector("body").style.backgroundSize="60px 60px";

//- - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var count='0';
var Texts= new Array ();
Texts[0]= "A dialogue, pronouncing no words",
Texts[1]= "the resounding silence,",
Texts[2]= "echoes",
Texts[3]= "spaceless",
Texts[4]= "and timeless choreographies.",
Texts[5]= "A complex network of plural directions and rhythms",
Texts[6]= "temporal horizon of virtual possibilities",
Texts[7]= "A language in circulation,",
Texts[8]= "a language that introduces you to a movement,",
Texts[9]= " invites you to respond",
Texts[10]= "nomadic.",
Texts[11]= "Su forma universal y que esa especie venturosa tiene,",
Texts[12]= "aunque humilde, un lugar en el universo.",
Texts[13]= "the unfilled, gaps between steps",
Texts[14]= "Self and Other - crossing territories,",
Texts[15]= "two bodies",
Texts[16]= "bodies, too",
Texts[17]= "everybody."

var demo_input = document.querySelector('.er8xn')

function Improvised_Sequence_or_Phrase() {
    demo_input.value = Texts[count];
    count++;
    if(count==Texts.length){count='0';}

    var ev = document.createEvent('Events');
    ev.initEvent('input', true, true);
    demo_input.dispatchEvent(ev);

}
// setInterval(Improvised_Sequence_or_Phrase, 4000) 

function Loud() {
        document.querySelector(".m0Qfkd button").click()
}
// setInterval(Loud, 4000) 


function Hablar_Escuchar() {
  document.querySelector('textarea').style.fontSize="200px";
  document.querySelector('textarea').style.position="absolute";
  document.querySelector("textarea").style.lineHeight="200px";
  document.querySelector('textarea').style.width="1200px";
  document.querySelector('textarea').style.height="600px"; 
}
// Hablar_Escuchar()


// BREATHING
function Breathing() {
  var zooming = document.querySelector("body");
  currentScale = 1;
  currenttime = setInterval(function() {
  zooming.style.transform="scale(" + currentScale + ")";
  currentScale = Math.random() * 5
  }, 800);
}
// Breathing()

function No_Breath() {
clearInterval(currenttime);
}
// No_Breath()


//- - - - - 

// document.querySelector("body").style.writingMode="vertical-lr";
// document.querySelector("body").style.textOrientation="upright";
//  document.querySelector("body").style.transform="skewY(30deg)"; 


function Dancing_Floor() {
    var r = Math.random() * 100;
    document.querySelector("body").style.backgroundImage="linear-gradient(" +  Math.random() * 360  + "deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(-" +  Math.random() * 360  + "deg, black 25%, transparent 25%, transparent 75%, black 75%, black)";
    document.querySelector("body").style.backgroundSize= Math.random() * 10 + "px" + Math.random() * 10  + "px";
  }
// setInterval(Dancing_Floor, 1000) 



function Off_Stage () {
  document.body.innerHTML = '';
  document.body.style.background = '#000';
  document.head.innerHTML = '';      
}
// Off_Stage ()


//- - - - - FINAL - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - -  
// - - - - - - - - - - - - - - 
// - - - - - 

function Hablar() {
document.querySelector("#tw-source").style.backgroundColor="#000000"
} 

function Escuchar() {
document.querySelector("#tw-target").style.backgroundColor = "#000000";
} 


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function double (){
document.querySelector(".gt-cd.gt-cd-md").style.textShadow = "650px 0.1px 0.1px #000000";  
document.querySelector(".gt-cc-l").style.width= "1600px";  
}; 
//double()


function Giro() {
document.querySelector(".gt-cc-l").style.transform="rotate(7deg)"
}
//setTimeout("Giro()",8000);



function Body_Language() {
document.querySelector("body").style.background = "url(http://pzwart1.wdka.hro.nl/~jo/background.gif)";  
document.querySelector("#gt-main").style.display="none";  
} 

function BlackOut(){
  document.querySelector("#gt-main").style.backgroundColor = "#000000";
};

//- - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - option_1

// var delay="10"; //how many seconds
// var count='0';
// var Texts=new Array();
// Texts[0]="This choreography";
// Texts[1]="This choreography is not about space and time,";
// Texts[2]="This choreography is not about space and time, neither pre determined movements";
// Texts[3]="This choreography is not about space and time, neither pre determined movements, it is coordinated improvisation!";
// Texts[4]="A language in circulation,";
// Texts[5]="nomadic.";
// Texts[6]="Self and Other - crossing terriories,";
// Texts[7]="Self and Other - crossing terriories, a complex network of (mis)understood directions.";
// Texts[8]="Self and Other - crossing terriories, a complex network of (mis)understood directions and rhythms.";
// Texts[9]="The resounding silence,";
// Texts[10]="no words for this language,";
// Texts[11]="only two bodies can speak it,";
// Texts[12]="only bodies can speak it,";
// Texts[13]="only bodies.";
// Texts[14]="not only bodies."

/*
var textarray = [
"a language that introduces you to a movement that invites you to respond",
"by walking or dancing Tango",
"establishing a space where we can encounter each other",
"responding to the proposition with a counter-movement",
"to a direction we initiate together",
"re-creating the temporal horizon of virtual possibilities",
"which all those partaking are collectively sustaining and individually assessing",
"inter-action unfolds in which the operations of leading and following are constantly re-destributed",
"in a micro-context, the peculiar political configuration of an a-personal — leading/following",
"(or following leading) that provisionally displaces and de-segments the general line of inequality informing a semi-directive work relationship",
"leading is more like initiating an opening, entering a gap",
"the unfilled gaps between steps",
"myriad of possibilities generated by two bodies",
"I am not moving her, nor is she simply responding o me: we are beginning to move relationally, creating an interval",
"we move together"
];

var demo_input = document.querySelector('#source')

function Improvised_Sequence_or_Phrasing() {

var rannum= Math.floor(Math.random()*textarray.length);
demo_input.value =textarray[rannum];
};

*/

// function Improvised_Sequence_or_Phrasing(){
// document.querySelector('#source').innerHTML=Texts[count];
// count++;
// if(count==Texts.length){count='0';}
// setTimeout("Improvised_Sequence_or_Phrasing()",delay*1000);
// }


/*var type_this = "see, I'm typing lots and lots of things magically!";
var index = 0;

window.next_letter = function() {
    if (index <= type_this.length) {
        demo_input.value = type_this.substr(0, index++);
        setTimeout("next_letter()", 50);
    }
}*/



var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇ ⁇";
Texts[1]="⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈ ⁈";
Texts[2]="⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑ ⁑";
Texts[4]="⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ⁐ ";
Texts[5]="⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒ ⁒"



function Dance(){
        document.querySelector('.input-button-container').innerHTML = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("Dance()",delay*800);
} 
Dance()



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

//.goog-textarea.short_text
//#result_box

// check: http://jsfiddle.net/Caut6/1/

//document.querySelector(".gt-cc-l").style.position="relative"
//document.querySelector(".gt-cc-l").style.marginTop="-100px"

//  document.querySelector("#gt-text-c").style.backgroundColor = "#000000";

//document.querySelector("#gt-text-c").style.backgroundColor = "#000000";

//document.querySelector("#gt-res-wrap").style.backgroundColor = "#000000";
//document.querySelector("#gt-main").style.display="none”;


//setTimeout(Elements_of_Chance, 1000) 
// USE::::::::: setInterval(Elements_of_Chance, 100)   and then clearInterval(number printed in the console)

//onload = function() { One();}


// ---------------------------------------- ON TIME: You can find this one at http://codepen.io/lrsbck/pen/bpjcg

// ---------------------------------------- Curtain / Movement:

.path {
  stroke-dasharray: 7000;
  stroke-dashoffset: 7000;
  animation: dash 600s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}


// ---------------------------------------- Sound:


var aud = document.getElementById('my_audio1');
function sound1() { 
    aud.autoplay = true;
    aud.load();
}


var aud = document.getElementById("my_audio1");

function pauseAudio1() {
    aud.pause();
}



//------------------------------------------------------------ extra -------------------- //


//Salida()


// segunda:
function Caminata() {
  var elem = document.querySelector(".logocont");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
    }
  }
}
Caminata()

function Salida() {
document.querySelector(".logocont").style.display = "none"
}
setTimeout("Salida()",8000);



document.querySelector(".srg").style.transform="rotate(180deg)"


// Up and donwn:::::

var xMax, yMax, xNeg=0, yNeg=1;

function pageScroll() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(pageScroll,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
pageScroll();
//parar na console: clearTimeout(scrolldelay)

// Lado:::::

var xMax, yMax, xNeg=1, yNeg=0;

function pageScroll() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(pageScroll,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
pageScroll();

// todo o Lado:::::

var xMax, yMax, xNeg=1, yNeg=0;

function pageScroll() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * -1;
    if(yMax == window.scrollY)yNeg = xNeg * 1;
    scrolldelay = setTimeout(pageScroll,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
pageScroll();


/*— on google search: “Poética del Tango”; 
“タンゴの詩学”;  - https://www.google.com.ar/search?q=%E3%82%BF%E3%83%B3%E3%82%B4%E3%81%AE%E8%A9%A9%E5%AD%A6&ie=utf-8&oe=utf-8&client=firefox-b&gfe_rd=cr&ei=ZzPLV6-_OYXX8gfN7ICQDA
“Poetics of Tango”;  - https://www.google.com.ar/search?q=poetics+of+Tango&ie=utf-8&oe=utf-8&client=firefox-b&gfe_rd=cr&ei=mDPLV4LBG4XX8gfN7ICQDA
“runousoppi tango”; - https://www.google.com.ar/search?q=poesia+do+tango&ie=utf-8&oe=utf-8&client=firefox-b&gfe_rd=cr&ei=8TPLV607hdfyB83sgJAM#q=runousoppi+tango
“poëtica van de tango”
*/


function double ( ){
document.querySelector(".srg").style.textShadow = "600px 1px 1px #3C3C3C, 600px 300px 6px #8C8C8C";  
document.querySelector("#rso").style.color = "white";
}; double()



colors = new Array(" #000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0


function Silence(n){
var r =document.querySelector(".g:nth-child("+n+")"),
r = r.querySelector(".st");
r.style.backgroundColor = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;
}

setInterval("Silence(1)",200)


function Pause (){
  document.getElementById("body").style.backgroundColor = "#000000";
//setTimeout ("BlackOut()", 200 );
};


// old classes:
// #tw-source-text-ta
//#tw-src-spkr-button 

//x = document.querySelector(".gb_ve.gb_wf");
//x.style.visibility = "hidden";

//document.querySelector(".gb_Wa.gb_ec").remove();

function off_stage(){
  document.querySelector("#gt-langs").style.visibility="hidden";
  document.querySelector(".gb_Dc.gb_Qg.gb_R").style.visibility="hidden";
  document.querySelector("#gt-appbar").style.visibility="hidden";
  document.querySelector("#gt-ft-res").style.visibility="hidden";
  }

