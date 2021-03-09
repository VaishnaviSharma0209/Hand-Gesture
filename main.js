Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera')
function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tLkVCiEy1/model.json",modelloaded);
function modelloaded(){
    console.log("Model Loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=" The prediction is"+prediction;
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}