// var a = 1; true
// var a = 0; false
// var a = -1; true
// var a = true;
// var a = false;
// var a = undefined;
// var a = ""; //false
// var a = " "; //true
// var a = "0"; //true
// var a = NaN; //false
// var a = []; //true
// var a = {}; //true
// var a = null; //false

// if (a) {
//   console.log("If Scope Run");
// }

// var arr = [];
// arr[0] = 123;

// var obj = {
//   name: "ABC",
//   age: 18,
// };
// // obj.id = 20;
// obj["id"] = 20;

// console.log(obj);
// console.log(arr);

// array and object  (object)

// create a searching mechanism for search mobile in given data.

// var mobiles = {
//   iphone: {
//     iphone7: {
//       RAM: "",
//       ROM: "",
//       Camera: "",
//       LCD: "",
//     },
//     iphone8: {},
//     iphone8plus: {},
//     iphoneX: {},
//     iphone11: {},
//   },
//   xiomi: {
//     redmiA2: {},
//     redmi10: {},
//     redmi11: {},
//     redmi12: {},
//     redmi13: {},
//     redmi13C: {},
//   },
//   realme: {
//     realmiNote50: {},
//     realmiC67: {},
//     realmiC53: {},
//     realmi9: {},
//     realmi9i: {},
//   },
//   tecno: {
//     spark20: {},
//     spark20Pro: {},
//     spark20C: {},
//     POVA6: {},
//     PhantomV: {},
//   },
// };

// var brand = document.getElementById("brand");
// var model = document.getElementById("model");

// var allBrands = Object.keys(mobiles);
// for (var i = 0; i < allBrands.length; i++) {
//   brand.innerHTML += `<option>${allBrands[i]}</option>`;
// }

// function selectBrand() {
//   var selectedBrand = brand.value;
//   var allModels = Object.keys(mobiles[selectedBrand]);
//   model.innerHTML = "";
//   for (var i = 0; i < allModels.length; i++) {
//     model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
//   }
// }

// function selectModel() {
//   console.log(brand.value, model.value);
//   console.log(mobiles[brand.value][model.value]);
// }

// var
// reinitialize (y)
// reassign (y)
// hoisting (y)
// blockscope (y)

// let
// reinitialize (n)
// reassign (y)
// hoisting (n)
// blockscope (y)

// const
// reinitialize (n)
// reassign (n)
// hoisting (n)
// blockscope (y)

// ======= Template Literals ======

// var a = 20;

// console.log(`squre of ${a} is ${a * a}`);

// ======= Ternary Operators ======

// let studentCard = false;
// let age = 16;

// if (age >= 18) {
//   console.log("allow");
// } else if (studentCard) {
//   console.log("Allow on Student Card");
// } else {
//   console.log("Allow Allow");
// }

// age >= 18
//   ? console.log("Allow")
//   : studentCard
//   ? console.log("Allow on Student Card")
//   : console.log("Not Allow");

// age >= 18 || studentCard ? console.log("Allow") : console.log("Not Allow");

// let status = age >= 18 ? true : false;

// console.log(status);

// ======= Ternary Operators ======
// let age = 0;
// let studentCard = true;

// let status = age && studentCard;
// console.log(status);

// ======= Functions ======

// function abc() {
//   console.log("abc function");
//   return function () {
//     console.log("Inside Function");
//   };
// }

// abc()();

// abc() is higherorder function
// return wala function is callback function

// function abc(message) {
//   console.log(message);
// }

// function xyz(message) {
//   return message;
// }

// abc(xyz("Helloooo ...!"));

// function abc() {
//   let a = "20";
//   let b = "30";
//   let c = "40";
//   console.log(a + b + c);
// }
// abc();

// let a = () => {
//   let a = "20";
//   let b = "30";
//   let c = "40";
//   console.log(a + b + c);
// };
// a();
// create function
// call function
// disperse function

// let a = (message, age) => {
//   console.log(message, age);
// };

// let a = message => {
//   console.log(message);
// };
// a("asdzds");
// let a = (message) => console.log(message);
// a("asdzds");

// let a = () => {
//   return "ABC";
// };

// let a = () => "ABC";
// let b = a();
// console.log(b);

// lexical scoping

// let a = "abc";

// let abc = () => {
//   let a = "xyz";
//   let b = () => {
//     let a = "mno";
//     console.log(a);
//   };
//   b();
// };

// abc();

// let a = (message = "Hello Message is Not available") => {
//   console.log(message);
// };

// a("Show Message");
// a();
