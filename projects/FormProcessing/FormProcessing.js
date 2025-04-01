document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (name.length < 1 || name.length > 30) {
        alert("Name Required");
        return;
      }

      if (username.length < 1 || username.length > 30) { 
        alert("Input Username")
      }

      if (password.length < 1 || password.length > 30) {
        alert("Input Password")
      }
      if (phone.length < 1 || phone.length > 30) {
        alert("Input Phone")
      }

      if (!name || !email || !username || !password || !phone) {
        alert("Please fill out all fields.");
        return;
      }
  
 
      const formData = {
        username: username, 
        password: password,
        name: name,
        email: email,
        phone: phone,
      };
  
      console.log("Form Data:", formData); 
  
     
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data.json", true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          document.getElementById("message").textContent = response.message;
  
          form.reset();
        } else {
          alert("Error: Unable to submit form.");
        }
      };
      xhr.send();
    });
  });
  