import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBsbvFbbW_KECPz0h0j0oAsjUzpADqT6l4",
    authDomain: "contactus-882fd.firebaseapp.com",
    databaseURL: "https://contactus-882fd-default-rtdb.firebaseio.com",
    projectId: "contactus-882fd",
    storageBucket: "contactus-882fd.appspot.com",
    messagingSenderId: "765081758926",
    appId: "1:765081758926:web:c8761aad06f72d1969749f",
    measurementId: "G-61EQ1EJ155"
  };

// initialize firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// reference your database
// var contactFormDB = firebase.database().ref("contactForm");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  saveMessages(name, emailid, msgContent);
  document.getElementById("contactForm").reset();
}

function saveMessages(name, emailid, msgContent){
  set(ref(database,'Name'+": "+name),{
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  })};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};