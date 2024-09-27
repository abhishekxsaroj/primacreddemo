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
    console.log("Firebase initialized");

    // Reference to your Firebase database
    const newnewsletterDB = firebase.database().ref("newsletter");

    // Function to handle form submission
    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form submitted");

        // Get email value from input field
        var email = document.getElementById("newsletterEmail").value;
        console.log("Email: ", email);

        // Check if email is empty
        if (!email) {
            alert("Please enter your email."); // Notify user to enter email
            return;
        }

        // Save email to Firebase
        saveEmail(email);

        // Display alert message
        alert("Thank you for subscribing to our newsletter!");

        // Reset the form after submission
        document.getElementById("newsletterForm").reset();
    });

    // Function to save email to Firebase database
    function saveEmail(email) {
        var newnewsletter = newnewsletterDB.push();
        newnewsletter.set({
            email: email
        }, function(error) {
            if (error) {
                console.log("Error saving data: ", error);
            } else {
                console.log("Data saved successfully");
            }
        });
    }