const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let shoppingList = [{name: "Yoghurt", price: 1000}, {name: "Milk", price: 500}, {name: "Fish", price: 1500}];

// Route to GET the list of shopping items
app.get('/', (req, res) => {
  res.json(shoppingList);
});

// Route to POST an item to the shopping list
app.post('/items', (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
  };
  shoppingList.push(newItem);
  res.status(201).json(newItem);
});

// Route to GET a single item's name and price
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  if (id >= 0 && id < shoppingList.length) {
    res.json(shoppingList[id]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Route to UPDATE existing items
app.patch('/items/:id', (req, res) => {
  const id = req.params.id;
  if (id >= 0 && id < shoppingList.length) {
    shoppingList[id].name = req.body.name || shoppingList[id].name;
    shoppingList[id].price = req.body.price || shoppingList[id].price;
    res.json(shoppingList[id]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Route to DELETE a specific item from the array of objects
app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  if (id >= 0 && id < shoppingList.length) {
    const deletedItem = shoppingList.splice(id, 1);
    res.json(deletedItem[0]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
