import initialCards from "./initialCards.js";
import  Card from "./Card.js"
import { FormValidator, config } from "./FormValidator.js"

// Задаем переменные DOM
const popups = document.querySelectorAll('.popup') 
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const openPopupAddCardButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupAddPhotos = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const closePopupButtons = document.querySelectorAll('.popup__close-button');

const formEditProfile = document.querySelector('.popup__edit-form');
const formAddCard = document.querySelector('.popup__add-form');

const popupProfileNameInput = formEditProfile.querySelector('.popup__input_type_name');
const popupProfileJobInput = formEditProfile.querySelector('.popup__input_type_job');

const popupAddCardName = formAddCard.querySelector('.popup__card-name');
const popupAddCardLink = formAddCard.querySelector('.popup__card-link');

const popupCardImage = popupImage.querySelector('.popup__card-image');
const popupCaption = popupImage.querySelector('.popup__caption');

const userName = document.querySelector('.profile__name');
const jobName = document.querySelector('.profile__job');

const cardsList = document.querySelector('.cards');

// Функция добавления новой карточки через форму POPUP
function createNewCard() {
    const newData = {
        name: popupAddCardName.value,
        link: popupAddCardLink.value
    }
    addCard(newData, cardsList, '.cards__template')
};
// РЕНДЕР
function renderElements() {
    initialCards.forEach((data) => {
        addCard(data, cardsList, '.cards__template')
    });
};
// Добавление карточки в начало контейнера с помощью класса Card
function addCard(data, container, cardSelector) {
    const card = new Card(data, cardSelector, handleCardImage).generateCard()
    container.prepend(card)
}

// Функция открытия POPUP на клик по картинке 
function handleCardImage(name, link) {
    popupCaption.textContent = name;
    popupCardImage.alt = name;
    popupCardImage.src = link;
    openPopup(popupImage);
}

// Функция открытия POPUP
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupKeyEsc)
}

// Функция закрытия POPUP
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupKeyEsc)
}

// Функция закрытия POPUP на клавишу ESC
function closePopupKeyEsc(evt) {
    if(evt.key === 'Escape') {
        const popupCloseEscape = document.querySelector('.popup_opened');
        closePopup(popupCloseEscape)
    }
}

// Функция закрытия попапа на клик по свободному месту(оверлею)
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
    })
})

// Функция сохранения настроек профиля
function setDefaultProfileFormValues() {
    popupProfileNameInput.value = userName.textContent;
    popupProfileJobInput.value = jobName.textContent;
}

// Функция отправка новых данных пользователя
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = popupProfileNameInput.value;
    jobName.textContent = popupProfileJobInput.value;
    closePopup(popupProfile);
}

// функция отправка новых карточек
function handleAddFormSubmit(evt) {
    evt.preventDefault();
    createNewCard();
    closePopup(popupAddPhotos);
    formAddCard.reset();
    addCardValidator.disabledSubmitButton()
}

// Закрытие попапа на крестик универсальная функция
closePopupButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => {
        closePopup(popup)
    });
  });

openPopupProfileButton.addEventListener('click', () => {
    openPopup(popupProfile);
    setDefaultProfileFormValues();
});

openPopupAddCardButton.addEventListener('click', () => {
    openPopup(popupAddPhotos);
});

formEditProfile.addEventListener('submit', handleEditFormSubmit);
formAddCard.addEventListener('submit', handleAddFormSubmit);

const editProfileValidator = new FormValidator(config, formEditProfile);
const addCardValidator = new FormValidator(config, formAddCard);
editProfileValidator.enableValidation();
addCardValidator.enableValidation();
renderElements();
