/* 
Milestone 0:
Come sempre focalizziamoci prima sulla creazione del markup statico (pagina html): costruiamo il container 
e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare 
dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e
dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e 
l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e 
viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva 
dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 
*/

const array_slider = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
// prendo l'ID slider
const sliderContainer = document.getElementById('slider');
// seleziono i bottoni 
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBTn = document.querySelector('.carousel-control-next');
//
let activeIndex = 0;
//parametro per i bottoni:
let isForward = true;
// faccio la funzione per l'image grande 
function drawCarosuel(){
    //creo un div
    const image_grande = document.createElement('div');
    // ci attacco una classe
    image_grande.className = 'carousel-inner';
    //faccio un ciclo
    image_grande.forEach((value,index) =>{
        const slide = document.createElement('div');
        slide.className = (index === 0) ? 'carousel-item active' : 'carousel-item';
        //faccio ritornare nel mio HTML il seguente codice
        slide.innerHTML = `   <div class="text-container">
                <h2>${value.title}</h2>
                <p>${value.description}</p>
            </div>
            <img src="${value.url}" class="d-block w-100" alt="${value.title}"/>`;
            array_slider.appendChild(slide);
    });
    sliderContainer.insertBefore(image_grande, prevBtn);
}

drawCarosuel();
 
const sliderItems = document.querySelectorAll('.carousel-item');
console.log(sliderItems)
function playCarousel(isForward){
    sliderItems[activeIndex].classList.add('active');
   if(isNext){
    //mandare avanti con il btn
    activeIndex = (activeIndex === sliderItems.length -1) ? 0 : activeIndex +1;

   } else {
   //mandare indietro con il btn
    activeIndex = (activeIndex === 0) ? sliderItems.length -1 : activeIndex -1;
    
}
    sliderItems[activeIndex].classList.add('active');

};

nextBTn.addEventListener('click', function(){
    playCarousel(true);
});
prevBTn.addEventListener('click', function(){
    playCarousel(false);
});



//qual è la differenza tra append e appendChild? 
// 