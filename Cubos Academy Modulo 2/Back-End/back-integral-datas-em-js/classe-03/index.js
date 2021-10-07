function taAberto(date) {

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
taAberto(new Date(2021, 7, 1, 18, 1, 59));