var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function pic(){
    document.getElementById("textbox").innerHTML="";
    recognition.pic();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="Cheese"){
        console.log("You Said Cheese!! ");
        speak();
    }
}

function speak(){
    var cookie=window.speechSynthesis;
    var brownie="Taking Your Picture In 3 Seconds";
    var cake=new SpeechSynthesisUtterance(brownie);
    cookie.speak(cake);
    Webcam.attach(cakepop);
    setTimeout(function(){
        swim();
        save();
    },3000);
}
var cakepop=document.getElementById("cam");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

function swim(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML='<img id="i_image" src="'+datauri+'">';
    });
}
function save(){
    ice_cream=document.getElementById("atag");
    picture=document.getElementById("i_image").src;
    ice_cream.href=picture;
    ice_cream.click();
}