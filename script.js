'use strict';
const burgerBtn = document.querySelectorAll('.BurgerPhotoImg');
const allDiv = document.querySelector('.burger-flex');


burgerBtn.forEach((item) => {
    item.addEventListener('click', () => {

        const bigImageContainer = document.createElement('div');
        bigImageContainer.classList.add('bigBurger');
        item.parentElement.parentElement.appendChild(bigImageContainer);

        const blackScreen = document.createElement('div');
        blackScreen.classList.add('burgerScreen');
        bigImageContainer.appendChild(blackScreen);

        const burgerImage = new Image();
        burgerImage.src = event.target.dataset.full_image_url;
        burgerImage.classList.add('openBurgerImage');
        bigImageContainer.appendChild(burgerImage);

        const closeImage = new  Image();
        closeImage.classList.add('closeBtn');
        closeImage.src = 'img/close.png';
        bigImageContainer.appendChild(closeImage);
        closeImage.addEventListener('click', () => {
            bigImageContainer.remove();
        })

    })
})