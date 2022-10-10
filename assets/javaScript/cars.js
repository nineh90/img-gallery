let carImages = [   
                    './assets/images/classic-car.png',
                    './assets/images/car.png',
                    './assets/images/car1.png',
                    './assets/images/car2.png',
                    './assets/images/car3.png',
                    './assets/images/car4.png',
                    './assets/images/car5.png',
                    './assets/images/car6.png',
                    './assets/images/car7.png',
                    './assets/images/car8.png',
                    './assets/images/car9.png',
                    './assets/images/cars10.png',
                    './assets/images/car11.png',
                    './assets/images/car12.png',
                ]

function  init(){
    loadCarImages();
} 

function loadCarImages(){
    for (let i = 0; i < carImages.length; i++) {
        const carImage = carImages[i];
        imageContainer.innerHTML += 
                        ` 
                            <img onclick="openCurrentImage(${i})" id="img-${i}" src="${carImage}" class="img-thumbnail" alt="Car Image">
                        `;
        
    }
}

function openCurrentImage(i){
    currentImageContainer.classList.remove('d-none');
    currentImage.innerHTML = `
                                <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                <img id="bigImage${i}" currentImage src="${carImages[i]}" class="img-thumbnail">
                                <img onclick="showNextImage(${i+1})" class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                            `;
}

function showPreviousImage(i){
    if(i > -1){
        renderPreviousImage(i);
    } else {
        renderLastImage(i)
    }                            
}
function renderPreviousImage(i){
    currentImage.innerHTML = `
                                <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                <img id="bigImage${i}" src="${carImages[i]}" class="img-thumbnail">
                                <img onclick="showNextImage(${i+1})"  class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                            `;
}

function renderLastImage(i){
    i = carImages.length - 1;
        currentImage.innerHTML = `
                                    <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                    <img id="bigImage${i}" src="${carImages[i]}" class="img-thumbnail">
                                    <img onclick="showNextImage(${i+1})"  class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}

function showNextImage(i){
    if(i < carImages.length){
        renderNextImage(i);
    } else {
        renderFirstImage(i);
    }                            
}

function renderNextImage(i){
    currentImage.innerHTML = `
                                <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                <img id="bigImage${i}" src="${carImages[i]}" class="img-thumbnail">
                                <img onclick="showNextImage(${i+1})" class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}

function renderFirstImage(i){
    i = 0
        currentImage.innerHTML = `
                                    <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                    <img id="bigImage${i}" src="${carImages[i]}" class="img-thumbnail">
                                    <img onclick="showNextImage(${i+1})" class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}


function closeCurrentImage(){
    currentImageContainer.classList.add('d-none');
}