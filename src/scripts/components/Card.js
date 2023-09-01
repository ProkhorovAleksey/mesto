export class Card {
    constructor({data, templateSelector, handleCardClick}) {
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.cards__image');
        this._cardTitle = this._element.querySelector('.cards__title');
        this._cardLike = this._element.querySelector('.cards__like');
        this._cardTrash = this._element.querySelector('.cards__trash')
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
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardLike.addEventListener('click', this._toggleLike)

        this._cardTrash.addEventListener('click', () => { this._removeCard() })
        
        this._cardImage.addEventListener('click', () => { this.handleCardClick() })
    }

    generateCard() {
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._cardTitle.textContent = this._title;
        this._setEventListeners();

        return this._element;
    }
}
