const config = {
    baseUrl: 'https://test-works.pr-uni.ru/api/login'
}
const checkResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const logIn = (loginInputValue, passwordInputValue) => {
    return fetch(`${config.baseUrl}/index.php?login=${loginInputValue}&password=${passwordInputValue}`)
        .then(res => checkResponse(res))
}

