class Card {
    constructor(data, cardSelector, handleCardImage) {
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._handleCardImage = handleCardImage
    }
    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.cards__item')
        .cloneNode(true);

        return cardTemplate
    }

    _toggleLike(evt) {
        evt.target.classList.toggle('cards__like_active');
    }

    _removeCard() {
        this._newCard.remove();
        this._newCard = null;
    }
    _setEventListeners() {
        this._newCard.querySelector('.cards__like').addEventListener('click', this._toggleLike);
        this._newCard.querySelector('.cards__trash').addEventListener('click', () => { this._removeCard() });
        this._newCard.querySelector('.cards__image').addEventListener('click', () => { this._handleCardImage(this._title, this._image)});
    }
    generateCard() {
        this._newCard = this._getTemplate();
        this._newCard.querySelector('.cards__image').src = this._image;
        this._newCard.querySelector('.cards__image').alt = this._title;
        this._newCard.querySelector('.cards__title').textContent = this._title;
        this._setEventListeners();

        return this._newCard;
    }
}

export default Card;