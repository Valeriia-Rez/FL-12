let userPassword, userEmail,
    isConfirmChangePassword, userOldPassword,
    userNewPassword,
    userConfirmNewPassword;
const userRegisteredEmail = 'user@gmail.com';
const adminRegisteredEmail = 'admin@gmail.com';
const userRegisteredPassword = 'UserPass';
const adminRegisteredPassword = 'AdminPass';
const alertCancel = 'Canceled';
const alertWrong = 'Wrong password';
const minEmailLength = 5;
const minPasswordLength = 6;

userEmail = prompt('Enter your email');
userEmail = userEmail && userEmail.toLowerCase() || userEmail;

if (!userEmail) {
    alert(alertCancel);
} else if (userEmail.length < minEmailLength) {
    alert('I don`t know any emails having name length less than 5 symbols');

} else if (userEmail === userRegisteredEmail || userEmail === adminRegisteredEmail) {
    userPassword = prompt('Enter your password');
    if (!userPassword) {
        alert(alertCancel);
    } else if (userEmail === userRegisteredEmail &&
        userPassword === userRegisteredPassword ||
        userEmail === adminRegisteredEmail &&
        userPassword === adminRegisteredPassword) {

        isConfirmChangePassword = confirm('Do you want to change your password?');
        if (isConfirmChangePassword) {
            userOldPassword = prompt('Enter your old password');
            if (!userOldPassword) {
                alert(alertCancel);
            } else if (userEmail === userRegisteredEmail &&
                userOldPassword === userRegisteredPassword ||
                userEmail === adminRegisteredEmail &&
                userOldPassword === adminRegisteredPassword) {

                userNewPassword = prompt('Enter new password');
                if (!userNewPassword) {
                    alert(alertCancel);
                } else if (userNewPassword.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else if (userNewPassword) {
                    userConfirmNewPassword = prompt('Enter new password again');
                    if (userConfirmNewPassword === userNewPassword) {
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
} else {
    alert('I don’t know you');
}