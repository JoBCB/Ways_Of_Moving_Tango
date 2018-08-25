//  ____ _                                                _     _                 ____          _         __   __                                       
// / ___| |__   ___  _ __ ___  ___   __ _ _ __ __ _ _ __ | |__ (_) ___           / ___|___   __| | ___   |  | |  |
//| |   | '_ \ / _ \| '__/ _ \/ _ \ / _` | '__/ _` | '_ \| '_ \| |/ __|  _____  | |   / _ \ / _` |/ _ (  |  | |  |
//| |___| | | | (_) | | |  __/ (_) | (_| | | | (_| | |_) | | | | | (__  |_____| | |__| (_) | (_| |  __/  |  | |  |
// \____|_| |_|\___/|_|  \___|\___/ \__, |_|  \__,_| .__/|_| |_|_|\___|          \____\___/ \__,_|\___|  |__| |__| 
//                                  |___/          |_|                                                                                          

//a GLOSSARY for Tango

// ---------------------------------------- Intro:


function new_Title () {
document.querySelector("#title1").style.display = "none";
document.querySelector("#title2").style.color = "white";
};
//new_Title ()


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

//};


// ---------------------------------------- ON GOOGLE TRANSLATE

  function PositionZero () {
  var url = window.open('https://translate.google.com/#en/es/Hello%20World!', '_blank');
  window.location.href = url;
  url.focus();
}


//x = document.querySelector(".gb_ve.gb_wf");
//x.style.visibility = "hidden";

//document.querySelector(".gb_Wa.gb_ec").remove();

function off_stage(){
document.querySelector("#gt-langs").style.visibility="hidden";
document.querySelector(".gb_Dc.gb_Qg.gb_R").style.visibility="hidden";
document.querySelector("#gt-appbar").style.visibility="hidden";
document.querySelector("#gt-ft-res").style.visibility="hidden";
}

//- - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


var textarray = [
"This choreography",
"spaceless and timeless.",
"A language in circulation,",
"nomadic.",
"Self and Other - crossing terriories,",
"a complex network of (mis)understood directions and rhythms.",
"Su forma universal y que esa especie venturosa tiene, aunque humilde, un lugar en el universo.",
"Al bailar, se dialoga constantemente sin pronunciar palabra,",
"the resounding silence,",
"no words for this language, only two bodies can speak it,",
"only bodies",
"",
"every body"
];

var demo_input = document.querySelector('.goog-textarea.short_text')

function Hablar_Escuchar() {

var rannum= Math.floor(Math.random()*textarray.length);
demo_input.value =textarray[rannum];
};

// on google translate, open the web console and let the dance begin:
//setInterval("Hablar_Escuchar()", 1000) 



function double ( ){
document.querySelector(".gt-cd.gt-cd-md").style.textShadow = "650px 0.1px 0.1px #000000";  
document.querySelector(".gt-cc-l").style.width= "1600px";  
}; 
//double()


function Giro() {
document.querySelector(".gt-cc-l").style.transform="rotate(7deg)"
}
//setTimeout("Giro()",8000);

function noHablar() {
document.querySelector("#gt-src-wrap").style.backgroundColor="#000000"
} 

function noEscuchar() {
document.querySelector("#gt-res-wrap").style.backgroundColor = "#000000";
} 


function Body_Language() {
document.querySelector("body").style.background = "url(http://pzwart1.wdka.hro.nl/~jo/background.gif)";  
document.querySelector("#gt-main").style.display="none";  
} 

function BlackOut(){
  document.querySelector("#gt-main").style.backgroundColor = "#000000";
};

//- - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - option_1

var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="This choreography";
Texts[1]="This choreography is not about space and time,";
Texts[2]="This choreography is not about space and time, neither pre determined movements";
Texts[4]="This choreography is not about space and time, neither pre determined movements, it is coordinated improvisation!";
Texts[5]="A language in circulation,";
Texts[6]="nomadic.";
Texts[7]="Self and Other - crossing terriories,";
Texts[8]="Self and Other - crossing terriories, a complex network of (mis)understood directions.";
Texts[9]="Self and Other - crossing terriories, a complex network of (mis)understood directions and rhythms.";
Texts[10]="The resounding silence,";
Texts[11]="no words for this language,";
Texts[12]="only two bodies can speak it,";
Texts[13]="only bodies can speak it,";
Texts[14]="only bodies.";
Texts[15]="not only bodies.";


function Improvised_Sequence_or_Phrasing(){
document.querySelector('#result_box').innerHTML=Texts[count];
count++;
if(count==Texts.length){count='0';}
setTimeout("Improvised_Sequence_or_Phrasing()",delay*1000);
}


/*var type_this = "see, I'm typing lots and lots of things magically!";
var index = 0;

window.next_letter = function() {
    if (index <= type_this.length) {
        demo_input.value = type_this.substr(0, index++);
        setTimeout("next_letter()", 50);
    }
}*/



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


// ---------------------------------------- ON TIME:


You can find this one at http://codepen.io/lrsbck/pen/bpjcg

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

