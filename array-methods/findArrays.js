const items = [
    { name: "Bike", price: 100 },
    { name: "Album", price: 700 },
    { name: "Book", price: 5 },
    { name: "Computer", price: 20 },
  ];


  const foundItem = items.find((items) => {
      return items.name === 'Computer';
  })

  console.log(foundItem);