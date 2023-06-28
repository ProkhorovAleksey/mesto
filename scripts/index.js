const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const submitButton = popupProfile.querySelector('.popup__save-button')
let popupNameInput = formElement.querySelector('.popup__input_profile_name');
let popupJobInput = formElement.querySelector('.popup__input_profile_job');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');

function openPopup() {
    popupProfile.classList.add('popup_opened');
}

function closePopup() {
    popupProfile.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.textContent = popupNameInput.value;
    jobInput.textContent = popupJobInput.value;
    closePopup();
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
buttonOpenProfileEdit.addEventListener('click', openPopup);
buttonClosePopupProfile.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);