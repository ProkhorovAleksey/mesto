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
    _setData() {
        const imageCardLink = this._newCard.querySelector('.cards__image');
        imageCardLink.src = this._image;

        const imageCardName = this._newCard.querySelector('.cards__image');
        imageCardName.alt = this._title;

        const titleCard = this._newCard.querySelector('.cards__title');
        titleCard.textContent = this._title;
    }

    _setEventListeners() {
        const likeButton = this._newCard.querySelector('.cards__like')
        likeButton.addEventListener('click', this._toggleLike);

        const trashButton = this._newCard.querySelector('.cards__trash')
        trashButton.addEventListener('click', () => { this._removeCard() });
        
        const popupCardImage = this._newCard.querySelector('.cards__image')
        popupCardImage.addEventListener('click', () => { this._handleCardImage(this._title, this._image)});
    }

    generateCard() {
        this._newCard = this._getTemplate();
        this._setData();
        this._setEventListeners();

        return this._newCard;
    }
}

export default Card;