// ex 1


// const user = {
//     name: 'John',
//     age: 30,
//     hobby: 'reading',
//     premium: true
//   };

// user.mood = "happy"

// user.hobby = "skydiving"

// user.premium = false



// for (const[key, value] of Object.entries(user)){
//     console.log(key, value)
// }


// ex 2


// function countProps(obj) {
//   const propNames = Object.keys(obj);
//   return propNames.length;
// }

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   occupation: 'Developer'
// };

// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2022
// };

// console.log(countProps(person)); 
// console.log(countProps(car)); 


// ex 3


// function findBestEmployee(employees) {
//   let maxTasks = 0;
//   let bestEmployee = '';

//   for (const [employee, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = employee;
//     }
//   }

//   return bestEmployee;
// }

// const employees = {
//   "John": 10,
//   "Jane": 15,
//   "Alex": 12,
//   "Ella": 18
// };

// const bestEmployee = findBestEmployee(employees);
// console.log(`The best employee is: ${bestEmployee}`);


// ex 4


// function countTotalSalary(employees) {
//   let totalSalary = 0;

//   for (const employee of Object.values(employees)) {
//     const { salary } = employee;
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// const employees = {
//   "John": { salary: 5000 },
//   "Jane": { salary: 6000 },
//   "Mike": { salary: 4500 }
// };

// const totalSalary = countTotalSalary(employees);
// console.log(`Total salary: ${totalSalary}`);


// ex 5


// function getAllPropValues(arr, prop) {
//   const propValues = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       const { [prop]: value } = obj;
//       propValues.push(value);
//     }
//   }

//   return propValues;
// }

// const products = [
//   { name: 'laptop', price: 1000, brand: 'Dell' },
//   { name: 'phone', price: 800, brand: 'Apple' },
//   { name: 'tablet', price: 600, brand: 'Samsung' }
// ];

// const prices = getAllPropValues(products, 'price');
// console.log(prices); 

// const brands = getAllPropValues(products, 'brand');
// console.log(brands); 


// ex 6


// function calculateTotalPrice(allProducts, productName) {
//   let totalPrice = 0;

//   for (const { name, price, quantity } of allProducts) {
//     if (name === productName) {
//       totalPrice += price * quantity;
//     }
//   }

//   return totalPrice;
// }

// const products = [
//   { name: 'Product A', price: 10, quantity: 2 },
//   { name: 'Product B', price: 5, quantity: 3 },
//   { name: 'Product A', price: 10, quantity: 1 },
// ];

// const productName = 'Product A';
// const total = calculateTotalPrice(products, productName);
// console.log(`Total price of ${productName}: $${total}`);


// ex 7


// const account = {
//     balance: 1000,
//     transactions: [],
//   };
  
//   function addTransaction(type, amount) {
//     const { transactions } = account;
//     transactions.push({ type, amount });
//   }
  
//   function getBalance() {
//     const { balance } = account;
//     return balance;
//   }
  
//   function getTransactionHistory() {
//     const { transactions } = account;
//     return transactions;
//   }
  
//   addTransaction("deposit", 500);
//   addTransaction("withdraw", -200);
//   addTransaction("deposit", 1000);
  
//   console.log("Поточний баланс:", getBalance());
//   console.log("Історія транзакцій:", getTransactionHistory());