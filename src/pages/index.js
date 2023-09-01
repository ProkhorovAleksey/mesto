import {
    initialCards,
    cardsList,
    popupProfile,
    popupAddPhotos,
    popupImage,
    openPopupProfileButton,
    openPopupAddCardButton,
    userName,
    jobName,
    popupProfileNameInput,
    popupProfileJobInput
} from '../scripts/utils/constants.js'

import './index.css';
import { Card } from '../scripts/components/Card.js'
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { Section } from '../scripts/components/Section.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { FormValidator, config } from "../scripts/components/FormValidator.js"

const popupImageData = new PopupWithImage(popupImage);
const popupEditProfile = new PopupWithForm({
    popup: popupProfile,
    handleSubmitForm: (formData) => {
        userInfo.setUserInfo(formData)
    }
});

const userInfo = new UserInfo(userName, jobName);
const popupAddForm = new PopupWithForm({
    popup: popupAddPhotos,
    handleSubmitForm: (formData) => {
        createNewCard(formData)
        cards.addItem(createNewCard(formData))
    }
})

popupImageData.setEventListeners()
popupEditProfile.setEventListeners()
popupAddForm.setEventListeners()



// Функция добавления новой карточки через форму POPUP
function createNewCard(item) {
    const card = new Card({
        data: item,
        templateSelector: '.cards__template',
        handleCardClick: () => {
            popupImageData.open(item)
        }
    });
    const cardElement = card.generateCard()
    return cardElement;
}

// РЕНДЕР
const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        cards.addItem(createNewCard(item))
    }
    }, cardsList);
cards.renderer()

openPopupProfileButton.addEventListener('click', () => {
    const { name, job } = userInfo.getUserInfo()
    popupEditProfile.open()
    popupProfileNameInput.value = name
    popupProfileJobInput.value = job
});

openPopupAddCardButton.addEventListener('click', () => {
    popupAddForm.open()
});

const formValidators = {};
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        const validity = new FormValidator(config, formElement)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validity;
        validity.enableValidation()
    });
};

enableValidation(config)
