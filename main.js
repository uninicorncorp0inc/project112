Webcam.set({
    width:350,
    height:300, 
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri  ){
document.getElementById("result").innerHTML = ' <img id ="final_pic" src=" ' + data_uri + '"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PPzxdybap/model.json',modelLoaded);

function modelLoaded(){
    console.log("OK!");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResults(error, results){ 
    if (error){
        console.error(error);

    }
    else {
        document.getElementById("result_emotion_name").innerHTML = " I detect:  " + results[0].label;

        if(results[0].label == "happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }

        if(results[0].label == "sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }

        if(results[0].label == "angry"){
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
    }
}