//const firebaseConfig = {
 // apiKey: "AIzaSyC5ApM02phU34AFJPzue1_Fk0lUpb5ixg0",
 // authDomain: "inspireart-ff843.firebaseapp.com",
  //databaseURL: "https://inspireart-ff843-default-rtdb.firebaseio.com",
  //projectId: "inspireart-ff843",
  //storageBucket: "inspireart-ff843.appspot.com",
 // messagingSenderId: "462050386558",
  //appId: "1:462050386558:web:b8b2fd90c2e3236d98ee2f"
//};

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);

Webcam.set({
  width:350,
  height: 300,
  image_fromat: 'png',
  png_quality: 90
});

camera = document.getElementById("camera");
function start(){
  var synth = window.speechSynthesis;
  Webcam.attach(camera);
  speak_data = "Taking Snapshot/Picture in 7 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  setTimeout(function() {
     snap(); }, 7000);
}


  
  
     
function snap(){
      Webcam.snap(function(data_uri){
          document.getElementById("image").src = data_uri ;
        imgURI = 122; 
      });
  }

  //function enter() {
    //artist_name = document.getElementById("artist_name").value;
    //title = document.getElementById("title").value;
    //firebase.database().ref("/"+artist_name+"&"+title).push({
          //artist_name : artist_name,
          //title : title,
          //imgURI : imgURI
    //});
    //document.getElementById("artist_name").value = "";
    //document.getElementById("title").value = "";
//}


  //function getData() 
//{ firebase.database().ref("/"+artist_name+"&"+title).on('value', function(snapshot) 
//{ document.getElementById("wall").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
//{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      //firebase_img_id = childKey;
      //img_data = childData;

      //console.log(firebase_img_id);
      //console.log(img_data);

      //artist_name = img_data['artist_name'];
      //title = img_data['title'];
      //imgURI = img_data['imgURI'];

      //row = "<div><h5>"+title+"</h5><p>@"+artist_name+"</p>"

      //document.getElementById("wall").innerHTML += row;
//} });  }); }
//getData();