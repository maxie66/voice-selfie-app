var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    } 
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterancee(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();

    }, 5000);

}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach( '#my_camera' );