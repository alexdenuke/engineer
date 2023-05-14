const TOKEN = '6129735740:AAGaNbGpugKewz0t2QCclFps7L06MbKc2PM';
const CHAT_ID = '-1001971764473';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

let tg = document.getElementById('tg');

tg.addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка на звонок</b>\n`;
    message += `<b>Отправитель</b> ${ this.name.value }\n`;
    message += `<b>Телефон</b> ${ this.tel.value }\n`;
    message += `<b>Почта</b> ${ this.mail.value }\n`;
    message += `<b>Комментарий</b> ${ this.comment.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    .then(() => {
        tg.reset();
    })
})