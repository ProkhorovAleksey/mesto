const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
let popupNameInput = formElement.querySelector('.popup_profile_name');
let popupJobInput = formElement.querySelector('.popup_profile_job');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job')

function closePopup() {
    popupProfile.classList.toggle('popup_opened');
}
profileEditButton.addEventListener('click', closePopup);
buttonClosePopupProfile.addEventListener('click', closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    popupNameInput.textContent = popupNameInput.value;
    popupJobInput.textContent = popupJobInput.value;
    closePopup()
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);