import './components/api.js'
import { logIn } from './components/api.js'


logIn('hr@samedia.ru', 'q10O57H25O82E40y95D12a85U96A4U34')
    .then(res => console.log(res))
    .catch(err => console.log(err))