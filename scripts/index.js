// Задаем переменные DOM 
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const openPopupAddCardButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupAddPhotos = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image')
const closeButtons = document.querySelectorAll('.popup__close-button')
const formEdit = document.querySelector('.popup__edit-form');
const formAdd = document.querySelector('.popup__add-form');
const popupProfileNameInput = formEdit.querySelector('.popup__input_type_name');
const popupProfileJobInput = formEdit.querySelector('.popup__input_type_job');
const popupAddCardName = formAdd.querySelector('.popup__card-name');
const popupAddCardLink = formAdd.querySelector('.popup__card-link')
const linkImage = popupImage.querySelector('.popup__card-image');
const nameImage = popupImage.querySelector('.popup__caption');
const userName = document.querySelector('.profile__name');
const jobName = document.querySelector('.profile__job');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.cards__template').content;

// Функция открытия POPUP
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
// Функция закрытия POPUP
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Функция сохранения Настроек Профиля
function setDefaultProfileFormValues() {
    popupProfileNameInput.value = userName.textContent;
    popupProfileJobInput.value = jobName.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = popupProfileNameInput.value;
    jobName.textContent = popupProfileJobInput.value;
    closePopup(popupProfile);
}

// функция отправка новых карточек
function handleAddFormSubmit(evt) {
    evt.preventDefault();
    addCard(cardsList, createCard(popupAddCardName.value, popupAddCardLink.value));
    closePopup(popupAddPhotos);
    formAdd.reset();
}

function addCard(container, element) {
    container.prepend(element);
}

function addInfoImage(name, link) {
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
        addInfoImage(name, link);
        openPopup(popupImage);
    });
    return card;
}

closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
  });

openPopupProfileButton.addEventListener('click', () => {
    openPopup(popupProfile);
    setDefaultProfileFormValues();
});

openPopupAddCardButton.addEventListener('click', () => {
    openPopup(popupAddPhotos);
});

formEdit.addEventListener('submit', handleEditFormSubmit);
formAdd.addEventListener('submit', handleAddFormSubmit);

initialCards.forEach((item) => {
    addCard(cardsList, createCard(item.name, item.link));
});