//sending mail function
function sendMail() {
    const receiver = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('message').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Port: "2525",
        Username: "ege79220@gmail.com",
        Password: "7491155C22CF3102516288AE8333D8D99401",
        To: receiver,
        From: "ege79220@gmail.com",
        Subject: subject,
        Body: description,
    }).then(
        message => alert("Mail sent successfully", message)
    ).catch(
        error => console.error('Error sending email: ', error)
    );
}


//validation email function
    function validateEmail() {
        const email = document.getElementById('email').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please, type valid email, thanks.");
            return false;
        }

        return true;
}
//alerting login
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", loginAlert);
});
//connected through addeventlistener
function loginAlert() {
    alert("Button is working");
}
//validation passwords (both new password and confirm)
const validatePassword = () => {
    const password = document.getElementById('password').value;
    const passwordPattern = /^[a-zA-Z0-9_.,-]{6}$/;

    const confirm = document.getElementById('confirm').value;
    const confirmPattern = /^[a-zA-Z0-9_.,-]{6}$/;

    if (!passwordPattern.test(password) && !confirmPattern.test(confirm) && confirm !== password) {
            alert("it is invalid! Please type valid password.");
            return false;
        }
    return true;
};
//grades' calculation and displaying letter grades
function calculated() {
    let math4 = document.getElementById('math4').value;
    let soccer = document.getElementById('soccer').value;
    let statistics = document.getElementById('statistics').value;
    let data_structures = document.getElementById('datastructures').value;
    let webprogramming = document.getElementById('webprogramming').value;
    let turkish = document.getElementById('turkish').value;
    let oop = document.getElementById("oop-2").value;

    let calc =
        (parseFloat(math4) + parseFloat(soccer) + parseFloat(statistics) + parseFloat(data_structures) + parseFloat(webprogramming) + parseFloat(turkish) + parseFloat(oop)) / 7;

    const letterF = "F";
    const letterD = "D";
    const letterC = "C";
    const letterB = "B";
    const letterA = "A";
    const letterA0 = "A+";

    if (0 <= calc && calc < 20) {
       alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterF);
    } else if (20 <= calc && calc < 30) {
        alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterD);
    } else if (30 <= calc && calc < 40) {
        alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterC);
    } else if (40 <= calc && calc < 60) {
        alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterB);
    } else if (60 <= calc && calc < 80) {
        alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterA);
    } else if (80 <= calc && calc <= 100) {
        alert('Your average grade is: '+ calc.toFixed(2)+ '\tand your letter grade is: ' + letterA0);
    } else {
        alert('Your grade is not realistic! Something went wrong.')
    }
}
