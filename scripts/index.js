// Задаем переменные DOM 
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

// Функция открытия POPUP
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
// Функция закрытия POPUP
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Функция сохранения Настроек Профиля
function defaultProfileSettings() {
    popupProfileNameInput.value = userName.textContent;
    popupProfileJobInput.value = jobName.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function popupEditFormSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = popupProfileNameInput.value;
    jobName.textContent = popupProfileJobInput.value;
    closePopup(popupProfile);
}

// функция отправка новых карточек
function popupAddFormSubmitHandler(evt) {
    evt.preventDefault();
    addCard(cardsList, createCard(popupAddCardName.value, popupAddCardLink.value));
    closePopup(popupAddPhotos);
}

function addCard(container, element) {
    container.prepend(element);
}

function addInfoImage(name, link) {
    const linkImage = document.querySelector('.popup__card-image');
    const nameImage = document.querySelector('.popup__caption');
    nameImage.textContent = name;
    nameImage.alt = name;
    linkImage.src = link;
}

function toggleLike(event) {
    event.target.classList.toggle('cards__like_active');
}

function removeCard(event) {
    event.target.closest('.cards__item').remove();
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
    cardTrash.addEventListener('click', removeCard);
    cardLike.addEventListener('click', toggleLike);
    cardImage.addEventListener('click', () => {
        addInfoImage(name, link),
        openPopup(popupImage)
    });
    return card;
}

buttonOpenProfileEdit.addEventListener('click', () => {
    openPopup(popupProfile),
    defaultProfileSettings()
});

buttonOpenAddEdit.addEventListener('click', () => {
    openPopup(popupAddPhotos)
});

buttonClosePopupProfile.addEventListener('click', () => {
    closePopup(popupProfile)
});

buttonCloseAddPhotos.addEventListener('click', () => {
    closePopup(popupAddPhotos)
});

buttonClosePopupImage.addEventListener('click', () => {
    closePopup(popupImage)
});

formEdit.addEventListener('submit', popupEditFormSubmitHandler);
formAdd.addEventListener('submit', popupAddFormSubmitHandler);

initialCards.forEach((item) => {
    addCard(cardsList, createCard(item.name, item.link))
});
