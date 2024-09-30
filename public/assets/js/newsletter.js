// Initialize Firebase (replace with your own Firebase configuration)
const firebaseConfig = {
    apiKey: "AIzaSyCka14_r4m7TkNHXgw1UUiNXIqrZk1OrLg",
    authDomain: "primacred-a482a.firebaseapp.com",
    databaseURL: "https://primacred-a482a-default-rtdb.firebaseio.com",
    projectId: "primacred-a482a",
    storageBucket: "primacred-a482a.appspot.com",
    messagingSenderId: "631635938074",
    appId: "1:631635938074:web:994891bc13fba80d7cfaa3",
    measurementId: "G-PSQDXN60ER"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the "newsletter" collection in Realtime Database
const database = firebase.database();
const newsletterRef = database.ref("newsletter");

// Form submission handling
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get the email from the input field
    const email = document.getElementById('newsletterEmail').value;

    // Push the email to the Firebase Realtime Database
    newsletterRef.push({
        email: email,
        timestamp: new Date().toISOString()  // Add a timestamp
    })
    .then(() => {
        alert("Thank you for subscribing to the newsletter!");
        document.getElementById('newsletterForm').reset();  // Clear the form
    })
    .catch((error) => {
        console.error("Error submitting form: ", error);
        alert("There was an error submitting your subscription. Please try again.");
    });
});