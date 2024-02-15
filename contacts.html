let contacts = {};
let currentContact = -1;

function openContact(contactId)
{
    currentContact = contactId;
    document.getElementById("current-fname").textContent = contacts[contactId].firstName;
    document.getElementById("current-lname").textContent = contacts[contactId].lastName;
    document.getElementById("current-phone").textContent = contacts[contactId].phone;
    document.getElementById("current-email").textContent = contacts[contactId].email;
    document.getElementById("current-eye-color").textContent = contacts[contactId].eyeColor;
    document.getElementById("current-height").textContent = contacts[contactId].height;
    document.getElementById("current-location").textContent = contacts[contactId].location;
    document.getElementById("current-hair-color").textContent = contacts[contactId].hairColor;
}

function loadContacts(data)
{
    var html = "";
    
    for (var i = 0; i < data.results.length; i++)
    {
        // add contact to local contact list
        contacts[data.results[i].contactId] = data.results[i];
        
        // generate html
        html += "<tr id=\"" + data.results[i].contactId + "\"><td><a href=\"#\" onclick=openContact(" + data.results[i].contactId + ")>" + data.results[i].firstName + " " +  data.results[i].lastName + "</a></td></tr>";
    }
    
    // inject html
    document.getElementById("contact-table-data").innerHTML = html;
}

function searchContacts()
{
    let searchData = document.getElementById("search-bar").value;
    let searchInfo = {
        searchParam: searchData,
        userId: userId
    }
    let payload = JSON.stringify(searchInfo);
    let url = apiURL + '/SearchContacts' + apiExtension;

    try
    {
        $.post(url, payload, function(data, status)
        {
            loadContacts(data);
        });
    }
    catch(err)
    {
        console.log(err.message);
    }
}

function editContact()
{
    // update button
    document.getElementById("contact-edit-button").style.display = "none";
    document.getElementById("contact-delete-button").style.display = "none";
    document.getElementById("cancel-button").style.display = "inline-block";
    document.getElementById("contact-save-button").style.display = "inline-block";
    document.getElementById("add-contact").style.display = "none";

    // update name labels
    document.getElementById("current-name").style.display = "none";
    document.getElementById("fname-editor-data").style.display = "flex";
    document.getElementById("lname-editor-data").style.display = "flex";

    // update placeholders to match current name
    document.getElementById("fname-editor").value = document.getElementById("current-fname").textContent;
    document.getElementById("lname-editor").value = document.getElementById("current-lname").textContent;

    // update contact fields
    document.getElementById("current-phone").style.display = "none";
    document.getElementById("phone-editor").style.display = "inline-block";
    document.getElementById("current-email").style.display = "none";
    document.getElementById("email-editor").style.display = "inline-block";
    document.getElementById("current-eye-color").style.display = "none";
    document.getElementById("eye-editor").style.display = "inline-block";
    document.getElementById("current-height").style.display = "none";
    document.getElementById("height-editor").style.display = "inline-block";
    document.getElementById("current-location").style.display = "none";
    document.getElementById("location-editor").style.display = "inline-block";
    document.getElementById("current-hair-color").style.display = "none";
    document.getElementById("hair-editor").style.display = "inline-block";

    // update placeholders for contact fields
    document.getElementById("phone-editor").value = document.getElementById("current-phone").textContent;
    document.getElementById("email-editor").value = document.getElementById("current-email").textContent;
    document.getElementById("eye-editor").value = document.getElementById("current-eye-color").textContent;
    document.getElementById("height-editor").value = document.getElementById("current-height").textContent;
    document.getElementById("location-editor").value = document.getElementById("current-location").textContent;
    document.getElementById("hair-editor").value = document.getElementById("current-hair-color").textContent;
}

function resetFields()
{
    // reset visibility
    document.getElementById("current-name").style.display = "flex";
    document.getElementById("fname-editor-data").style.display = "none";
    document.getElementById("lname-editor-data").style.display = "none";

    document.getElementById("current-phone").style.display = "inline-block";
    document.getElementById("phone-editor").style.display = "none";

    document.getElementById("current-email").style.display = "inline-block";
    document.getElementById("email-editor").style.display = "none";

    document.getElementById("current-eye-color").style.display = "inline-block";
    document.getElementById("eye-editor").style.display = "none";

    document.getElementById("current-height").style.display = "inline-block";
    document.getElementById("height-editor").style.display = "none";
    
    document.getElementById("current-location").style.display = "inline-block";
    document.getElementById("location-editor").style.display = "none";

    document.getElementById("current-hair-color").style.display = "inline-block";
    document.getElementById("hair-editor").style.display = "none";
    
    document.getElementById("add-contact").style.display = "inline-block";
    document.getElementById("cancel-button").style.display = "none";
    document.getElementById("new-contact-save").style.display = "none";
    document.getElementById("contact-edit-button").style.display = "inline-block";
    document.getElementById("contact-delete-button").style.display = "inline-block";
    document.getElementById("contact-save-button").style.display = "none";
    
    // reset field content
    document.getElementById("current-fname").textContent = "";
    document.getElementById("current-lname").textContent = "";
    document.getElementById("current-phone").textContent = "";
    document.getElementById("current-email").textContent = "";
    document.getElementById("fname-editor").value = "";
    document.getElementById("lname-editor").value = "";
    document.getElementById("phone-editor").value = "";
    document.getElementById("email-editor").value = "";
    document.getElementById("hair-editor").value = "";
    document.getElementById("eye-editor").value = "";
    document.getElementById("height-editor").value = "";
    document.getElementById("location-editor").value = "";

    if (currentContact > 0) openContact(currentContact);
    else currentContact = -1;
}

function saveEdits()
{
    // update button
    document.getElementById("cancel-button").style.display = "none";
    document.getElementById("new-contact-save").style.display = "none";
    document.getElementById("contact-delete-button").style.display = "inline-block";
    document.getElementById("contact-save-button").style.display = "none";
    document.getElementById("contact-edit-button").style.display = "inline-block";
    document.getElementById("add-contact").style.display = "inline-block";
    
    // update name labels
    document.getElementById("fname-editor-data").style.display = "none";
    document.getElementById("lname-editor-data").style.display = "none";
    document.getElementById("current-name").style.display = "flex";

    // update contact fields
    document.getElementById("phone-editor").style.display = "none";
    document.getElementById("current-phone").style.display = "inline-block";
    document.getElementById("email-editor").style.display = "none";
    document.getElementById("current-email").style.display = "inline-block";
    document.getElementById("current-eye-color").style.display = "inline-block";
    document.getElementById("eye-editor").style.display = "none";
    document.getElementById("current-height").style.display = "inline-block";
    document.getElementById("height-editor").style.display = "none";
    document.getElementById("current-location").style.display = "inline-block";
    document.getElementById("location-editor").style.display = "none";
    document.getElementById("current-hair-color").style.display = "inline-block";
    document.getElementById("hair-editor").style.display = "none";
    
    // update contact in database
    fields = 
    {
        userId: userId,
        contactId: contacts[currentContact].contactId,
        firstName: document.getElementById("fname-editor").value,
        lastName: document.getElementById("lname-editor").value,
        phone: document.getElementById("phone-editor").value,
        email: document.getElementById("email-editor").value,
        location: document.getElementById("location-editor").value,
        hairColor: document.getElementById("hair-editor").value,
        eyeColor: document.getElementById("eye-editor").value,
        height: document.getElementById("height-editor").value
    }

    if (fields.firstName == "")
    {
        resetFields();
        return false;
    }
    if (fields.height == "") fields.height = 0;

    let payload = JSON.stringify(fields);
    let url = apiURL + '/UpdateContact' + apiExtension;
    
    beforeContact = contacts[currentContact];

    try
    {
        $.post(url, payload, function (data, status)
        {
            if (error != "")
            {
                contacts[currentContact] = beforeContact;
                resetFields();
            }
        });
    }
    catch (err)
    {
        console.log(err.message);
        return false;
    }

    // save name
    contacts[currentContact].firstName = fields.firstName;
    contacts[currentContact].lastName = fields.lastName;

    // save contact fields
    contacts[currentContact].phone = fields.phone;
    contacts[currentContact].email = fields.email;
    contacts[currentContact].location = fields.location;
    contacts[currentContact].hairColor = fields.hairColor;
    contacts[currentContact].eyeColor = fields.eyeColor;
    contacts[currentContact].height = fields.height;
    resetFields();
}

function newContact()
{
    // update button
    document.getElementById("contact-edit-button").style.display = "none";
    document.getElementById("contact-delete-button").style.display = "none";
    document.getElementById("cancel-button").style.display = "inline-block";
    document.getElementById("new-contact-save").style.display = "inline-block";
    document.getElementById("contact-save-button").style.display = "none";
    document.getElementById("add-contact").style.display = "none";

    // update name labels
    document.getElementById("current-name").style.display = "none";
    document.getElementById("fname-editor-data").style.display = "flex";
    document.getElementById("lname-editor-data").style.display = "flex";

    // update contact fields
    document.getElementById("current-phone").style.display = "none";
    document.getElementById("phone-editor").style.display = "inline-block";
    document.getElementById("current-email").style.display = "none";
    document.getElementById("email-editor").style.display = "inline-block";
    document.getElementById("current-eye-color").style.display = "none";
    document.getElementById("eye-editor").style.display = "inline-block";
    document.getElementById("current-height").style.display = "none";
    document.getElementById("height-editor").style.display = "inline-block";
    document.getElementById("current-location").style.display = "none";
    document.getElementById("location-editor").style.display = "inline-block";
    document.getElementById("current-hair-color").style.display = "none";
    document.getElementById("hair-editor").style.display = "inline-block";
}

function createContact()
{
    fields = 
    {
        userId: userId,
        firstName: document.getElementById("fname-editor").value,
        lastName: document.getElementById("lname-editor").value,
        phone: document.getElementById("phone-editor").value,
        email: document.getElementById("email-editor").value,
        location: document.getElementById("location-editor").value,
        hairColor: document.getElementById("hair-editor").value,
        eyeColor: document.getElementById("eye-editor").value,
        height: document.getElementById("height-editor").value
    }

    if (fields.firstName == "")
    {
        resetFields();
        return false;
    }
    if (fields.height == "") fields.height = 0;

    let payload = JSON.stringify(fields);
    let url = apiURL + '/AddContact' + apiExtension;

    try
    {
        $.post(url, payload, function(data, status)
        {
            contacts[data.contactId] =
            {
                firstName: fields.firstName,
                lastName: fields.lastName,
                phone: fields.phone,
                email: fields.email,
                location: fields.location,
                hairColor: fields.hairColor,
                eyeColor: fields.eyeColor,
                height: fields.height,
                id: data.contactId
            };
            resetFields();
            openContact(data.contactId);
        });
    }
    catch(err)
    {
        console.log(err.message);
    }
}

function deleteContact()
{
    if (currentContact < 0) return false;

    fields = 
    {
        contactId: currentContact,
        userId: userId
    }

    let payload = JSON.stringify(fields);
    let url = apiURL + '/DeleteContact' + apiExtension;

    try
    {
        $.post(url, payload, function(data, status)
        {
            currentContact = -1;
            // reset current view fields
            resetFields();

            // update contact list
            let row = document.getElementById(fields.contactId);
            row.parentNode.removeChild(row);
        });
    }
    catch(err)
    {
        console.log(err.message);
    }
}
