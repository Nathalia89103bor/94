const firebaseConfig = {
    apiKey: "AIzaSyDopWjna4jgBTkUusuZU3pbwy3waFXwqr0",
    authDomain: "kwitter-project-f4914.firebaseapp.com",
    databaseURL: "https://kwitter-project-f4914-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f4914",
    storageBucket: "kwitter-project-f4914.appspot.com",
    messagingSenderId: "164400513271",
    appId: "1:164400513271:web:5ec9dd062d1b02b734d3f2",
    measurementId: "G-138L4TV7BH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
