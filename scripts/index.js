// Задаем переменные DOM
const popup = document.querySelector('.popup') 
const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const buttonOpenAddEdit = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupAddPhotos = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image')
const buttonClosePopupProfile = document.querySelector('.popup__edit-button-close');
const buttonCloseAddPhotos = document.querySelector('.popup__add-button-close')
const buttonClosePopupImage = document.querySelector('.popup__image-button-close')
const formEdit = document.querySelector('.popup__edit-form');
const formAdd = document.querySelector('.popup__add-form');
const popupProfileNameInput = document.querySelector('.popup__input_type_name');
const popupProfileJobInput = document.querySelector('.popup__input_type_job');
const popupAddCardName = document.querySelector('.popup__card-name');
const popupAddCardLink = document.querySelector('.popup__card-link')
const userName = document.querySelector('.profile__name');
const jobName = document.querySelector('.profile__job');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.cards__template').content;
const cardTitle = document.querySelector('.cards__title');

// Функция открытия POPUP EDIT
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
// Функция закрытия POPUP EDIT
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function defaultProfileSetting() {
    popupProfileNameInput.value = userName.textContent;
    popupProfileJobInput.value = jobName.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function popupEditFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    userName.textContent = popupProfileNameInput.value;
    jobName.textContent = popupProfileJobInput.value;
    closePopup(popupProfile);
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

function popupAddFormSubmitHandler(evt) {
    evt.preventDefault();
    addCard(cardsList, createCard(popupAddCardName.value, popupAddCardLink.value));
    closePopup(popupAddPhotos)
}

function addCard(container, element) {
    container.prepend(element);
}

function createCard(name, link) {
    const card = cardTemplate.cloneNode(true);
    const cardImage = card.querySelector('.cards__image');
    const cardTitle = card.querySelector('.cards__title');
    const cardLike = card.querySelector('.cards__like');
    const cardTrash = card.querySelector('.cards__trash');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardTrash.addEventListener('click', deleteCard);
    cardLike.addEventListener('click', activateLike);
    cardImage.addEventListener('click', () => {
        addInfoImage(name, link),
        openPopup(popupImage)
    });
    return card;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

// Отслеживание событий для POPUP и кнопки сохранить
buttonOpenProfileEdit.addEventListener('click', openPopup(popup));
buttonClosePopupProfile.addEventListener('click', closePopup(popup));
buttonOpenAddEdit.addEventListener('click', openPopupPhotos);
formElement.addEventListener('submit', handleFormSubmit);