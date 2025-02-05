// Array1.
// n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
//  📥 Input: getLevel3(5)
//  📤 Output: [3, 9, 27, 81, 243]
// function getLevel3(n) {
//     let kvadrat = [];
//     for(let i = 1; i<=n; i++){
//         kvadrat.push(3**i)
//     }
//     return kvadrat;
// }
// console.log(getLevel3(5));

// Array2.
// n natural soni va X, Y butun sonlari berilgan (n > 2).
// a[0] = X, a[1] = Y.
// Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
// 📥 Input: n = 6, X = 1, Y = 2
//  📤 Output: [1, 2, 3, 5, 8, 13]
// function sonYigindi(n) {
//   let X = 1;
//   let Y = 2;
//   let arr = [X, Y];
//   for (let i = 0; i < arr.length; i++) {
//     arr.push(arr[i] + arr[i + 1]);

//     if (arr.length == n) {
//       break;
//     }
//   }

//   return arr;
// }
// console.log(sonYigindi(6));

// Array3.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output: [9, 8, 5]
// let arr = [4, 5, 7, 8, 6, 9];
// let toqIndex = [];
// for (let i = 1; i < arr.length; i = i + 2) {
//   toqIndex.unshift(arr[i]);
// }
// console.log(toqIndex);

// Array4.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// 📥 Input: [10, 5, 3, 8, 1, 6, 9]
//  📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)
// let arr = [10,5, 3, 8, 1, 6, 9];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let sum = arr.indexOf(max)+arr.indexOf(min);

// console.log(sum);

// Array5.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output:
//  Juft indekslilar: [4, 7, 6]
//  Toq indekslilar: [5, 8, 9]
// let arr = [4, 5, 7, 8, 6, 9];
// let juft = [];
// let toq = [];
// for(let i=0; i<arr.length; i++){
//     if(arr.indexOf(arr[i])%2 == 1){
//         toq.push(arr[i])
//     }else{
//         juft.push(arr[i])
//     }
// }
// console.log(`Juft = ${juft}, toq = ${toq}`);

// Array6.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng ko‘p uchragan element va uning soni topilsin.
// 📥 Input: [2, 3, 2, 5, 3, 3, 7, 2, 3]
//  📤 Output: Eng ko‘p uchragan element: 3, Uchrash soni: 4

// let arr = [2, 3, 2, 5, 3, 3, 7, 2, 3];
// let counter = 1;
// let n = 0;
// let son;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] == arr[j]) n++;

//     if (counter < n) {
//       counter = n;
//       son = arr[i];
//     }
//   }
//   n = 0;
// }

// console.log(
//   `Eng ko'p takrorlangan son = ${son}, u ${counter} marta takrorlangan`
// );

// Array7.
// n ta elementdan tashkil topgan massiv va R butun soni berilgan.
// Massiv elementlari orasidan R soniga eng uzoq son topilsin.
// 📥 Input: arr = [10, 15, 2, 30, 18], R = 12
//  📤 Output: 30 (12 ga eng uzoq son 30 (farqi 18))
// let arr = [10, 15, 2, 30, 18];
// let R = 12;
// let farq = 0;
// let son = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]-R>farq){
//         farq=arr[i]-R;
//         son=arr[i]
//     }
// }
// console.log(`Eng uzoq son = ${son}, farq = ${farq}`);

// Array8.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// 📥 Input: [7, 3, 9, 1, 8, 2, 4]
//  📤 Output:
//  Birinchi yarmi katta: [7, 9, 8]
//  Ikkinchi yarmi kichik: [3, 1, 2, 4]

// let arr = [7, 3, 9, 1, 8, 2, 4];
// let birinchi = [];
// let ikkinchi = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=arr.length){
//         birinchi.push(arr[i])
//     } else{
//         ikkinchi.push(arr[i])
//     }
// }
// console.log(birinchi, ikkinchi);

// Array9.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// 📥 Input: [1, 2, 3, 4]
//  📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]
// let arr = [1, 2, 3, 4];
// let ikkiNusxa = [];
// for(let i = 0; i<arr.length; i++){
//     ikkiNusxa.push(arr[i], arr[i]);
// }
// console.log(ikkiNusxa);

// Array10.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// 📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
//  📤 Output: [15, 9, 8, 5]
// let arr = [4, 5, 7, 8, 6, 9, 10, 15];
// let newArr = [];
// for(let i=1; i<arr.length; i=i+2){
//    newArr.unshift(arr[i])
// }
// console.log(newArr);
