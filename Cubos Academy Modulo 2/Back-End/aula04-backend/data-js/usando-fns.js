const { format } = require('date-fns');

const date = new Date(2017, 04, 12);

console.log(format(date, "dd-MMM-yyyy"));
