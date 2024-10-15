const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Product, Category } = require('../models');

const main = async () => {

    const ______ await new Product({
    
    });
    await ______.save()
    
    const ______ await new Product({
    
    });
    await ______.save()
    
    const ______ await new Product({
    
    });
    await ______.save()

    const ______ await new Product({
    
    });
    await ______.save()

    console.log("Created some categories!")
}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();