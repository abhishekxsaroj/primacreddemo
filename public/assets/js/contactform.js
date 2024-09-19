// Ensure no duplicate FirebaseConfig declarations
if (!firebase.apps.length) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCka14_r4m7TkNHXgw1UUiNXIqrZk1OrLg",
        authDomain: "primacred-a482a.firebaseapp.com",
        databaseURL: "https://primacred-a482a-default-rtdb.firebaseio.com",
        projectId: "primacred-a482a",
        storageBucket: "primacred-a482a.appspot.com",
        messagingSenderId: "631635938074",
        appId: "1:631635938074:web:554f2fad05c024d47cfaa3",
        measurementId: "G-DNXR1J4BWY"
      };
  
    firebase.initializeApp(firebaseConfig);
  
    var contactFormDB = firebase.database().ref("contactform");
  
    document
        .getElementById("contactform")
        .addEventListener("submit", submitForm);
  
    function submitForm(e) {
        e.preventDefault();
  
        var message = document.getElementById("message").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var company = document.getElementById("company").value;
  
        saveMessages(message, name, email, phone, company);
  
       // Show the success message and hide it after 3 seconds
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    setTimeout(function () {
        successMessage.style.display = "none";
    }, 3000);  // Hide after 3 seconds

    // Reset the form
    document.getElementById("contactform").reset();
}
  
    const saveMessages = (message, name, email, phone, company) => {
        var newcontactForm = contactFormDB.push();
  
        newcontactForm.set({
            message: message,
            name: name,
            email: email,
            phone: phone,
            company: company
        });
    };
  
    const getElementById = (id) => {
        return document.getElementById(id).value;
    };
  }
  