const apiURL = "/LAMPAPI";
const apiExtension = ".php";

let userId = -1;
let firstName = "";
let lastName = "";


function login()
{
    // get login information
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // check if empty
    if (username == "")
    {
        document.getElementById("login-response").innerHTML = "Username cannot be empty";
        return false;
    }
    else if (password == "")
    {
        document.getElementById("login-response").innerHTML = "Password cannot be empty";
        return false;
    }

    loginFields =
    {
        login: username,
        password: password
    }

    payload = JSON.stringify(loginFields);

    let url = apiURL + "/Login" + apiExtension;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                let response = JSON.parse(xhr.responseText);

                // check if login is valid
                userId = response.id;
                if (userId < 1)
                {
                    document.getElementById("login-response").innerHTML = "Username or password is incorrect";
                    return false;
                }

                firstName = response.firstName;
                lastName = response.lastName;

                // save user login
                storeCookie();

                // redirect page
                window.location.href = "contacts.html";
            }
        };
        xhr.send(payload);
    }
    catch(error)
    {
        document.getElementById("login-response").innerHTML = error.message;
        return false;
    }
}

function register()
{
    // get registration information
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("password-confirmation").value;

    let loginResponse = document.getElementById("login-response");

    if (firstName == "" || lastName == "")
    {
        loginResponse.innerHTML = "Name cannot be empty";
        return false;
    }
    else if (username == "")
    {
        loginResponse.innerHTML = "Username cannot be empty";
        return false;
    }
    else if (password == "" || passwordConfirmation == "")
    {
        loginResponse.innerHTML = "Password cannot be empty";
        return false;
    }

    if (password != passwordConfirmation)
    {
        loginResponse.innerHTML = "Passwords do not match";
        return false;
    }

    registerFields =
    {
        firstName: firstName,
        lastName: lastName,
        login: username,
        password: password
    }

    payload = JSON.stringify(registerFields);

    let url = apiURL + "/Register" + apiExtension;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                let response = JSON.parse(xhr.responseText);

                userId = response.id;

                // check api response
                if (userId < 1)
                {
                    document.getElementById("login-response").innerHTML = "Error while creating account";
                    return false;
                }

                // save user login
                storeCookie();

                // redirect page
                window.location.href = "contacts.html";
            }
        };
        xhr.send(payload);
    }
    catch(error)
    {
        document.getElementById("login-response").innerHTML = error.message;
        return false;
    }
}

function addContact() {

    let firstName = document.getElementById("contactsFirstName").value;
    let lastName = document.getElementById("contactsLastName").value;
    let phone = document.getElementById("contactsPhoneNumber").value;
    let email = document.getElementById("contactsEmail").value;

    let contactInfo = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        userId: userId
    };


    let payload = JSON.stringify(contactInfo);

    let url = apiURL + '/AddContact' + apiExtension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Contact has been added");
            }
        };
        xhr.send(payload);
    } catch (err) {
        console.log(err.message);
    }
}

function storeCookie()
{
    let currentDate = new Date();
    let expireMinutes = 30;
    let expireDate = new Date(currentDate.getTime() + expireMinutes * 60 * 1000);

    document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + expireDate.toGMTString();
}
