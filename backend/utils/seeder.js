const Product = require('../models/product')
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const product = require('../data/product');

// setting dotenv file

dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try{
        await Product.deleteMany();
        console.log("Products are Deleted");
        await Product.insertMany(product);
        console.log("All Products are Added");
        process.exit();
    }catch (error){
        console.log(error.message);
        process.exit();
    }
}


seedProducts()