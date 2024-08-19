// Lab 1
// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   sub(num) {
//     this.value -= num
//     return this.value
//   }
//   multi(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }
// let result = new Calculator(20)
// result.show()
// console.log(result.add(50))
// console.log(result.sub(50))
// console.log(result.multi(50))
// console.log(result.divide(20))

// Lab 02
// class Sale{
//   constructor(name,amount,price){
//   this.name = name
//   this.amount = amount
//   this.price = price
//   }

// calcprice(){
//   return this.amount * this.price
// }
// }

// class Beverage extends Sale {
//   // constructor(name,amount,price){ //ไม่ต้องใส่ก็ได้ในกรณีนี้
//   // super(name,amount,price)
//   // this.amount = amount
//   // this.price = price
//   // }
// }

// const beverage = new Beverage('pepshi', 3,19)
// console.log(beverage.calcprice())

// -------------- //

// Lab01
// function isArray(input){
//   return Array.isArray(input);
// }

// console.log(isArray([1,2,3]))


// ----- //

//Lab01
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let totalsalaries = 
// Object.values(salaries).reduce((sum,salaries)=> sum + salaries, 0)

// console.log(totalsalaries)

 //Lab02
// function checkEmptyObj(obj) {
//   if (typeof obj === 'object' && obj !== null) {
//     return Object.keys(obj).length === 0;
//   }
//   return false;
// }
// console.log(checkEmptyObj({}))
// console.log(checkEmptyObj({keys :'value'}))

// ------------ //

// let arr = [1, 2, 2, 3]
// let obj = {
//   name: 'John'
// }

// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))

// let checkArr = (arr) => {
//   return Array.isArray(arr)
// }

// let result1 = checkArr(arr)
// let result2 = checkArr(obj)
// console.log(result1)
// console.log(result2)


// let user = {
//   name: 'John',
//   age: 27
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.enteries(user));





// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let totalsalaries = 
// Object.values(salaries).reduce((sum,salaries)=> sum + salaries, 0)

// console.log(totalsalaries)

//Lab01
// let calMulti = (...nums) =>{
//   let sum =1
//   for (let num of nums){
//   console.log(num)
//   sum *= num
    
//   }
// return sum
// }
// let result = calMulti(1, 2, 3, 4, 5)
// console.log('------- Lab 1 ---------')
// console.log(result)

//Lab02
// function filterOutOdds(...numbers) {
//   return numbers.filter(number => number % 2 === 0);
// }

// console.log(filterOutOdds(1,2,3,4,5,6))

// Lab03
// function mergeObjects(...objects) {
//   return Object.assign({}, ...objects);
// }
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5 };

// const merged = mergeObjects(obj1, obj2, obj3);
// console.log(merged); 


//Lab04

// const nums1 = [1,-2,3,4]
// const nums2 = [8,3,-8,1]

// let nums3 = [5,...nums1,-6,-1,...nums2]
// console.log(nums3)

// let sum = nums3.reduce((prev,curr)=>{
// return prev += curr
// },0)

// console.log(sum)


//Lab05

// let editArr = () => {
//   let newArr =[...arr]
//   console.log(newArr)
//   // if(newArr.length > 3){

//   // }
//   newArr[3] = newArr[3] ** 2

//   return newArr

// }
// let arr = [2,3,4,5,6]
// let result = editArr(arr)
// console.log(arr)
// console.log(result)

// Lab06

// let handlePerson = (fname,lanme, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lanme, ...hobbies]
// }

// let result =handlePerson('sansaboon','ounnart','js','react','nodejs') 
// console.log(result)

// Lab07
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]

// let doubleArr = (arr, ...num) => {
// console.log(arr)
// console.log(num)
// let doubleArr = num.map((item) => item * 2)
// console.log(doubleArr)
// return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
// console.log(result)

// Lab09
// let editArr = () => {
//   let newArr =[...arr]
//   console.log(newArr)
//   // if(newArr.length > 3){

//   // }
//   newArr[3] = newArr[3]

//   return newArr

// }
// let arr = [2,3,4,5,6]
// let result = editArr(arr)
// console.log(arr)
// console.log(result)


// Lab10
// function cloenArray(arr){
//   return arr.slice()
// }

// console.log(cloenArray)

//Lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); //maya
// console.log(second); //marisa
// console.log(third); //chi

//Lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); //Raindrops on roses
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // Bright copper kettles
//                                       //warm woolen mittens

//Lab13

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // 10,30,20

//Lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846

//Lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // yearMarsDiscovered:1659 yearNeptuneDiscovered:1846

//Lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
// return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***

//Lab17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];
// console.log(guest)
// console.log(admin)

// Lab18
// function checkAge(user) {
//   const { firstName, lastName, age } = user;
//   if (age > 18) {
//     console.log(`สวัสดี ${firstName} ${lastName}`);
//   } else {
//     console.log('ไม่มีสิทธิ์เข้าใช้งาน');
//   }
// }

// const user1 = { firstName: 'Somchai', lastName: 'Kittipong', age: 20 };
// const user2 = { firstName: 'Sukhum', lastName: 'Siri', age: 17 };

// checkAge(user1);
// checkAge(user2);

// Lab19
// let user = {
//   name: 'John',
//   years: 27
// };

// const { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);


// Lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// const [a, [b, [[[c, d], e], f]]] = arr;

// console.log(a); 
// console.log(b);
// console.log(c);
// console.log(d); 
// console.log(e); 
// console.log(f); 

// Lab22
// const obj = { prop: 5, prop2: 10 };
// const { prop: a, prop2: b } = obj;
// console.log(a);
// console.log(b);

//Lab23
// let a, b;
// ({ a, b } = { a: 1, b: 2 });

// console.log(a); // 1
// console.log(b); // 2

//Lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a); // undefined
// console.log(b); // undefined
