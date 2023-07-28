
function enableValidation (config) {
    const showInputError = (form, input) => {
        input.classList.add(config.inputErrorClass);
        const span = form.querySelector(`.${input.id}-error`)
        span.textContent = input.validationMessage
        span.classList.add(config.errorClass)
    };
    const hideInputError = (form, input) => {
        input.classList.remove(config.inputErrorClass);
        const span = form.querySelector(`.${input.id}-error`)
        span.textContent = '';
        span.classList.remove(config.errorClass)
    };
    const isValid = (form, input) => {
        if(!input.validity.valid) {
            showInputError(form, input);
        } else {
            hideInputError(form, input);
        }
    };
    const hasInvalidInput = (inputs) => {
        return inputs.some((input) => {
            return !input.validity.valid
        })
    }
    const enableSubmitButton = (button) => {
        button.classList.remove(config.inactiveButtonClass)
        button.disabled = false
    }
    const disabledSubmitButton = (button) => {
        button.classList.add(config.inactiveButtonClass)
        button.disabled = true
    }
    const toggleButtonState = (inputs, button) => {
        if(hasInvalidInput(inputs)) {
            disabledSubmitButton(button)
        } else {
            enableSubmitButton(button)
        }
    }
    const setEventListener = (form) => {
        const inputs = Array.from(form.querySelectorAll(config.inputSelector));
        const button = form.querySelector(config.submitButtonSelector);
        toggleButtonState(inputs, button);
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                isValid(form, input);
                toggleButtonState(inputs, button)
            })
        })
    };
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
        setEventListener(form);
    });
};

// Объект с классами по которым искать элементы
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

enableValidation(validationConfig); 