let promptMessagePassword, promptMessageEmail,
    confirmMessage, promptMessageOldPassword,
    promptMessageNewPassword,
    promptMessageNewAgainPassword;
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let alertCancel = 'Canceled';
let alertCorrect = 'Correct password';
let alertWrong = 'Wrong password';
const five = 5;
const six = 6;

promptMessageEmail = prompt('Enter your email');
if (promptMessageEmail === '' || promptMessageEmail === null) {
    alert(alertCancel);
} else if (promptMessageEmail.length < five) {
    alert('I don`t know any emails having name length less than 5 symbols');
} else if (promptMessageEmail === userEmail || promptMessageEmail === adminEmail) {
    promptMessagePassword = prompt('Enter your password');
    if (promptMessagePassword === '' || promptMessagePassword === null) {
        alert(alertCancel);
    } else if (promptMessageEmail === userEmail &&
        promptMessagePassword === userPassword ||
        promptMessageEmail === adminEmail &&
        promptMessagePassword === adminPassword) {
        alert(alertCorrect);
        confirmMessage = confirm('Do you want to change your password?');
        if (confirmMessage) {
            promptMessageOldPassword = prompt('Enter your old password');
            if (promptMessageOldPassword === '' ||
                promptMessageOldPassword === null) {
                alert(alertCancel);
            } else if (promptMessageEmail === userEmail &&
                promptMessageOldPassword === userPassword ||
                promptMessageEmail === adminEmail &&
                promptMessageOldPassword === adminPassword) {
                alert(alertCorrect);
                promptMessageNewPassword = prompt('Enter new password');
                if (promptMessageNewPassword === '' || promptMessageNewPassword === null) {
                    alert(alertCancel);
                } else if (promptMessageNewPassword.length < six) {
                    alert('It’s too short password. Sorry.');
                } else if (promptMessageNewPassword) {
                    promptMessageNewAgainPassword = prompt('Enter new password again');
                    if (promptMessageNewAgainPassword === promptMessageNewPassword) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert(alertWrong);
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert(alertWrong);
    }
} else if (promptMessageEmail !== userEmail || promptMessageEmail !== adminEmail) {
    alert('I don’t know you');
}