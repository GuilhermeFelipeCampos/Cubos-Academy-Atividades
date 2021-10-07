const { format } = require('date-fns');

function taAberto(date) {
    if (format(date, "eee") === "Sun") {
        console.log(false);
        return;
    }
    if (format(date, "eee") === "Sat") {
        if (date.getHours() >= 8 && date.getHours() < 12) {
            console.log(true);
            return;
        }
    }
    if (date.getHours() >= 8 && date.getHours() < 18) {
        console.log(true);
        return;
    } else if (date.getHours() === 18 && date.getMinutes() < 1) {
        console.log(true);
        return;
    }
    console.log(false);
    return;
}
taAberto(new Date(2021, 7, 9, 23, 0, 59));
taAberto(new Date(2021, 3, 25, 12));