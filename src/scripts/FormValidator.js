class FormValidator {
    constructor(config, form)  {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;
        this._inputList = Array.from(document.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._setEventListener()
    }

    _setEventListener() {
        this._checkValidationButton()
        this._form.addEventListener('submit', () => {
            this.disabledSubmitButton()
        })
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input);
                this._checkValidationButton()
            })
        })
    }

    _isValid(input) {
        if(!input.validity.valid) {
            this._showInputError(input)
        } else {
            this._hideInputError(input)
        }
    }
    
    _showInputError(input) {
        input.classList.add(this._inputErrorClass);
        this._form.querySelector(`.${input.id}-error`).textContent = input.validationMessage
        this._form.querySelector(`.${input.id}-error`).classList.add(this._errorClass)
    }
    
    _hideInputError(input) {
        input.classList.remove(this._inputErrorClass);
        this._form.querySelector(`.${input.id}-error`).textContent = ''
        this._form.querySelector(`.${input.id}-error`).classList.remove(this._errorClass)
    }
    _enableSubmitButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
    }

    disabledSubmitButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
    }

    _checkValidationButton() {
        if(this._form.checkValidity()) {
            this._enableSubmitButton()
        } else {
            this.disabledSubmitButton()
        }
    }
}
// Объект с классами по которым искать элементы
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

export { FormValidator, config }