//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAlDEROpOjXPpHD0V6SdOPTxfWYCBFWaLs",
      authDomain: "kwitter-f82c7.firebaseapp.com",
      databaseURL: "https://kwitter-f82c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-f82c7",
      storageBucket: "kwitter-f82c7.appspot.com",
      messagingSenderId: "150666213475",
      appId: "1:150666213475:web:97ab76904a275371372056"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_input");
    console.log(room_name);
    console.log(user_name);
    function send(){
          msg=document.getElementById("message_input").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_firebase=message_data["name"];
like_firebase=message_data["like"];
message_firebase=message_data["message"];
console.log(like_firebase);
document.getElementById("output").innerHTML+="<h4>"+name_firebase+"<br>"+message_firebase+"<br></h4><button id='"+firebase_message_id+"' value=12345 onclick='update_like(this.id)'>Like:12345</button>";

//End code
      } });  }); }
getData();
function update_like(message_id){
button_id=message_id;
console.log(button_id);
likes=document.getElementById("button_id").value;
updated_like=number(likes)+1;
firebase.database().ref("room_name").child(message_id).update({
      like:updated_like
});
}