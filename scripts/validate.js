const showInputError = (form, input, config) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = input.validationMessage
    span.classList.add(config.errorClass)
};
const hideInputError = (form, input, config) => {
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = '';
    span.classList.remove(config.errorClass)
};
const isValid = (form, input) => {
    if(!input.validity.valid) {
        showInputError(form, input, config);
    } else {
        hideInputError(form, input, config);
    }
};
const hasInvalidInput = (inputs) => {
    return inputs.some((input) => {
        return !input.validity.valid
    })
}
const enableSubmitButton = (button, config) => {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = false
}
const disabledSubmitButton = (button, config) => {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = true
}
const toggleButtonState = (inputs, button) => {
    if(hasInvalidInput(inputs)) {
        disabledSubmitButton(button, config)
    } else {
        enableSubmitButton(button, config)
    }
}

const setEventListener = (form, config) => {
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
function enableValidation (config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
        setEventListener(form, config);
    });
};
