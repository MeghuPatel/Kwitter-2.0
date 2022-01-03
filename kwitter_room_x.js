// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3oageCvCoj965bTnU4acdWAQIPAoFakw",
  authDomain: "kwitter20-aeccf.firebaseapp.com",
  databaseURL: "https://kwitter20-aeccf-default-rtdb.firebaseio.com",
  projectId: "kwitter20-aeccf",
  storageBucket: "kwitter20-aeccf.appspot.com",
  messagingSenderId: "349264916902",
  appId: "1:349264916902:web:c316679aa4399988965f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class = 'room name' id=" +Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html";
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(rooom_name).update({
        pupose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "index.html";
}