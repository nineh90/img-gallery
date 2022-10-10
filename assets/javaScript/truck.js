let images = [
    './assets/images/truck.png',
    './assets/images/truck1.png',
    './assets/images/truck2.png',
    './assets/images/truck3.png',
    './assets/images/truck4.png',
    './assets/images/truck5.png',
    './assets/images/truck6.png',
    './assets/images/truck7.png',
    './assets/images/truck8.png',
]

function loadImages(){
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        generateStartPageImages(image, i);
    }
}

function generateStartPageImages(image, i){
    imageContainer.innerHTML += 
                        ` 
                            <img onclick="openCurrentImage(${i})" id="img-${i}" src="${image}" class="img-thumbnail" alt="Truck Image">
                        `;
}

function openCurrentImage(i){
    currentImageContainer.classList.remove('d-none');
    currentImage.innerHTML = `
                                <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                <img id="bigImage${i}" currentImage src="${images[i]}" class="img-thumbnail">
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
                                <img id="bigImage${i}" src="${images[i]}" class="img-thumbnail">
                                <img onclick="showNextImage(${i+1})"  class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                            `;
}

function renderLastImage(i){
    i = images.length - 1;
        currentImage.innerHTML = `
                                    <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                    <img id="bigImage${i}" src="${images[i]}" class="img-thumbnail">
                                    <img onclick="showNextImage(${i+1})"  class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}

function showNextImage(i){
    if(i < images.length){
        renderNextImage(i);
    } else {
        renderFirstImage(i);
    }                            
}

function renderNextImage(i){
    currentImage.innerHTML = `
                                <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                <img id="bigImage${i}" src="${images[i]}" class="img-thumbnail">
                                <img onclick="showNextImage(${i+1})" class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}

function renderFirstImage(i){
    i = 0
        currentImage.innerHTML = `
                                    <img onclick="showPreviousImage(${i-1})" class="left-arrow" src="./assets/images/left-arrow.png" alt="">
                                    <img id="bigImage${i}" src="${images[i]}" class="img-thumbnail">
                                    <img onclick="showNextImage(${i+1})" class="right-arrow" src="./assets/images/right-arrow.png" alt="">
                                `;
}

function closeCurrentImage(){
    currentImageContainer.classList.add('d-none');
}