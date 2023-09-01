export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
      },
      {
        name: 'Сочи',
        link: 'https://images.unsplash.com/photo-1647674825092-0c835413e5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
      },
      {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
      },
      {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1613329969375-5faa6f501d69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
      },
      {
        name: 'Ростов-на-Дону',
        link: 'https://images.unsplash.com/photo-1616958192000-eb88a1fa0c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      },
      {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1577695912741-960e89e5dcee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      }
];


// Задаем переменные DOM
export const popups = document.querySelectorAll('.popup') 
export const openPopupProfileButton = document.querySelector('.profile__edit-button');
export const openPopupAddCardButton = document.querySelector('.profile__add-button');
export const popupProfile = document.querySelector('.popup_type_profile-edit');
export const popupAddPhotos = document.querySelector('.popup_type_add-card');
export const popupImage = document.querySelector('.popup_type_image');
export const closePopupButtons = document.querySelectorAll('.popup__close-button'); 
export const formEditProfile = document.querySelector('.popup__edit-form');
export const formAddCard = document.querySelector('.popup__add-form'); 
export const popupProfileNameInput = formEditProfile.querySelector('.popup__input_type_name');
export const popupProfileJobInput = formEditProfile.querySelector('.popup__input_type_job'); 
export const popupAddCardName = formAddCard.querySelector('.popup__card-name');
export const popupAddCardLink = formAddCard.querySelector('.popup__card-link'); 
export const popupCardImage = popupImage.querySelector('.popup__card-image');
export const popupCaption = popupImage.querySelector('.popup__caption'); 
export const userName = document.querySelector('.profile__name');
export const jobName = document.querySelector('.profile__job'); 
export const cardsList = document.querySelector('.cards');