let images = [
    './assets/images/earth.png',
    './assets/images/moon1.jpeg',
    './assets/images/moon2.jpeg',
    './assets/images/rocket.png',
    './assets/images/space1.jpeg',
    './assets/images/space2.jpeg',
    './assets/images/space3.jpeg',
    './assets/images/space4.jpeg',
    './assets/images/space5.jpeg',
    './assets/images/space6.jpg',
    './assets/images/space7.png',
    './assets/images/space8.png',
    './assets/images/sun1.jpeg',
    './assets/images/space_night_sky.png',
    './assets/images/moon_earth.png',
    './assets/images/sunsystem.png',
    './assets/images/earth1.png',
    './assets/images/spaceshuttle.png',
    './assets/images/saturn.png',
    './assets/images/pluto.png',
    './assets/images/iss.png',
    './assets/images/isspilot.png',
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
                            <img onclick="openCurrentImage(${i})" id="img-${i}" src="${image}" class="img-thumbnail" alt="space image">
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