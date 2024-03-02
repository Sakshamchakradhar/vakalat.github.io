const mongoose = require('mongoose');
const Lawyer = require('../models/lawyers')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/wakaalat-on-web');
}

const law = new Lawyer({Name : 'Rohan Goyal' , Type : 'Family Lawyer'})
law.save();