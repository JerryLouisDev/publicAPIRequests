const apiLink = 'https://randomuser.me/api/?results=12';
const gallery = document.querySelector('.gallery');

// fetching the link to the api of random profiles and formating the results to json
fetch(apiLink)
    .then(res => res.json())
    .then(data => {
        peopleGallery(data.results)
        //loops through the data and creating a html template to apend it to our index.html
        function peopleGallery(data){

            // console.log(data)
            for(let i =0; i < data.length; i++){
            const person = data[i];
            // console.log(person)
                const html = `
        <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${person.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
        </div>
    </div>
        `;
        gallery.insertAdjacentHTML('beforeend', html);
        };
        //targeting each card from our index and creating a click event to get the individuals profile 
        const cards = document.querySelectorAll('.card')
        
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const personIndex = index;
                console.log(personIndex);
                activeModal(data[personIndex])
            })
        })
        }
        //using the data to get information for the modal window and apending it to the index.html
        function activeModal(data){
            
            const modalPerson = data;
            console.log(modalPerson);
            // console.log(modalPerson)
            const dob = modalPerson.dob.date;
            let splt = dob.split(' ');
            let nwdate = new Date(splt);
            // let regex = /\(?\d{3})?[-.\s]?\d{3}[-.\s]?\d{4};
            // console.log(nwdate.toLocaleDateString())
            
            const modalHTML = `
            <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${modalPerson.picture.medium}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${modalPerson.name.first} ${modalPerson.name.last}</h3>
                    <p class="modal-text">${modalPerson.email}</p>
                    <p class="modal-text cap">${modalPerson.location.city}</p>
                    <hr>
                    <p class="modal-text">${modalPerson.phone}</p>
                    <p class="modal-text">${modalPerson.location.street.number} ${modalPerson.location.street.name} Ave</p>
                    <p class="modal-text">Birthday: ${nwdate.toLocaleDateString()}</p>
                </div>
            </div>
            `;
             gallery.insertAdjacentHTML('afterend', modalHTML );

             //targeting the close button to close the activeModal window
             var closeBtn = document.getElementById('modal-close-btn')
             closeBtn.addEventListener('click', ()=>{
               const modalContainer = document.querySelector('.modal-container');
               modalContainer.style.display = 'none';

             })
        }
    })
   


