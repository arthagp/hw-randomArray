// Fungsi untuk membuat array dengan 100 nilai random
function createRandomArray() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    return array;
}

// Fungsi untuk memisahkan array menjadi 2 array berdasarkan indexnya (genap dan ganjil)
function splitArray(array) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return { evenArray, oddArray };
}

// Fungsi untuk mencari nilai minimum dari sebuah array
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk mencari nilai maksimum dari sebuah array
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Fungsi untuk mencari total dari sebuah array
function findTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk mencari rata-rata dari sebuah array
function findAverage(array) {
    return findTotal(array) / array.length;
}

// Fungsi untuk membandingkan nilai min, max, total, dan rata-rata dari 2 array
function compareArrays(array1, array2) {
    let min1 = findMin(array1);
    let min2 = findMin(array2);
    let max1 = findMax(array1);
    let max2 = findMax(array2);
    let total1 = findTotal(array1);
    let total2 = findTotal(array2);
    let avg1 = findAverage(array1);
    let avg2 = findAverage(array2);

    console.log("Min lebih besar pada array " + (min1 > min2 ? "genap" : "ganjil"));
    console.log("Max lebih besar pada array " + (max1 > max2 ? "genap" : "ganjil"));
    console.log("Total memiliki nilai sama antara array genap dan ganjil: " + (total1 === total2));
    console.log("Rata-rata lebih besar pada array " + (avg1 > avg2 ? "genap" : "ganjil"));
}

// Contoh penggunaan
let randomArray = createRandomArray();
console.log("Array dengan jumlah index 100: " + randomArray);
let splitArrays = splitArray(randomArray);
console.log("Array genap dengan jumlah index 50: " + splitArrays.evenArray);
console.log("Array ganjil dengan jumlah index 50: " + splitArrays.oddArray);
console.log("Nilai minimum pada array genap: " + findMin(splitArrays.evenArray));
console.log("Nilai maksimum pada array genap: " + findMax(splitArrays.evenArray));
console.log("Total pada array genap: " + findTotal(splitArrays.evenArray));
console.log("Rata-rata pada array genap: " + findAverage(splitArrays.evenArray));
console.log("Nilai minimum pada array ganjil: " + findMin(splitArrays.oddArray));
console.log("Nilai maksimum pada array ganjil: " + findMax(splitArrays.oddArray));
console.log("Total pada array ganjil: " + findTotal(splitArrays.oddArray));
console.log("Rata-rata pada array ganjil: " + findAverage(splitArrays.oddArray));
compareArrays(splitArrays.evenArray, splitArrays.oddArray);