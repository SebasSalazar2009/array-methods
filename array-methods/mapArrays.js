const items = [
  { name: "Bike", price: 100 },
  { name: "Album", price: 700 },
  { name: "Book", price: 5 },
  { name: "Computer", price: 20 },
];


 const itemsNames = items.map((items) => {
     return items.name;
 })

 console.log(itemsNames);


// const itemsNames = items.map((items) =>{
//     return items.price;
// })
// console.log(itemsNames);