const openPopupButton = document.getElementById('open-popup-button');
const closePopupButton = document.getElementById('close-button');
const popupContainer = document.getElementById('popup-container');

const openPopup = () => {
    popupContainer.classList.add('active');
};

const closePopup = () => {
    popupContainer.classList.remove('active');
};

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);