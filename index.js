import './components/api.js'
import { logIn } from './components/api.js'
const form = document.querySelector('.form__edit-form')
const passwordInput = form.querySelector('#password')
const loginInput = form.querySelector('#login')
const loadBars = Array.from(form.querySelectorAll('.form__input-load-bar'))
const error = form.querySelector('.form__error')
const button = form.querySelector('.form__submit')

form.addEventListener('submit', e => {
    e.preventDefault();
    const login = loginInput.value.toString()
    const password = passwordInput.value.toString()
    button.textContent = 'Авторизация...'
    let isError = false;
    showLoadBar()
    logIn(login, password)
        .then(res => {
            if (res.status === 'error') {
                isError = true
                throw new Error(res.errorMessage)
            }
            else {
                showDoneStatus()
            }
        })
        .catch(err => {
            showError(err)
        })
        .finally(() => {
            if (!isError) {
                hideError()
            }
            hideLoadBar()
            button.textContent = 'Войти'
        })
})

function showLoadBar() {
    loadBars.forEach(load => load.classList.add('form__input-load-bar_load'))
}
function hideLoadBar() {
    loadBars.forEach(load => load.classList.remove('form__input-load-bar_load'))
}
function showDoneStatus() {
    passwordInput.classList.add('form__input_done')
    loginInput.classList.add('form__input_done')
}
function showError(err) {
    error.textContent = err.toString().replace('Error:', '')
    passwordInput.classList.add('form__input_error')
    loginInput.classList.add('form__input_error')
    error.classList.add('form__error_visible')
}
function hideError() {
    error.textContent = ''
    passwordInput.classList.remove('form__input_error')
    loginInput.classList.remove('form__input_error')
    error.classList.remove('form__error_visible')
}

//'hr@samedia.ru' 'q10O57H25O82E40y95D12a85U96A4U34'
