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

    if (username.length < 1 || username.length > 20) {
      alert("Input Username");
      return;
    }
    if (password.length < 1 || password.length > 20) {
      alert("Input Password");
      return;
    }
    if (email.length < 1 || email.length > 20) {
      alert("input email");
      return;
    }
    if(income.length < 1 || income.length > 20) {
        alert("input income");
        return;
    }
    if(debt.length < 1 || debt.length > 20) {
      alert("input debt");
      return;
    }
      if(invested.length < 1 || income.length > 20) {
      alert("input invested");
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

    fetch("data.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load server response.");
    return response.json();
  })
  .then(data => {
    alert("✅ Submission Successful!\n\n" + data.message);
    form.reset();
  })
  .catch(error => {
    alert("❌ Error: Unable to fetch server response.");
    console.error(error);
  });
});
});      



