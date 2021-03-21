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
function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotresults)
}
function gotresults(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("hand_name").innerHTML=result[0].label;
        prediction=result[0].label;
        speak()
        if (result[0].label=="Victory"){
            document.getElementById("emoji_picture").innerHTML="&#9996;";
        }
        if (result[0].label=="Amazing"){
            document.getElementById("emoji_picture").innerHTML="&#128076;";
        }
        if (result[0].label=="Best of Luck"){
            document.getElementById("emoji_picture").innerHTML="&#128077;";
        }
        if (result[0].label=="Hit"){
            document.getElementById("emoji_picture").innerHTML="&#9994;";
        }
        if (result[0].label=="Clap"){
            document.getElementById("emoji_picture").innerHTML="&#128079;";
        }
        if (result[0].label=="Yo"){
            document.getElementById("emoji_picture").innerHTML="&#129304;";
        }
    }
}