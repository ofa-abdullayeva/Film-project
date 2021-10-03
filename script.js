const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI ojesini baslatma

const ui = new UI();

//tum eventleri yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

    cardBody.addEventListener("click",deleteFilm);

    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title =titleElement.value;
    const director = directorElement.value;
    const url =urlElement.value;

    if (title === ""  || director === ""  || url === ""){
        //hata
        ui.displayMessages("Tüm alanları doldurun...","danger")
    }
    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //liste film elave etme

        ui.displayMessages("Film uğurla əlavə edildi","success")
        
    }


    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
 }

 function deleteFilm(e){

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
    }

 }

 function clearAllFilms(){
    ui.clearAllFilmsFromUI();
     
 }