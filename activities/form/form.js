   
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted');
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementByID('email').value;
    const age = document.getElementByID('age').value;
    const password = document.getElementByID('password').value;

    if( !fullname || !email);
        alert('You need a name and email');
    
    

    console.log(fullname)


});
