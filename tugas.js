let arrays = () => {
    let array = []
    let arrayGanjil =[]
    let arrayGenap = []
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 50) +1);
    }
    //kode di bawah untuk pembagian array Ganjil Genap
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        arrayGenap.push(array[i]);
      } else {
        arrayGanjil.push(array[i]);
      }
      
    }
    return {array, arrayGenap, arrayGanjil};
  }
  
  let findMinMax = (array) =>{
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      } else if (array[i] > max){
        max = array[i]
      }
      
    }
    return {min, max}
  }
  
  let findTotal = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  let findAvg = (array) =>{
    return findTotal(array) / array.length;
  }
  
  let arr = arrays();
  console.log(`Jumlah index array ${arr.array.length} : ${arr.array}`);
  console.log(`Jumlah index [${arr.arrayGenap.length}] dalam array Genap : ${arr.arrayGenap}`);
  console.log(`Jumlah index [${arr.arrayGanjil.length}] dalam array Ganjil : ${arr.arrayGanjil}`);
  console.log(`nilai min berada pada array Ganjil : ${findMinMax(arr.arrayGanjil).min}`)
  console.log(`nilai max berada pada array Ganjil : ${findMinMax(arr.arrayGanjil).max}`)
  console.log(`nilai min berada pada array Genap : ${findMinMax(arr.arrayGenap).min}`)
  console.log(`nilai max berada pada array Genap : ${findMinMax(arr.arrayGenap).max}`)
  console.log(`total dalam index Ganjil :${findTotal(arr.arrayGanjil)}`)
  console.log(`total dalam index Genap :${findTotal(arr.arrayGenap)}`)
  console.log(`Average dalam index Ganjil : ${findAvg(arr.arrayGanjil)}`)
  console.log(`Average dalam index Ganjil : ${findAvg(arr.arrayGenap)}`)
  console.log(`======= COMPARE ARRAY =======`)
  //Compare Arrays
  console.log("Min lebih besar dari array : " + (findMinMax(arr.arrayGanjil).min < findMinMax(arr.arrayGenap).min ? "Ganjil" : "Genap"))
  console.log("Max lebih besar dari array : " + (findMinMax(arr.arrayGanjil).max < findMinMax(arr.arrayGenap).max ? "Ganjil" : "Genap"))
  console.log("Total memiliki nilai sama antara array genap dan ganjil : " + (findTotal(arr.arrayGenap) === findTotal(arr.arrayGanjil)))
  console.log("Rata-rata lebih besar pada array :" + (findAvg(arr.arrayGanjil) < findAvg(arr.arrayGenap) ? "genap" : "ganjil"));
  
  
  
  
  