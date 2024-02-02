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

function loadContacts(results)
{
    let text = "";
    let firstNameTable;
    let lastNameTable;
    let totalName;
    for (let i = 0; i<results.results.length; i++)
    {
	text += "<tr>";
        totalName = results.results[i];
        totalName = totalName.split(" ");
        firstNameTable = totalName[0];
        lastNameTable = totalName[1];
        text += "<td><span>" + firstNameTable + "</span></td>";
        text += "<td><span>" + lastNameTable + "</span></td>";
    	text += "</tr>";
}
    document.getElementById("contactList").innerHTML = text;
}

function searchContacts()
{
    let searchFirst = document.getElementById("searchFirstName").value;
    let searchLast = document.getElementById("searchLastName").value;
    let searchInfo = {
        firstName: searchFirst,
        lastName: searchLast,
        //userId: userId
    }
    let payload = JSON.stringify(searchInfo);
    let url = apiURL + '/SearchContacts' + apiExtension;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                let json = JSON.parse(xhr.responseText);
                loadContacts(json);
            }
	};
            xhr.send(payload);
    }
    catch(err)
    {
        console.log(err.message);
    }
}