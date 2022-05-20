var express = require('express');
var router = express.Router();
// const sequelize = require("../utils/db");
const Customer = require("../models/customers");
// const Order = require("./models/order");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/insert', function(req, res, next) {
  Customer.create({
    id: 31523,
    name: 'asad',
    email: 'asas@gmail.com'
  }).catch( err => console.log(err) )

  res.send('inserted')

});



// router.get('/sql', function(req, res, next) {
//   // res.send('respond with a resource');
//   sequelize.sync().then((result)=>{
//     console.log(result)
//   }).catch( (err) => {
//       console.log(err)
//   })
// });





// Customer.hasMany(Order);

// let customerId = null;
// sequelize
//   .sync({force: true})
//   // .sync()
//   .then((result) => {
//     return Customer.create({name: "Chandler Bing", email: "cb@gmail.com"})
//     console.log(result);
//   })
//   .then(customer => {
//     customerId = customer.id;
//     console.log("First Customer Created: ",customer);
//     return customer.createOrder({total: 45});
//   })
//   .then(order => {
//     console.log("Order is : ",order);
//     return Order.findAll({ where: customerId});
//   })
//   .then(orders => {
//     console.log("All the Orders are : ",orders);
//   })
//   .catch((err) => {
//     console.log(err);
//   });












module.exports = router;
