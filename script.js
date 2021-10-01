const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// UI ojesini baslatma

const ui = new UI();

//tum eventleri yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){
    const title =titleElement.value;
    const director = directorElement.value;
    const url =urlElement.value;

    if (title === ""  || director === ""  || url === ""){
        //hata
    }
    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //
        
    }

    e.preventDefault();
}