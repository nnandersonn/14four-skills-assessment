const contacts = [
    {Name: "Christian", Availability: "online", Email: "christian@yahoo.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"},
    {Name: "Rich", Availability: "online", Email: "rich@tripod.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Scott", Availability: "online", Email: "scott@mailnator.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Danny", Availability: "online", Email: "danny@hotmail.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Taka", Availability: "offline", Email: "taka@myspace.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Tim", Availability: "away", Email: "tim@netscape.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Patrick", Availability: "online", Email: "patrick@live.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
    {Name: "Jacques", Availability: "away", Email: "jacques@aol.com", Phone: "323-555-1234", StAddress: "6539 Wilton Ave", CityAddress: "Culver City CA 90234"}, 
]

// Displays all contact names and either email or phone information
function displayContacts(formOfContact){
    document.querySelector('.contact-container').innerHTML = ''
    for (let i = 0; i< contacts.length; i++) {
        var individualContactContainer = document.createElement('div')
        individualContactContainer.id= `contact-${i}`

        if(i%2 == 0){
            individualContactContainer.classList.add('light')
        } else {
            individualContactContainer.classList.add('dark')
        }

        individualContactContainer.classList.add('individual-contact-container')
        individualContactContainer.innerHTML = ` <div class="contact-name-container" onclick="selectContact(${i})">
        <div class="contact-availability" id=${contacts[i].Availability}></div>
        <div class="contact-name">${contacts[i].Name} </div>
        </div>
        <div class="contact-info">${contacts[i][formOfContact]}</div>`

        document.querySelector('.contact-container').appendChild(individualContactContainer)
    }
}

// function is called when option is chosen from select element in widget footer
function changeContactType(){
    formOfContact = document.getElementById('form-of-contact').value
    displayContacts(formOfContact)
}

// This handles highlighting and other changes when a contact name is clicked on
function selectContact(index){
    var allContacts = document.getElementsByClassName('individual-contact-container')
    var formOfContact = document.getElementById('form-of-contact').value
    
    // if click on selected contact it will revert everything to normal, else it highlights selected info and grays out other contact info
    if (allContacts[index].classList.contains('selected')){
        for (let i = 0; i<allContacts.length; i++){
            allContacts[i].classList.remove('selected', 'not-selected')
            contactInfo = allContacts[i].getElementsByClassName('contact-info')[0]
            contactInfo.classList.remove('selected-info')
            contactInfo.innerHTML = contacts[i][formOfContact]
        }
        
    } else { 
        for (let i = 0; i<allContacts.length; i++){
            allContacts[i].classList.remove('selected', 'not-selected')
            contactInfo = allContacts[i].getElementsByClassName('contact-info')[0]
            if (i === index){ 
                let reformatedPhone = contacts[i].Phone.replace(/-/g, '.')
                allContacts[i].classList.add('selected')  
                
                contactInfo.classList.add('selected-info')
                contactInfo.innerHTML = `<a href = "mailto: ${contacts[i].Email}">${contacts[i].Email} </a><br> <br>${reformatedPhone}  <br> <br> ${contacts[i].StAddress} <br> ${contacts[i].CityAddress}`
                
            } else {
                allContacts[i].classList.add('not-selected')
                contactInfo.classList.remove('selected-info')
                contactInfo.innerHTML = contacts[i][formOfContact]

            }
            
        }
    }

}

document.onload = displayContacts('Email')