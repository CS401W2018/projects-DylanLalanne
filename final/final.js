document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const income = document.getElementById("income").value.trim();
    const debt = document.getElementById("debt").value.trim();
    const invested = document.getElementById("invested").value.trim();

    if (username.length < 1 || username.length > 30) {
      alert("Input Username");
      return;
    }

    if (password.length < 1 || password.length > 30) {
      alert("Input Password");
      return;
    }
    if (email.length < 1 || email.length > 30) {
      alert("input email");
      return;
    }

    if (!username || !password || !email || !income || !debt || !invested) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = {
      username: username,
      password: password,
      email: email,
      income: income,
      debt: debt,
      invested: invested,
    };

    console.log("Form Data:", formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        alert("✅ Submission Successful!");

        form.reset();
      } else {
        alert("Error: Unable to submit form.");
      }
    };
    xhr.send();
  });
});



