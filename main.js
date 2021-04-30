Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    }
    
    console.log('ml5 version:', ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2kTYG3It6/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('modelLoaded');
    }
    
    function speak(){
        var synth=window.synthSynthesis;
        speak_data_1= "the first Prediction is "+prediction_1;
        speak_data_2="the secont Prediction is"+prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speack_data_2);
        synth.speak(utterThis);
    
        
    }

    function modelLoaded(){
        console.log('modelLoaded');
    
    }
    
    function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img,gotResult);
    
    }
    
    function gotResult(error,results){
        if (error){
            console.error(error);
            
        }
        else{
            console.log(results);
            document.getElementById('result_emotion_name').innerHTML=results[0].label;
            document.getElementById('result_emotion_name2').innerHTML=results[1].label;
            prediction_1=results[0].label;
            prediction_2=results[1].label; 
            speak();
            if(results[0].label=="this is looking amazing"){
                document.getElementById("update_emoji").innerHTML="&#128076";
                }
                if(results[0].label=="All the best"){
                    document.getElementById("update_emoji").innerHTML="&#128077";
    
                }
                if(results[0].label=="that was marvolouse victory"){
                    document.getElementById("update_emoji" ).innerHTML="&#9996";
    
                }
                if(results[1].label=="this is looking amazing"){
                    document.getElementById("update_emoji2").innerHTML="&#128076";
    
                }
                if(results[1].label=="All the best"){
                    document.getElementById("update_emoji2").innerHTML="&#128077";
    
                }
    
                if(results[1].label=="that was marvolouse victory "){
                    document.getElementById("update_emoji2").innerHTML="&#9996";
                    
                }
            }
        }