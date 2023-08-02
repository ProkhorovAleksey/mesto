// Объект с классами по которым искать элементы
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

const showInputError = (form, input, validationConfig) => {
    input.classList.add(validationConfig.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = input.validationMessage
    span.classList.add(validationConfig.errorClass)
};
const hideInputError = (form, input, validationConfig) => {
    input.classList.remove(validationConfig.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = '';
    span.classList.remove(validationConfig.errorClass)
};
const isValid = (form, input) => {
    if(!input.validity.valid) {
        showInputError(form, input, validationConfig);
    } else {
        hideInputError(form, input, validationConfig);
    }
};
const hasInvalidInput = (inputs) => {
    return inputs.some((input) => {
        return !input.validity.valid
    })
}
const enableSubmitButton = (button, validationConfig) => {
    button.classList.remove(validationConfig.inactiveButtonClass)
    button.disabled = false
}
const disabledSubmitButton = (button, validationConfig) => {
    button.classList.add(validationConfig.inactiveButtonClass)
    button.disabled = true
}
const toggleButtonState = (inputs, button, validationConfig) => {
    if(hasInvalidInput(inputs)) {
        disabledSubmitButton(button, validationConfig)
    } else {
        enableSubmitButton(button, validationConfig)
    }
}

const setEventListener = (form, validationConfig) => {
    const inputs = Array.from(form.querySelectorAll(validationConfig.inputSelector));
    const button = form.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputs, button, validationConfig);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(form, input);
            toggleButtonState(inputs, button, validationConfig)
        })
    })
};

function enableValidation () {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((form) => {
        setEventListener(form, validationConfig);
    });
};

// Передаем конфиг в функцию  
enableValidation();