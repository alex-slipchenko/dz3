const age = +prompt('З якого ти року народження?');
const city = prompt('З якого ти міста?');
const sport = prompt('Вибери вид спорту:бокс,футбол,баскетбол,чи введи свій улюбленний');
let capital = '';

let year = '';
if (age == null || age == '') {
    year = `Шкода що ти не захотів всести свій вік :( `;

} else { year = `Тобі:${2022 - age} років`; }


if (city == 'Київ') {
    capital = `Ти живеш в Україні`;
} else if (city == 'Вашингтон') {
    capital = `Ти живеш в Америці`;
} else if (city == 'Лондон') {
    capital = `Ти живеш в Англії`;
} else if (city == null || city == "") {
    capital = ` Шкода що ти не захотів всести своє  місто :(`;
} else {
    capital = `Ти живеш у місті${city}`;
}

let kind = '';
switch (sport) {
    case 'бокс': kind = `Круто хочеш стати Тайсоном`

        break;
    case 'футбол': kind = `Круто хочеш стати Пеле`

        break;
    case 'баскетбол': kind = `Круто хочеш стати Джорданом`

        break;
    case null || '': kind = `Шкода що ти не захотів всести свій улюбленний вид спорту :( `

        break;


    default: kind = `Круто хочеш стати ${sport}істом`
        break;
}

alert(`${year}; ${capital}; ${kind}!`);



