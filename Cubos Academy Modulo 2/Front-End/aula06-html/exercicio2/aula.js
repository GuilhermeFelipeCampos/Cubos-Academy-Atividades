// const fruitOfTheDay = "banana"

// let fruit;
// let fruit1 = fruitOfTheDay || "apple";
// let fruit2 = fruitOfTheDay == "apple";
// let dessert1 = fruitOfTheDay === "apple" ? "pie" : "cake";
// let dessert2 = fruit === "banana" ? fruitOfTheDay : fruit;
// console.log(dessert2)


// const compareToTen = function (testNumber) {
//     return new Promise((resolve, reject) => {
//         if (typeof testNumber !== "number") {
//             reject("not a Number");
//         }
//         setTimeout(() => {
//             if (testNumber > 10) {
//                 resolve(true);
//             } else {
//                 resolve(false)
//             }
//         }, testNumber * 100);
//     })
// }

// let timeStart = Date.now();
// // let result = Promise.all(compareToTen(8), compareToTen(16), compareToTen(24));

// timeStart = Date.now();
// // try {
// //     result = await compareToTen('16');
// // } catch (error) {
// //     result = error;
// // }
// result = await Promise.all(compareToTen(8), compareToTen('16'));
// console.log("time", Date.now() - timeStart);
// console.log("result", result)



class Counter {
    constructor() {
        this.count = 0;
    }
    remove() {
        this.count--;
    }
    print() {
        console.log(this.count);
    }
    // static reset() {
    //     this.count = 0;
    // }
}

// var espressoCouter = new Counter();

// Counter.prototype.add = () => {
//     this.count++;
// }
// espressoCouter.add();
// espressoCouter.add();
// espressoCouter.remove();

// console.log(espressoCouter.count);
// //console.log(this.espressoCouter.count);
// //espressoCouter.reset();
// espressoCouter.print();


function mysfunction(list1) {
    for (let i = 0; i < list1.length; i++) {
        let itemIndex = list1.indexOf(list1[i]);

        if (itemIndex == i) {
            console.log(list1[i]);
        }
    }
}