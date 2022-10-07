function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('',modelReady);

}
function modelReady(){
    //"classifier.classifier"
    console.log("model loaded");
    //classifier.classify(gotResults);
    
}