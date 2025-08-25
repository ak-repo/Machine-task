let obj = {
  person1: { name: "john", age: 18 },
  person2: { name: "Ann", age: 19 },
  person3: { name: "Bob", age: 23 },
};

console.log("/n Shallow Copy ");

let obj1 = { ...obj }; // shallow copy
console.log(obj);
console.log(obj1); // output are same

obj.person2.name = "Zora";
console.log(obj);
console.log(obj1);

// {
//   person1: { name: 'john', age: 18 },
//   person2: { name: 'Zora', age: 19 },
//   person3: { name: 'Bob', age: 23 }                     // I changed the nested object value and it also affected the copyed one.
// }                                                       // Its because of shallow copy only copy the first refernce.
// {
//   person1: { name: 'john', age: 18 },
//   person2: { name: 'Zora', age: 19 },
//   person3: { name: 'Bob', age: 23 }
// }

console.log("/n Deep Copy ");

let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj);
console.log(obj2); // same output

obj.person3.age = 25;

console.log(obj);
console.log(obj2);

// {
//   person1: { name: 'john', age: 18 },
//   person2: { name: 'Zora', age: 19 },
//   person3: { name: 'Bob', age: 25 }
// }                                                          // only changes affecting the old one. not in copied one
// {                                                          // Becuase of it copy all properties including the nested objects.
//   person1: { name: 'john', age: 18 },
//   person2: { name: 'Zora', age: 19 },
//   person3: { name: 'Bob', age: 23 }
// }
