const config = {
    baseUrl: 'https://test-works.pr-uni.ru/api/login',
    headers: {
        // authorization: 'ea0e92d7-6e32-47de-8e34-53809a54f560',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",

    }
}//конфиг
//https://test-works.pr-uni.ru/api/login/index.php?login=hr@samedia.ru&password=q10O57H25O82E40y95D12a85U96A4U34 
const checkResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}


// export const logIn = (loginInputValue, passwordInputValue) => {
//     return fetch(`${config.baseUrl}/index.php?login=${loginInputValue}&password=${passwordInputValue}`, {
//         method: 'GET',
//         headers: config.headers
//     })
//         .then(res => checkResponse(res))

// }

export const logIn = (loginInputValue, passwordInputValue) => {
    return fetch(`${config.baseUrl}/index.php?login=${loginInputValue}&password=${passwordInputValue}`, {
        method: 'GET',
        headers: config.headers
    })
        .then(res => checkResponse(res))
}