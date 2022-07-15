// const randomPersonUrl = 'https://randomuser.me/api/'
// console.log(randomPersonUrl)

// //awaits for url to be fetched and if there is an error indicate that is the error
// async function getJSON(url){
//     try{
//         const response = await fetch(url);
//         return await response.json();
//       }catch(error){
//         throw error;
//       }
// }

// // async function getRandomPeople(url){
// fetch('https://randomuser.me/api/')

// // }
// function fetchData(url){
//    return fetch(url)
//    .then(checkStatus) 
//    .then(res => res.json())
    
// }

// let img = document.querySelector('.card-img')

// fetch('https://randomuser.me/api/?results=12')
// .then(response => response.json())
// .then(data => console.log(data.results))
// // [0].name.first

// function generatePeopleImage(data){
//     const html = `  
//         <img src = '${data.results[0].picture.large}'>
    
//     `
//     img.innerHTML = html
// }
// generatePeopleImage(data);
const gallery = document.querySelector('.gallery');
const gallChild = gallery.childNodes;
console.log(gallChild);
const peopleUrl = 'https://randomuser.me/api/?results=12';

function getJSON(url, employees){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            for(let i =0; i < employees; i++){
                gallery.innerHTML += `
        <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
            <p class="card-text">${data.results[i].email}</p>
            <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
        </div>
    </div>
        `;
            }
       gallChild.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.innerHTML += `
                <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>

                // IMPORTANT: Below is only for exceeds tasks 
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
                `;
                })

        }
    };
    xhr.send();
    
}

// function generateHTML(data){
   
//   return gallery.innerHTML = `
//     <div class="card">
//     <div class="card-img-container">
//         <img class="card-img" src="${data.results[0].picture}" alt="profile picture">
//     </div>
//     <div class="card-info-container">
//         <h3 id="name" class="card-name cap">${data.results[0].name.first}</h3>
//         <p class="card-text">${data.results[0].email}</p>
//         <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
//     </div>
// </div>
//     `;
// }

getJSON(peopleUrl, 12);
// console.log(jsonData);
// generateHTML(jsonData);