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
    popupProfileJobInput,
    formAddCard,
    formEditProfile
} from '../scripts/utils/constants.js'

import './index.css';
import { Card } from '../scripts/components/Card.js'
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { Section } from '../scripts/components/Section.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { FormValidator, config } from "../scripts/components/FormValidator.js"

// РЕНДЕР
const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        cards.addItem(createNewCard(item))
        }
    }, cardsList);
cards.renderer()

// Функция добавления новой карточки
function createNewCard(item) {
    const card = new Card({
        data: item,
        templateSelector: '.cards__template',
        handleCardClick: () => {
            popupImageData.open(item)
        }
    });
    const cardTemplate = card.generateCard()
    return cardTemplate;
}

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
    handleSubmitForm: (formItem) => {
        cards.addItem(createNewCard(formItem))
    }
})

popupImageData.setEventListeners()
popupEditProfile.setEventListeners()
popupAddForm.setEventListeners()



openPopupProfileButton.addEventListener('click', () => {
    const { name, job } = userInfo.getUserInfo()
    popupProfileNameInput.value = name
    popupProfileJobInput.value = job
    formProfileValidation.checkValidationButton()
    popupEditProfile.open()
});

openPopupAddCardButton.addEventListener('click', () => {
    formAddCardValidation.checkValidationButton()
    popupAddForm.open()
});

const formAddCardValidation = new FormValidator(config, formAddCard)
formAddCardValidation.enableValidation()

const formProfileValidation = new FormValidator(config, formEditProfile)
formProfileValidation.enableValidation()

